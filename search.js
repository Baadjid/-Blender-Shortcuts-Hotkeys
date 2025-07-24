// Search functionality module
class SearchManager {
    constructor() {
        this.searchInput = null;
        this.clearButton = null;
        this.currentSearchTerm = '';
        this.searchResults = [];
        this.isSearching = false;
        
        this.init();
    }

    init() {
        this.searchInput = document.getElementById('searchInput');
        this.clearButton = document.getElementById('searchClear');
        
        if (this.searchInput) {
            this.initializeSearchEvents();
        }
    }

    initializeSearchEvents() {
        // Search input with debouncing
        this.searchInput.addEventListener('input', debounce((e) => {
            this.performSearch(e.target.value);
        }, config.searchDebounceTime));

        // Clear button
        if (this.clearButton) {
            this.clearButton.addEventListener('click', () => {
                this.clearSearch();
            });
        }

        // Enter key to focus first result
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.searchResults.length > 0) {
                e.preventDefault();
                this.focusFirstResult();
            }
        });

        // Escape key to clear search
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.clearSearch();
            }
        });
    }

    performSearch(searchTerm) {
        this.currentSearchTerm = searchTerm.toLowerCase().trim();
        
        // Update clear button visibility
        this.updateClearButton();
        
        if (this.currentSearchTerm.length < config.minSearchLength) {
            this.clearHighlights();
            this.resetView();
            return;
        }

        this.isSearching = true;
        this.highlightResults();
        this.updateSearchStats();
    }

    highlightResults() {
        const shortcutItems = document.querySelectorAll('.shortcut-item');
        this.searchResults = [];
        let visibleCount = 0;

        shortcutItems.forEach((item, index) => {
            const key = item.querySelector('.shortcut-key')?.textContent.toLowerCase() || '';
            const description = item.querySelector('.shortcut-description')?.textContent.toLowerCase() || '';
            const note = item.querySelector('.shortcut-note')?.textContent.toLowerCase() || '';
            const tags = item.getAttribute('data-tags')?.toLowerCase() || '';
            
            const isMatch = this.isMatchingItem(key, description, note, tags);
            
            if (isMatch) {
                this.showItem(item, true);
                this.searchResults.push({
                    element: item,
                    key: key,
                    description: description,
                    index: index
                });
                visibleCount++;
            } else {
                this.hideItem(item);
            }
        });

        // Show all categories if searching
        if (this.currentSearchTerm) {
            this.showAllCategories();
        } else {
            this.resetView();
        }

        // Scroll to first result if available
        if (this.searchResults.length > 0) {
            this.scrollToFirstResult();
        }
    }

    isMatchingItem(key, description, note, tags) {
        const searchTerm = this.currentSearchTerm;
        
        // Exact key match gets highest priority
        if (key.includes(searchTerm)) return true;
        
        // Description match
        if (description.includes(searchTerm)) return true;
        
        // Note match
        if (note.includes(searchTerm)) return true;
        
        // Tags match
        if (tags.includes(searchTerm)) return true;
        
        // Fuzzy matching for typos
        if (this.fuzzyMatch(key, searchTerm) || 
            this.fuzzyMatch(description, searchTerm)) {
            return true;
        }
        
        return false;
    }

    fuzzyMatch(text, pattern) {
        // Simple fuzzy matching algorithm
        if (pattern.length > text.length) return false;
        if (pattern === text) return true;
        
        let patternIdx = 0;
        for (let i = 0; i < text.length && patternIdx < pattern.length; i++) {
            if (text[i] === pattern[patternIdx]) {
                patternIdx++;
            }
        }
        
        return patternIdx === pattern.length;
    }

    showItem(item, highlight = false) {
        item.style.display = 'flex';
        if (highlight) {
            item.classList.add('highlight');
            this.highlightText(item);
        }
    }

    hideItem(item) {
        item.style.display = 'none';
        item.classList.remove('highlight');
        this.removeHighlightedText(item);
    }

    highlightText(item) {
        const searchTerm = this.currentSearchTerm;
        if (!searchTerm) return;

        const textElements = item.querySelectorAll('.shortcut-key, .shortcut-description, .shortcut-note');
        
        textElements.forEach(element => {
            const originalText = element.getAttribute('data-original-text') || element.textContent;
            element.setAttribute('data-original-text', originalText);
            
            const highlightedText = this.createHighlightedText(originalText, searchTerm);
            element.innerHTML = highlightedText;
        });
    }

    createHighlightedText(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(`(${this.escapeRegex(searchTerm)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    removeHighlightedText(item) {
        const textElements = item.querySelectorAll('.shortcut-key, .shortcut-description, .shortcut-note');
        
        textElements.forEach(element => {
            const originalText = element.getAttribute('data-original-text');
            if (originalText) {
                element.textContent = originalText;
                element.removeAttribute('data-original-text');
            }
        });
    }

    clearHighlights() {
        const highlightedItems = document.querySelectorAll('.shortcut-item.highlight');
        highlightedItems.forEach(item => {
            item.classList.remove('highlight');
            this.removeHighlightedText(item);
        });

        // Remove all <mark> tags
        const marks = document.querySelectorAll('mark');
        marks.forEach(mark => {
            mark.outerHTML = mark.innerHTML;
        });
    }

    showAllCategories() {
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            category.classList.add('active');
        });

        // Hide tabs or show search mode indication
        const tabs = document.getElementById('tabs');
        if (tabs) {
            tabs.classList.add('search-mode');
        }
    }

    resetView() {
        this.isSearching = false;
        
        // Show all items in current category
        const shortcutItems = document.querySelectorAll('.shortcut-item');
        shortcutItems.forEach(item => {
            this.showItem(item, false);
        });

        // Reset categories view
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            category.classList.remove('active');
        });

        // Show current category
        if (window.uiManager) {
            window.uiManager.updateContent();
        }

        // Reset tabs
        const tabs = document.getElementById('tabs');
        if (tabs) {
            tabs.classList.remove('search-mode');
        }

        this.searchResults = [];
    }

    clearSearch() {
        this.searchInput.value = '';
        this.currentSearchTerm = '';
        this.clearHighlights();
        this.resetView();
        this.updateClearButton();
        this.updateSearchStats();
        
        // Return focus to search input
        this.searchInput.focus();
    }

    updateClearButton() {
        if (this.clearButton) {
            this.clearButton.classList.toggle('visible', this.currentSearchTerm.length > 0);
        }
    }

    updateSearchStats() {
        const statsElement = document.getElementById('stats-text');
        if (!statsElement) return;

        if (this.isSearching && this.currentSearchTerm) {
            const visibleCount = this.searchResults.length;
            const totalCount = document.querySelectorAll('.shortcut-item').length;
            
            if (visibleCount === 0) {
                statsElement.textContent = t('no-shortcuts', window.uiManager?.currentLanguage || 'de');
            } else {
                statsElement.textContent = tf('showing-results', visibleCount, totalCount);
            }
        } else if (window.uiManager) {
            window.uiManager.updateStats();
        }
    }

    focusFirstResult() {
        if (this.searchResults.length > 0) {
            const firstResult = this.searchResults[0].element;
            const shortcutKey = firstResult.querySelector('.shortcut-key');
            if (shortcutKey) {
                shortcutKey.focus();
            }
        }
    }

    scrollToFirstResult() {
        if (this.searchResults.length > 0) {
            const firstResult = this.searchResults[0].element;
            firstResult.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }

    // Advanced search features
    searchByCategory(category, searchTerm = null) {
        const term = searchTerm || this.currentSearchTerm;
        if (!term) return [];

        const results = shortcutsHelpers.searchShortcuts(
            term, 
            window.uiManager?.currentLanguage || 'de', 
            [category]
        );

        return results;
    }

    searchByDifficulty(difficulty, searchTerm = null) {
        const term = searchTerm || this.currentSearchTerm;
        if (!term) return [];

        const allResults = shortcutsHelpers.searchShortcuts(
            term, 
            window.uiManager?.currentLanguage || 'de'
        );

        return difficulty === 'all' ? allResults : 
               allResults.filter(result => result.difficulty === difficulty);
    }

    searchByTags(tags) {
        if (!Array.isArray(tags) || tags.length === 0) return [];

        const results = shortcutsHelpers.getShortcutsByTags(
            tags, 
            window.uiManager?.currentLanguage || 'de'
        );

        return results;
    }

    // Search suggestions
    generateSuggestions(query) {
        const suggestions = new Set();
        const lowerQuery = query.toLowerCase();

        // Get all shortcuts for suggestions
        Object.keys(shortcutsData).forEach(category => {
            const shortcuts = shortcutsHelpers.getShortcuts(
                category, 
                window.uiManager?.currentLanguage || 'de'
            );

            shortcuts.forEach(shortcut => {
                // Add key suggestions
                if (shortcut.key.toLowerCase().includes(lowerQuery)) {
                    suggestions.add(shortcut.key);
                }

                // Add description word suggestions
                const words = shortcut.desc.toLowerCase().split(' ');
                words.forEach(word => {
                    if (word.includes(lowerQuery) && word.length > 2) {
                        suggestions.add(word);
                    }
                });

                // Add tag suggestions
                if (shortcut.tags) {
                    shortcut.tags.forEach(tag => {
                        if (tag.includes(lowerQuery)) {
                            suggestions.add(tag);
                        }
                    });
                }
            });
        });

        return Array.from(suggestions).slice(0, 5); // Limit to 5 suggestions
    }

    // Search history (if local storage is available)
    saveSearchTerm(term) {
        if (!capabilities.supportsLocalStorage() || term.length < 2) return;

        const history = this.getSearchHistory();
        const updatedHistory = [term, ...history.filter(h => h !== term)].slice(0, 10);
        
        localStorage.setItem('blenderShortcutsSearchHistory', JSON.stringify(updatedHistory));
    }

    getSearchHistory() {
        if (!capabilities.supportsLocalStorage()) return [];

        try {
            const history = localStorage.getItem('blenderShortcutsSearchHistory');
            return history ? JSON.parse(history) : [];
        } catch (e) {
            return [];
        }
    }

    clearSearchHistory() {
        if (capabilities.supportsLocalStorage()) {
            localStorage.removeItem('blenderShortcutsSearchHistory');
        }
    }

    // Keyboard navigation in search results
    initializeKeyboardNavigation() {
        let currentIndex = -1;

        this.searchInput.addEventListener('keydown', (e) => {
            if (this.searchResults.length === 0) return;

            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    currentIndex = Math.min(currentIndex + 1, this.searchResults.length - 1);
                    this.highlightResult(currentIndex);
                    break;
                
                case 'ArrowUp':
                    e.preventDefault();
                    currentIndex = Math.max(currentIndex - 1, -1);
                    if (currentIndex === -1) {
                        this.clearResultHighlight();
                        this.searchInput.focus();
                    } else {
                        this.highlightResult(currentIndex);
                    }
                    break;
                
                case 'Enter':
                    e.preventDefault();
                    if (currentIndex >= 0 && currentIndex < this.searchResults.length) {
                        this.selectResult(currentIndex);
                    }
                    break;
            }
        });
    }

    highlightResult(index) {
        // Remove previous highlights
        this.clearResultHighlight();

        if (index >= 0 && index < this.searchResults.length) {
            const result = this.searchResults[index];
            result.element.classList.add('keyboard-selected');
            result.element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }
    }

    clearResultHighlight() {
        document.querySelectorAll('.keyboard-selected').forEach(el => {
            el.classList.remove('keyboard-selected');
        });
    }

    selectResult(index) {
        if (index >= 0 && index < this.searchResults.length) {
            const result = this.searchResults[index];
            const shortcutKey = result.element.querySelector('.shortcut-key');
            
            if (shortcutKey) {
                // Copy the shortcut
                copyShortcut(shortcutKey.textContent);
                
                // Visual feedback
                result.element.classList.add('selected-flash');
                setTimeout(() => {
                    result.element.classList.remove('selected-flash');
                }, 300);
            }
        }
    }

    // Export search results
    exportSearchResults(format = 'markdown') {
        if (this.searchResults.length === 0) {
            if (window.uiManager) {
                window.uiManager.showToast(
                    t('no-search-results', window.uiManager.currentLanguage), 
                    'error'
                );
            }
            return;
        }

        const searchData = this.searchResults.map(result => ({
            key: result.key,
            description: result.description,
            category: this.getCategoryFromElement(result.element)
        }));

        const exportContent = this.formatSearchResults(searchData, format);
        this.downloadSearchResults(exportContent, format);
    }

    getCategoryFromElement(element) {
        // Find the category by looking at parent elements or data attributes
        const categoryElement = element.closest('.category');
        if (categoryElement) {
            const titleElement = categoryElement.querySelector('.category-title');
            return titleElement ? titleElement.textContent : 'Unknown';
        }
        return 'Unknown';
    }

    formatSearchResults(data, format) {
        const lang = window.uiManager?.currentLanguage || 'de';
        const searchTerm = this.currentSearchTerm;

        switch (format) {
            case 'markdown':
                let markdown = `# ${t('search-results', lang)}: "${searchTerm}"\n\n`;
                markdown += `${t('generated-on', lang)}: ${new Date().toLocaleDateString()}\n\n`;
                
                data.forEach(item => {
                    markdown += `- **${item.key}** - ${item.description} _(${item.category})_\n`;
                });
                
                return markdown;

            case 'json':
                return JSON.stringify({
                    searchTerm: searchTerm,
                    generatedOn: new Date().toISOString(),
                    language: lang,
                    results: data
                }, null, 2);

            case 'csv':
                const header = 'Key,Description,Category\n';
                const rows = data.map(item => 
                    `"${item.key}","${item.description}","${item.category}"`
                ).join('\n');
                return header + rows;

            default:
                return JSON.stringify(data, null, 2);
        }
    }

    downloadSearchResults(content, format) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = `blender-search-${this.currentSearchTerm}-${Date.now()}.${format}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Analytics (if enabled)
    trackSearch(searchTerm) {
        if (!config.features.analyticsEnabled) return;

        // Track search analytics (placeholder for analytics integration)
        console.log('Search tracked:', {
            term: searchTerm,
            timestamp: new Date().toISOString(),
            results: this.searchResults.length,
            language: window.uiManager?.currentLanguage || 'de'
        });
    }
}

// Global search functions
function clearSearch() {
    if (window.searchManager) {
        window.searchManager.clearSearch();
    }
}

function focusSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.focus();
    }
}

// Copy shortcut function
function copyShortcut(shortcutKey) {
    if (capabilities.supportsClipboard()) {
        navigator.clipboard.writeText(shortcutKey).then(() => {
            if (window.uiManager) {
                window.uiManager.showToast(
                    t('copied', window.uiManager.currentLanguage), 
                    'success'
                );
            }
        }).catch(() => {
            fallbackCopyShortcut(shortcutKey);
        });
    } else {
        fallbackCopyShortcut(shortcutKey);
    }
}

function fallbackCopyShortcut(shortcutKey) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = shortcutKey;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        if (window.uiManager) {
            window.uiManager.showToast(
                t('copied', window.uiManager.currentLanguage), 
                'success'
            );
        }
    } catch (err) {
        if (window.uiManager) {
            window.uiManager.showToast(
                t('copy-failed', window.uiManager.currentLanguage), 
                'error'
            );
        }
    }
    
    document.body.removeChild(textArea);
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SearchManager, copyShortcut };
}