// Main application entry point
class BlenderShortcutsApp {
    constructor() {
        this.version = config.version.app;
        this.isInitialized = false;
        this.modules = {};
        
        this.init();
    }

    async init() {
        try {
            // Show loading state
            this.showInitialLoading();
            
            // Initialize device configuration
            initializeDeviceConfig();
            
            // Initialize core modules
            await this.initializeModules();
            
            // Load complete shortcuts data
            await this.loadCompleteShortcutsData();
            
            // Setup error handling
            this.setupErrorHandling();
            
            // Setup performance monitoring
            if (config.development.showPerformanceMetrics) {
                this.setupPerformanceMonitoring();
            }
            
            // Initialize PWA features
            this.initializePWA();
            
            // Setup analytics (if enabled)
            if (config.features.analyticsEnabled) {
                this.initializeAnalytics();
            }
            
            // Mark as initialized
            this.isInitialized = true;
            
            // Hide loading and show app
            this.hideInitialLoading();
            
            // Log successful initialization
            this.logInfo('Blender Shortcuts App initialized successfully');
            
        } catch (error) {
            this.handleInitializationError(error);
        }
    }

    showInitialLoading() {
        const content = document.getElementById('content');
        if (content) {
            content.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <span>Loading Blender Shortcuts App...</span>
                    <div class="loading-progress">
                        <div class="progress-bar" id="loadingProgress"></div>
                    </div>
                </div>
            `;
        }
    }

    hideInitialLoading() {
        setTimeout(() => {
            const loadingElement = document.querySelector('.loading');
            if (loadingElement) {
                loadingElement.style.display = 'none';
            }
        }, config.loadingDelay);
    }

    async initializeModules() {
        const startTime = performance.now();
        
        try {
            // Initialize UI Manager
            this.updateLoadingProgress(20, 'Initializing UI...');
            this.modules.ui = new UIManager();
            window.uiManager = this.modules.ui;
            
            // Initialize Search Manager
            this.updateLoadingProgress(40, 'Setting up search...');
            this.modules.search = new SearchManager();
            window.searchManager = this.modules.search;
            
            // Initialize Export Manager
            this.updateLoadingProgress(60, 'Preparing export features...');
            this.modules.export = new ExportManager();
            window.exportManager = this.modules.export;
            
            // Setup inter-module communication
            this.updateLoadingProgress(80, 'Connecting modules...');
            this.setupModuleCommunication();
            
            this.updateLoadingProgress(100, 'Ready!');
            
            const endTime = performance.now();
            this.logInfo(`Modules initialized in ${Math.round(endTime - startTime)}ms`);
            
        } catch (error) {
            this.logError('Module initialization failed:', error);
            throw error;
        }
    }

    updateLoadingProgress(percentage, message) {
        const progressBar = document.getElementById('loadingProgress');
        const loadingText = document.querySelector('.loading span');
        
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        
        if (loadingText && message) {
            loadingText.textContent = message;
        }
    }

    async loadCompleteShortcutsData() {
        // In a real application, you might load additional shortcuts data here
        // For now, we'll just validate the existing data
        
        const totalShortcuts = shortcutsHelpers.getTotalCount('de');
        this.logInfo(`Loaded ${totalShortcuts} shortcuts total`);
        
        // Validate data integrity
        this.validateShortcutsData();
    }

    validateShortcutsData() {
        const languages = ['de', 'en', 'ru'];
        const categories = Object.keys(config.categories);
        
        let validationErrors = [];
        
        categories.forEach(category => {
            languages.forEach(lang => {
                const shortcuts = shortcutsHelpers.getShortcuts(category, lang);
                
                if (shortcuts.length === 0) {
                    validationErrors.push(`No shortcuts found for ${category}/${lang}`);
                }
                
                shortcuts.forEach((shortcut, index) => {
                    if (!shortcut.key || !shortcut.desc) {
                        validationErrors.push(`Invalid shortcut at ${category}/${lang}[${index}]`);
                    }
                });
            });
        });
        
        if (validationErrors.length > 0) {
            this.logWarn('Data validation issues found:', validationErrors);
        } else {
            this.logInfo('All shortcuts data validated successfully');
        }
    }

    setupModuleCommunication() {
        // Setup event system for module communication
        this.eventBus = new EventTarget();
        
        // UI events
        this.eventBus.addEventListener('language-changed', (e) => {
            this.modules.search?.updateTranslations?.();
            this.modules.export?.updateTranslations?.();
        });
        
        this.eventBus.addEventListener('category-changed', (e) => {
            this.modules.search?.clearSearch?.();
        });
        
        this.eventBus.addEventListener('search-performed', (e) => {
            // Track search analytics if enabled
            if (config.features.analyticsEnabled) {
                this.trackEvent('search', { term: e.detail.term });
            }
        });
    }

    setupErrorHandling() {
        // Global error handler
        window.addEventListener('error', (event) => {
            this.handleError(event.error, 'Global error');
        });
        
        // Unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (event) => {
            this.handleError(event.reason, 'Unhandled promise rejection');
        });
        
        // Custom error handler for the app
        window.handleAppError = (error, context) => {
            this.handleError(error, context);
        };
    }

    handleError(error, context = 'Unknown') {
        const errorInfo = {
            message: error.message || 'Unknown error',
            stack: error.stack,
            context: context,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
        };
        
        this.logError(`Error in ${context}:`, errorInfo);
        
        // Show user-friendly error message
        if (this.modules.ui) {
            this.modules.ui.showToast(
                t('error-occurred', this.modules.ui.currentLanguage), 
                'error'
            );
        }
        
        // Report to analytics if enabled
        if (config.features.analyticsEnabled) {
            this.trackEvent('error', errorInfo);
        }
    }

    handleInitializationError(error) {
        this.logError('App initialization failed:', error);
        
        // Show fallback error UI
        const content = document.getElementById('content');
        if (content) {
            content.innerHTML = `
                <div class="error-state">
                    <h2>⚠️ Initialization Error</h2>
                    <p>The application failed to initialize properly.</p>
                    <p>Please refresh the page or check your browser console for details.</p>
                    <button onclick="window.location.reload()" class="retry-btn">
                        🔄 Retry
                    </button>
                </div>
            `;
        }
    }

    setupPerformanceMonitoring() {
        // Monitor Core Web Vitals
        this.observePerformanceMetrics();
        
        // Monitor memory usage
        if ('memory' in performance) {
            setInterval(() => {
                const memory = performance.memory;
                this.logDebug('Memory usage:', {
                    used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
                    total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
                    limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
                });
            }, 30000); // Every 30 seconds
        }
    }

    observePerformanceMetrics() {
        // Largest Contentful Paint
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    this.logDebug(`${entry.entryType}:`, entry);
                }
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        }
    }

    initializePWA() {
        // Add manifest to head if not already present
        if (!document.querySelector('link[rel="manifest"]')) {
            const manifestLink = document.createElement('link');
            manifestLink.rel = 'manifest';
            manifestLink.href = '/manifest.json';
            document.head.appendChild(manifestLink);
        }

        // Add theme color meta tag
        if (!document.querySelector('meta[name="theme-color"]')) {
            const themeColorMeta = document.createElement('meta');
            themeColorMeta.name = 'theme-color';
            themeColorMeta.content = '#3498db';
            document.head.appendChild(themeColorMeta);
        }

        // Register service worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        this.logInfo('SW registered:', registration);
                        
                        // Check for updates
                        registration.addEventListener('updatefound', () => {
                            const newWorker = registration.installing;
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    this.showUpdateAvailable();
                                }
                            });
                        });

                        // Listen for messages from service worker
                        navigator.serviceWorker.addEventListener('message', (event) => {
                            this.handleServiceWorkerMessage(event.data);
                        });
                    })
                    .catch(registrationError => {
                        this.logWarn('SW registration failed:', registrationError);
                    });
            });
        }
        
        // Handle app install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallPrompt();
        });
        
        // Handle app installed
        window.addEventListener('appinstalled', () => {
            this.logInfo('App was installed');
            if (config.features.analyticsEnabled) {
                this.trackEvent('app_installed');
            }
            
            // Hide install prompt
            this.deferredPrompt = null;
            this.hideInstallPrompt();
        });

        // Handle PWA display mode changes
        window.addEventListener('DOMContentLoaded', () => {
            this.detectPWAMode();
        });
    }

    detectPWAMode() {
        // Detect if running as PWA
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                           window.navigator.standalone ||
                           document.referrer.includes('android-app://');

        if (isStandalone) {
            document.body.classList.add('pwa-mode');
            this.logInfo('Running in PWA mode');
            
            if (config.features.analyticsEnabled) {
                this.trackEvent('pwa_launch');
            }
        }
    }

    handleServiceWorkerMessage(data) {
        switch (data.type) {
            case 'SW_ACTIVATED':
                this.logInfo('Service Worker activated:', data.version);
                break;
                
            case 'SYNC_COMPLETE':
                this.logInfo('Background sync completed');
                if (this.modules.ui) {
                    this.modules.ui.showToast(
                        t('sync-complete', this.modules.ui.currentLanguage),
                        'success'
                    );
                }
                break;
                
            default:
                this.logInfo('SW message:', data);
        }
    }

    showUpdateAvailable() {
        if (this.modules.ui) {
            const message = t('update-available', this.modules.ui.currentLanguage);
            
            // Create update notification
            const updateNotification = document.createElement('div');
            updateNotification.className = 'update-notification';
            updateNotification.innerHTML = `
                <div class="update-content">
                    <span>${message}</span>
                    <button onclick="window.app.applyUpdate()" class="update-btn">
                        ${t('update-now', this.modules.ui.currentLanguage)}
                    </button>
                    <button onclick="this.parentElement.parentElement.remove()" class="dismiss-btn">
                        ${t('later', this.modules.ui.currentLanguage)}
                    </button>
                </div>
            `;
            
            // Add styles
            updateNotification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(45deg, #3498db, #2980b9);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                z-index: 10000;
                max-width: 350px;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(updateNotification);
            
            // Auto-remove after 10 seconds
            setTimeout(() => {
                if (updateNotification.parentElement) {
                    updateNotification.remove();
                }
            }, 10000);
        }
    }

    async applyUpdate() {
        try {
            if ('serviceWorker' in navigator) {
                const registration = await navigator.serviceWorker.ready;
                
                if (registration.waiting) {
                    // Tell the waiting service worker to skip waiting
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                    
                    // Reload the page to use the new service worker
                    window.location.reload();
                }
            }
        } catch (error) {
            this.logError('Failed to apply update:', error);
        }
    }

    showInstallPrompt() {
        // Create install prompt
        const installPrompt = document.createElement('div');
        installPrompt.id = 'installPrompt';
        installPrompt.className = 'install-prompt';
        installPrompt.innerHTML = `
            <div class="install-content">
                <h3>${t('install-app', this.modules.ui?.currentLanguage || 'de')}</h3>
                <p>${t('install-description', this.modules.ui?.currentLanguage || 'de')}</p>
                <div class="install-actions">
                    <button onclick="window.app.installApp()" class="install-btn">
                        📱 ${t('install', this.modules.ui?.currentLanguage || 'de')}
                    </button>
                    <button onclick="window.app.hideInstallPrompt()" class="dismiss-btn">
                        ${t('not-now', this.modules.ui?.currentLanguage || 'de')}
                    </button>
                </div>
            </div>
        `;
        
        // Add styles
        installPrompt.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            padding: 20px;
            border-left: 4px solid #3498db;
            animation: slideUp 0.3s ease;
            max-width: 400px;
            margin: 0 auto;
        `;
        
        document.body.appendChild(installPrompt);
        this.logInfo('Install prompt shown');
    }

    hideInstallPrompt() {
        const prompt = document.getElementById('installPrompt');
        if (prompt) {
            prompt.remove();
        }
    }

    async installApp() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                this.logInfo('User accepted app install');
            } else {
                this.logInfo('User dismissed app install');
            }
            
