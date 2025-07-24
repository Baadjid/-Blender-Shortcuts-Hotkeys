// Application configuration
const config = {
    // Default settings
    defaultLanguage: 'de',
    defaultTheme: 'light',
    defaultDifficulty: 'all',
    defaultCategory: 'general',
    
    // Search settings
    searchDebounceTime: 300,
    minSearchLength: 1,
    maxSearchResults: 100,
    
    // UI settings
    animationDuration: 300,
    toastDisplayTime: 3000,
    loadingDelay: 500,
    
    // Export settings
    exportFormats: ['markdown', 'json', 'csv', 'txt'],
    defaultExportFormat: 'markdown',
    
    // Keyboard shortcuts for the app
    appShortcuts: {
        'ctrl+f': 'focusSearch',
        'alt+1': 'setLanguage:de',
        'alt+2': 'setLanguage:en', 
        'alt+3': 'setLanguage:ru',
        'ctrl+1': 'setCategory:general',
        'ctrl+2': 'setCategory:navigation',
        'ctrl+3': 'setCategory:selection',
        'ctrl+4': 'setCategory:object',
        'ctrl+5': 'setCategory:edit',
        'ctrl+6': 'setCategory:modeling',
        'ctrl+7': 'setCategory:animation',
        'ctrl+8': 'setCategory:rendering',
        'ctrl+9': 'setCategory:uv',
        'ctrl+0': 'setCategory:advanced',
        'ctrl+d': 'toggleDarkMode',
        'escape': 'clearSearch',
        'f11': 'toggleFullscreen',
        'ctrl+h': 'showHelp',
        'ctrl+e': 'exportShortcuts'
    },
    
    // Categories configuration with icons and metadata
    categories: {
        general: { 
            icon: '🌟', 
            color: '#3498db',
            priority: 1,
            description: 'Basic Blender shortcuts everyone should know'
        },
        navigation: { 
            icon: '🧭', 
            color: '#2ecc71',
            priority: 2,
            description: 'Navigate and control viewport views'
        },
        selection: { 
            icon: '🎯', 
            color: '#f39c12',
            priority: 3,
            description: 'Select and deselect objects and components'
        },
        object: { 
            icon: '📦', 
            color: '#9b59b6',
            priority: 4,
            description: 'Object mode operations and transformations'
        },
        edit: { 
            icon: '✏️', 
            color: '#e74c3c',
            priority: 5,
            description: 'Edit mode tools and selection methods'
        },
        modeling: { 
            icon: '🔨', 
            color: '#34495e',
            priority: 6,
            description: 'Mesh editing and modeling operations'
        },
        animation: { 
            icon: '🎬', 
            color: '#1abc9c',
            priority: 7,
            description: 'Animation timeline and keyframe controls'
        },
        rendering: { 
            icon: '🎨', 
            color: '#e67e22',
            priority: 8,
            description: 'Rendering and viewport shading options'
        },
        uv: { 
            icon: '🗺️', 
            color: '#8e44ad',
            priority: 9,
            description: 'UV mapping and texture coordinate editing'
        },
        advanced: { 
            icon: '⚡', 
            color: '#c0392b',
            priority: 10,
            description: 'Advanced tools and specialized workflows'
        }
    },
    
    // Difficulty levels configuration
    difficulties: {
        beginner: {
            color: '#27ae60',
            priority: 1,
            description: 'Essential shortcuts for new users'
        },
        intermediate: {
            color: '#f39c12', 
            priority: 2,
            description: 'Commonly used shortcuts for regular work'
        },
        advanced: {
            color: '#e74c3c',
            priority: 3,
            description: 'Specialized shortcuts for power users'
        }
    },
    
    // Storage keys for localStorage
    storageKeys: {
        language: 'blenderShortcutsLang',
        theme: 'blenderShortcutsTheme',
        difficulty: 'blenderShortcutsDifficulty',
        category: 'blenderShortcutsCategory',
        darkMode: 'blenderShortcutsDarkMode',
        preferences: 'blenderShortcutsPrefs'
    },
    
    // Feature flags
    features: {
        exportEnabled: true,
        printModeEnabled: true,
        keyboardShortcutsEnabled: true,
        tooltipsEnabled: true,
        animationsEnabled: true,
        soundEnabled: false,
        analyticsEnabled: false
    },
    
    // Performance settings
    performance: {
        lazyLoading: true,
        virtualScrolling: false,
        debounceSearch: true,
        preloadImages: false
    },
    
    // Accessibility settings
    accessibility: {
        highContrastMode: false,
        reducedMotion: false,
        screenReaderSupport: true,
        keyboardNavigation: true,
        focusIndicators: true
    },
    
    // Development settings
    development: {
        debugMode: false,
        showPerformanceMetrics: false,
        logLevel: 'warn', // 'debug', 'info', 'warn', 'error'
        enableDevTools: false
    },
    
    // Version information
    version: {
        app: '2.0.0',
        blenderSupport: '4.x',
        lastUpdated: '2024-01-15',
        apiVersion: '1.0'
    },
    
    // External links
    links: {
        blenderOfficial: 'https://www.blender.org',
        blenderDocs: 'https://docs.blender.org',
        blenderShortcuts: 'https://docs.blender.org/manual/en/latest/interface/keymap/introduction.html',
        github: 'https://github.com/blender/blender',
        community: 'https://blender.community',
        support: 'https://www.blender.org/support/'
    }
};

