// UI Management Module
class UIManager {
    constructor() {
        this.currentLanguage = 'de';
        this.currentCategory = 'general';
        this.currentDifficulty = 'all';
        this.isDarkMode = false;
        this.isLoading = false;
        this.activeModal = null;
        
        this.init();
    }

    init() {
        this.loadSavedPreferences();
        this.initializeEventListeners();
        this.updateTabs();
        this.updateContent();
        this.initializeKeyboardShortcuts();
        this.checkDeviceCapabilities();
    }

    loadSavedPreferences() {
        if (capabilities.supportsLocalStorage()) {
            this.currentLanguage = localStorage.getItem(config.storageKeys.language) || config.defaultLanguage;
            this.isDarkMode = localStorage.getItem(config.storageKeys.darkMode) === 'true';
            this.currentDifficulty = localStorage.getItem(config.storageKeys.difficulty) || config.defaultDifficulty;
            this.currentCategory = localStorage.getItem(config.storageKeys.category) || config.defaultCategory;
        }

        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
            this.updateDarkModeButton();
        }

        if (device.prefersDarkMode() && !localStorage.getItem(config.storageKeys.darkMode)) {
            this.toggleDarkMode();
        }
    }

    savePreferences() {
        if (capabilities.supportsLocalStorage()) {
            localStorage.setItem(config.storageKeys.language, this.currentLanguage);
            localStorage.setItem(config.storageKeys.darkMode, this.isDarkMode);
            localStorage.setItem(config.storageKeys.difficulty, this.currentDifficulty);
            localStorage.setItem(config.storageKeys.category, this.currentCategory);
        }
    }

    setLanguage(lang) {
    if (!translations[lang]) return;
    
    console.log('Switching language to:', lang);
    
    this.currentLanguage = lang;
    window.currentLanguage = lang; // Globale Variable setzen
    this.savePreferences();
    
    this.updateLanguageButtons();
    this.updateTranslations();
    this.updateTabs();
    
    // Content erst nach kurzer Verzögerung aktualisieren
    setTimeout(() => {
        this.updateContent();
    }, 50);
    
    // Stats als letztes mit längerer Verzögerung
    setTimeout(() => {
        this.updateStats();
        console.log('Language switch complete, stats updated');
    }, 200);
    
    this.showToast(t('language-changed', lang), 'success');
}

    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLanguage);
        });
    }

    updateTranslations() {
    const elementsToTranslate = [
        { id: 'main-title', key: 'main-title' },
        { id: 'subtitle', key: 'subtitle' },
        { id: 'version-text', key: 'version-text' },
        { id: 'tip-text', key: 'tip-text' },
        { id: 'loading-text', key: 'loading-text' },
        { id: 'help-title', key: 'help-title' }
        // stats-text NICHT hier!
    ];

    elementsToTranslate.forEach(({ id, key }) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = t(key, this.currentLanguage);
        }
    });

    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = t('search-placeholder', this.currentLanguage);
    }

    // Update filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        const difficulty = btn.getAttribute('data-difficulty');
        if (difficulty === 'all') {
            btn.textContent = t('all', this.currentLanguage);
        } else {
            btn.textContent = t(difficulty, this.currentLanguage);
        }
    });

    // Update button labels
    this.updateButtonLabels();
}

    updateButtonLabels() {
        const buttons = [
            { selector: '.action-btn-inline[onclick="exportShortcuts()"]', key: 'export' },
            { selector: '.action-btn-inline[onclick="toggleDarkMode()"]', key: this.isDarkMode ? 'light-mode' : 'dark-mode' },
            { selector: '.action-btn-inline[onclick="toggleFullscreen()"]', key: 'fullscreen' }
        ];

        buttons.forEach(({ selector, key }) => {
            const btn = document.querySelector(selector);
            if (btn) {
                const icon = btn.innerHTML.split(' ')[0];
                btn.innerHTML = `${icon} ${t(key, this.currentLanguage)}`;
            }
        });
    }

    updateTabs() {
    const tabsContainer = document.getElementById('tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    
    Object.keys(config.categories).forEach(categoryKey => {
        const category = config.categories[categoryKey];
        
        // Create wrapper div for each tab
        const tabWrapper = document.createElement('div');
        tabWrapper.className = 'tab-wrapper';
        
        // Create the tab button
        const tab = document.createElement('button');
        tab.className = `tab ${categoryKey === this.currentCategory ? 'active' : ''}`;
        tab.setAttribute('data-category', categoryKey);
        tab.onclick = () => this.showCategory(categoryKey);
        
        const name = categoryNames[this.currentLanguage][categoryKey] || categoryKey;
        tab.innerHTML = `${category.icon} ${name}`;
        
        // Create the counter badge
        const counter = document.createElement('span');
        counter.className = 'tab-counter';
        const count = shortcutsHelpers.getCategoryCount(categoryKey, this.currentLanguage);
        counter.textContent = count;
        
        // Append tab to wrapper, then counter to wrapper
        tabWrapper.appendChild(tab);
        tabWrapper.appendChild(counter);
        
        // Append wrapper to tabs container
        tabsContainer.appendChild(tabWrapper);
    });
}

    showCategory(categoryId) {
        this.currentCategory = categoryId;
        this.savePreferences();
        
        // Update tab states
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.toggle('active', tab.getAttribute('data-category') === categoryId);
        });
        
        this.updateContent();
        this.scrollToTop();
    }

    updateContent() {
    const content = document.getElementById('content');
    if (!content) return;

    this.showLoading();

    setTimeout(() => {
        const shortcuts = shortcutsHelpers.getShortcutsByDifficulty(
            this.currentCategory, 
            this.currentLanguage, 
            this.currentDifficulty
        );

        if (shortcuts.length === 0) {
            content.innerHTML = `
                <div class="no-shortcuts">
                    <h3>${t('no-shortcuts', this.currentLanguage)}</h3>
                    <p>No shortcuts found for this category and difficulty level.</p>
                </div>
            `;
            this.updateStats(); // Stats auch hier aktualisieren
            return;
        }

        const categoryTitle = categoryNames[this.currentLanguage][this.currentCategory];
        const categoryIcon = config.categories[this.currentCategory].icon;
        
        content.innerHTML = `
            <div class="category active">
                <h2 class="category-title">${categoryIcon} ${categoryTitle}</h2>
                <div class="shortcut-grid" id="shortcut-grid">
                    ${shortcuts.map(shortcut => this.createShortcutHTML(shortcut)).join('')}
                </div>
            </div>
        `;
        
        this.updateStats(); // Stats nach dem Content-Update aktualisieren
        this.hideLoading();
    }, config.loadingDelay);
}

    createShortcutHTML(shortcut) {
        const difficultyText = difficultyLevels[this.currentLanguage][shortcut.difficulty];
        
        return `
            <div class="shortcut-item" data-difficulty="${shortcut.difficulty}" data-tags="${shortcut.tags ? shortcut.tags.join(',') : ''}">
                <span class="shortcut-key" title="${t('copy', this.currentLanguage)}" onclick="copyShortcut('${shortcut.key.replace(/'/g, "\\'")}')">${shortcut.key}</span>
                <div class="shortcut-content">
                    <div class="shortcut-description">
                        ${shortcut.desc}
                        <span class="difficulty-badge difficulty-${shortcut.difficulty}">${difficultyText}</span>
                    </div>
                    <div class="shortcut-note">${shortcut.note}</div>
                </div>
                <button class="copy-btn" onclick="copyShortcut('${shortcut.key.replace(/'/g, "\\'")}')" title="${t('copy', this.currentLanguage)}">📋</button>
            </div>
        `;
    }

    showLoading() {
        this.isLoading = true;
        const content = document.getElementById('content');
        if (content) {
            content.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                    <span>${t('loading-text', this.currentLanguage)}</span>
                </div>
            `;
        }
    }

    hideLoading() {
        this.isLoading = false;
    }

    setDifficultyFilter(difficulty) {
        this.currentDifficulty = difficulty;
        this.savePreferences();
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-difficulty') === difficulty);
        });
        
        this.updateContent();
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode', this.isDarkMode);
        this.updateDarkModeButton();
        this.savePreferences();
        
        this.showToast(
            t(this.isDarkMode ? 'dark-mode-enabled' : 'dark-mode-disabled', this.currentLanguage), 
            'success'
        );
    }

    updateDarkModeButton() {
        const darkBtn = document.querySelector('.action-btn-inline[onclick="toggleDarkMode()"]');
        if (darkBtn) {
            const icon = this.isDarkMode ? '☀️' : '🌙';
            const text = t(this.isDarkMode ? 'light-mode' : 'dark-mode', this.currentLanguage);
            darkBtn.innerHTML = `${icon} ${text}`;
        }
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, config.toastDisplayTime);
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            this.activeModal = modalId;
            document.body.style.overflow = 'hidden';
            
            // Focus first focusable element in modal
            const focusable = modal.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable) focusable.focus();
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            this.activeModal = null;
            document.body.style.overflow = '';
        }
    }

    showHelp() {
        this.updateHelpContent();
        this.showModal('helpModal');
    }

    updateHelpContent() {
        const helpContent = document.getElementById('help-content');
        if (!helpContent) return;

        helpContent.innerHTML = `
            <h3>${t('help-search', this.currentLanguage)}</h3>
            <p>${t('help-search-desc', this.currentLanguage)}</p>
            
            <h3>${t('help-keyboard', this.currentLanguage)}</h3>
            <ul>
                <li><kbd>Ctrl + F</kbd> - ${t('shortcut-app-focus', this.currentLanguage)}</li>
                <li><kbd>Alt + 1/2/3</kbd> - ${t('shortcut-app-lang', this.currentLanguage)}</li>
                <li><kbd>Ctrl + 1-9</kbd> - ${t('shortcut-app-category', this.currentLanguage)}</li>
                <li><kbd>Ctrl + D</kbd> - ${t('shortcut-app-dark', this.currentLanguage)}</li>
                <li><kbd>Esc</kbd> - ${t('shortcut-app-clear', this.currentLanguage)}</li>
            </ul>
            
            <h3>${t('help-difficulty', this.currentLanguage)}</h3>
            <div class="difficulty-info">
                <span class="difficulty-badge difficulty-beginner">${t('beginner', this.currentLanguage)}</span> - ${t('help-difficulty-beginner', this.currentLanguage)}
                <br>
                <span class="difficulty-badge difficulty-intermediate">${t('intermediate', this.currentLanguage)}</span> - ${t('help-difficulty-intermediate', this.currentLanguage)}
                <br>
                <span class="difficulty-badge difficulty-advanced">${t('advanced', this.currentLanguage)}</span> - ${t('help-difficulty-advanced', this.currentLanguage)}
            </div>
            
            <h3>${t('help-tips', this.currentLanguage)}</h3>
            <p>${t('help-tips-desc', this.currentLanguage)}</p>
        `;
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    toggleFullscreen() {
        if (!capabilities.supportsFullscreen()) {
            this.showToast(t('fullscreen-not-supported', this.currentLanguage), 'error');
            return;
        }

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                this.showToast(t('fullscreen-error', this.currentLanguage), 'error');
            });
        } else {
            document.exitFullscreen();
        }
    }

    updateStats() {
    console.log('updateStats called, currentLanguage:', this.currentLanguage);
    
    const visibleItems = document.querySelectorAll('.shortcut-item:not([style*="none"])').length;
    const totalItems = shortcutsHelpers.getCategoryCount(this.currentCategory, this.currentLanguage);
    
    const statsElement = document.getElementById('stats-text');
    if (statsElement) {
        const isSearching = window.searchManager && window.searchManager.isSearching && window.searchManager.currentSearchTerm;
        
        let newText;
        if (isSearching && visibleItems < totalItems) {
            newText = tf('showing-results', visibleItems, totalItems);
        } else {
            const totalShortcuts = shortcutsHelpers.getTotalCount(this.currentLanguage);
            const totalCategories = Object.keys(config.categories).length;
            newText = tf('stats-text', totalShortcuts, totalCategories);
        }
        
        console.log('Setting stats text to:', newText);
        
        // Sicherstellen, dass der Text wirklich gesetzt wird
        statsElement.textContent = newText;
        
        // Force reflow
        statsElement.style.display = 'none';
        statsElement.offsetHeight; // Trigger reflow
        statsElement.style.display = '';
        
        // Alternative: innerHTML verwenden
        statsElement.innerHTML = newText;
        
        console.log('Stats element content after update:', statsElement.textContent);
    } else {
        console.log('Stats element not found!');
    }
}

    initializeEventListeners() {
        // Filter buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const difficulty = e.target.getAttribute('data-difficulty');
                this.setDifficultyFilter(difficulty);
            }
        });

        // Modal close events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(this.activeModal);
            }
        });

        // Copy shortcuts by clicking on them
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('shortcut-key')) {
                copyShortcut(e.target.textContent);
            }
        });

        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (this.activeModal && e.key === 'Escape') {
                this.closeModal(this.activeModal);
            }
        });

        // Handle window resize
        window.addEventListener('resize', debounce(() => {
            this.checkDeviceCapabilities();
        }, 250));

        // Handle scroll for back-to-top button visibility
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollBtn = document.querySelector('.action-btn[onclick="scrollToTop()"]');
            
            if (scrollBtn) {
                scrollBtn.style.opacity = scrollTop > 200 ? '1' : '0.7';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    initializeKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            const key = this.getKeyCombo(e);
            const action = config.appShortcuts[key];
            
            if (action && !this.isInputFocused()) {
                e.preventDefault();
                this.executeAction(action, e);
            }
        });
    }

    getKeyCombo(e) {
        const parts = [];
        if (e.ctrlKey) parts.push('ctrl');
        if (e.altKey) parts.push('alt');
        if (e.shiftKey) parts.push('shift');
        parts.push(e.key.toLowerCase());
        return parts.join('+');
    }

    isInputFocused() {
        const activeElement = document.activeElement;
        return activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.isContentEditable
        );
    }

    executeAction(action, event) {
        if (action.includes(':')) {
            const [actionType, value] = action.split(':');
            switch (actionType) {
                case 'setLanguage':
                    this.setLanguage(value);
                    break;
                case 'setCategory':
                    this.showCategory(value);
                    break;
            }
        } else {
            switch (action) {
                case 'focusSearch':
                    const searchInput = document.getElementById('searchInput');
                    if (searchInput) searchInput.focus();
                    break;
                case 'toggleDarkMode':
                    this.toggleDarkMode();
                    break;
                case 'clearSearch':
                    clearSearch();
                    break;
                case 'toggleFullscreen':
                    this.toggleFullscreen();
                    break;
                case 'showHelp':
                    this.showHelp();
                    break;
                case 'exportShortcuts':
                    exportShortcuts();
                    break;
            }
        }
    }

    checkDeviceCapabilities() {
        // Adjust UI based on device capabilities
        const container = document.querySelector('.container');
        
        if (device.isMobile()) {
            container.classList.add('mobile-layout');
        } else {
            container.classList.remove('mobile-layout');
        }

        if (!device.hasHover()) {
            document.body.classList.add('no-hover');
        }

        if (device.prefersReducedMotion()) {
            document.body.classList.add('reduced-motion');
        }
    }

    // Performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Global functions that need to be accessible from HTML
function setLanguage(lang) {
    if (window.uiManager) {
        window.uiManager.setLanguage(lang);
    }
}

function showCategory(categoryId) {
    if (window.uiManager) {
        window.uiManager.showCategory(categoryId);
    }
}

function toggleDarkMode() {
    if (window.uiManager) {
        window.uiManager.toggleDarkMode();
    }
}

function showHelp() {
    if (window.uiManager) {
        window.uiManager.showHelp();
    }
}

function closeModal(modalId) {
    if (window.uiManager) {
        window.uiManager.closeModal(modalId);
    }
}

function scrollToTop() {
    if (window.uiManager) {
        window.uiManager.scrollToTop();
    }
}

function toggleFullscreen() {
    if (window.uiManager) {
        window.uiManager.toggleFullscreen();
    }
}

function showKeyboardShortcuts() {
    if (window.uiManager) {
        window.uiManager.showHelp();
    }
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UIManager };
}