            this.deferredPrompt = null;
        }
    }

    initializeAnalytics() {
        // Initialize analytics service (placeholder)
        this.logInfo('Analytics initialized');
        
        // Track app start
        this.trackEvent('app_start', {
            version: this.version,
            language: this.modules.ui?.currentLanguage || 'de',
            device: {
                mobile: device.isMobile(),
                tablet: device.isTablet(),
                desktop: device.isDesktop()
            }
        });
    }

    trackEvent(eventName, data = {}) {
        if (!config.features.analyticsEnabled) return;
        
        // Placeholder for analytics tracking
        this.logDebug('Analytics event:', { event: eventName, data });
    }

    // Logging methods
    logDebug(...args) {
        if (config.development.logLevel === 'debug') {
            console.log('[DEBUG]', ...args);
        }
    }

    logInfo(...args) {
        if (['debug', 'info'].includes(config.development.logLevel)) {
            console.info('[INFO]', ...args);
        }
    }

    logWarn(...args) {
        if (['debug', 'info', 'warn'].includes(config.development.logLevel)) {
            console.warn('[WARN]', ...args);
        }
    }

    logError(...args) {
        console.error('[ERROR]', ...args);
    }

    // Public API methods
    getVersion() {
        return this.version;
    }

    isReady() {
        return this.isInitialized;
    }

    getModule(name) {
        return this.modules[name];
    }

    // Cleanup method
    destroy() {
        // Cleanup modules
        Object.values(this.modules).forEach(module => {
            if (module.destroy && typeof module.destroy === 'function') {
                module.destroy();
            }
        });
        
        // Remove global references
        delete window.uiManager;
        delete window.searchManager;
        delete window.exportManager;
        delete window.app;
        
        this.logInfo('App destroyed');
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    window.app = new BlenderShortcutsApp();
    
    // Globale Variable für aktuellen Sprache setzen
    window.currentLanguage = 'de';
    
    // Add debugging helpers in development
    if (config.development.enableDevTools) {
        window.debug = {
            config,
            device,
            capabilities,
            shortcutsData,
            shortcutsHelpers,
            translations
        };
        
        console.log('🛠️ Debug tools available in window.debug');
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (window.app && config.features.analyticsEnabled) {
        window.app.trackEvent('page_visibility', {
            hidden: document.hidden
        });
    }
});

// Handle online/offline states
window.addEventListener('online', () => {
    if (window.uiManager) {
        window.uiManager.showToast(t('back-online', window.uiManager.currentLanguage), 'success');
    }
});

window.addEventListener('offline', () => {
    if (window.uiManager) {
        window.uiManager.showToast(t('gone-offline', window.uiManager.currentLanguage), 'warning');
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BlenderShortcutsApp };
}