// Device detection
const device = {
    isMobile: () => window.innerWidth <= 768,
    isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
    isDesktop: () => window.innerWidth > 1024,
    isTouchDevice: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    hasHover: () => window.matchMedia('(hover: hover)').matches,
    prefersDarkMode: () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    prefersReducedMotion: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    prefersHighContrast: () => window.matchMedia('(prefers-contrast: high)').matches
};

// Browser capabilities
const capabilities = {
    supportsLocalStorage: () => {
        try {
            const test = 'test';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    },
    supportsClipboard: () => navigator.clipboard && navigator.clipboard.writeText,
    supportsFullscreen: () => document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled,
    supportsIntersectionObserver: () => 'IntersectionObserver' in window,
    supportsServiceWorker: () => 'serviceWorker' in navigator,
    supportsWebShare: () => navigator.share,
    supportsPWA: () => 'standalone' in window.navigator || window.matchMedia('(display-mode: standalone)').matches
};

// Initialize device-specific configuration
function initializeDeviceConfig() {
    // Adjust configuration based on device capabilities
    if (device.isMobile()) {
        config.searchDebounceTime = 500;
        config.animationDuration = 200;
        config.performance.lazyLoading = true;
    }
    
    if (device.prefersDarkMode()) {
        config.defaultTheme = 'dark';
    }
    
    if (device.prefersReducedMotion()) {
        config.accessibility.reducedMotion = true;
        config.features.animationsEnabled = false;
        config.animationDuration = 0;
    }
    
    if (device.prefersHighContrast()) {
        config.accessibility.highContrastMode = true;
    }
    
    // Disable features not supported by browser
    if (!capabilities.supportsClipboard()) {
        config.features.copyToClipboard = false;
    }
    
    if (!capabilities.supportsFullscreen()) {
        config.features.fullscreenMode = false;
    }
}

// Get configuration value with fallback
function getConfig(path, fallback = null) {
    const keys = path.split('.');
    let value = config;
    
    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return fallback;
        }
    }
    
    return value;
}

// Set configuration value
function setConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let target = config;
    
    for (const key of keys) {
        if (!(key in target) || typeof target[key] !== 'object') {
            target[key] = {};
        }
        target = target[key];
    }
    
    target[lastKey] = value;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        config,
        device,
        capabilities,
        initializeDeviceConfig,
        getConfig,
        setConfig
    };
}