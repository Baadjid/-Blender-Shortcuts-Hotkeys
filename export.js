// Export functionality module
class ExportManager {
    constructor() {
        this.supportedFormats = ['markdown', 'json', 'csv', 'txt', 'pdf'];
        this.currentFormat = 'markdown';
        
        this.init();
    }

    init() {
        this.createExportModal();
    }

    createExportModal() {
        // Create export modal if it doesn't exist
        if (document.getElementById('exportModal')) return;

        const modal = document.createElement('div');
        modal.id = 'exportModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal('exportModal')">&times;</span>
                <h2 id="export-title">Export Shortcuts</h2>
                <div id="export-content">
                    <div class="export-options">
                        <h3 id="export-format-title">Format auswählen</h3>
                        <div class="format-buttons" id="formatButtons">
                            <!-- Format buttons will be generated here -->
                        </div>
                        
                        <h3 id="export-scope-title">Exportbereich</h3>
                        <div class="scope-options">
                            <label>
                                <input type="radio" name="exportScope" value="current" checked>
                                <span id="export-current">Aktuelle Kategorie</span>
                            </label>
                            <label>
                                <input type="radio" name="exportScope" value="all">
                                <span id="export-all">Alle Kategorien</span>
                            </label>
                            <label>
                                <input type="radio" name="exportScope" value="filtered">
                                <span id="export-filtered">Aktuelle Filter</span>
                            </label>
                            <label>
                                <input type="radio" name="exportScope" value="search">
                                <span id="export-search">Suchergebnisse</span>
                            </label>
                        </div>

                        <h3 id="export-options-title">Optionen</h3>
                        <div class="export-checkboxes">
                            <label>
                                <input type="checkbox" id="includeDifficulty" checked>
                                <span id="export-include-difficulty">Schwierigkeitsgrad einschließen</span>
                            </label>
                            <label>
                                <input type="checkbox" id="includeTags">
                                <span id="export-include-tags">Tags einschließen</span>
                            </label>
                            <label>
                                <input type="checkbox" id="includeNotes" checked>
                                <span id="export-include-notes">Notizen einschließen</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="export-actions">
                        <button class="export-btn primary" onclick="executeExport()">
                            <span id="export-download">📥 Herunterladen</span>
                        </button>
                        <button class="export-btn secondary" onclick="previewExport()">
                            <span id="export-preview">👁️ Vorschau</span>
                        </button>
                        <button class="export-btn secondary" onclick="copyExportToClipboard()">
                            <span id="export-copy">📋 Kopieren</span>
                        </button>
                    </div>
                    
                    <div class="export-preview" id="exportPreview" style="display: none;">
                        <h4 id="export-preview-title">Vorschau</h4>
                        <pre id="exportPreviewContent"></pre>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.updateExportModal();
    }

    updateExportModal() {
        this.updateExportTranslations();
        this.generateFormatButtons();
        this.updateScopeVisibility();
    }

    updateExportTranslations() {
        const lang = window.uiManager?.currentLanguage || 'de';
        
        const translations = {
            'export-title': t('export-shortcuts', lang),
            'export-format-title': t('export-format', lang),
            'export-scope-title': t('export-scope', lang),
            'export-current': t('export-current-category', lang),
            'export-all': t('export-all-categories', lang),
            'export-filtered': t('export-filtered-results', lang),
            'export-search': t('export-search-results', lang),
            'export-options-title': t('export-options', lang),
            'export-include-difficulty': t('export-include-difficulty', lang),
            'export-include-tags': t('export-include-tags', lang),
            'export-include-notes': t('export-include-notes', lang),
            'export-download': `📥 ${t('download', lang)}`,
            'export-preview': `👁️ ${t('preview', lang)}`,
            'export-copy': `📋 ${t('copy', lang)}`,
            'export-preview-title': t('preview', lang)
        };

        Object.keys(translations).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = translations[id];
            }
        });
    }

    generateFormatButtons() {
        const container = document.getElementById('formatButtons');
        if (!container) return;

        const lang = window.uiManager?.currentLanguage || 'de';
        container.innerHTML = '';

        this.supportedFormats.forEach(format => {
            const button = document.createElement('button');
            button.className = `format-btn ${format === this.currentFormat ? 'active' : ''}`;
            button.setAttribute('data-format', format);
            button.onclick = () => this.selectFormat(format);
            
            const formatName = exportFormats[lang] && exportFormats[lang][format] ? 
                              exportFormats[lang][format] : format.toUpperCase();
            
            button.innerHTML = `
                <span class="format-icon">${this.getFormatIcon(format)}</span>
                <span class="format-name">${formatName}</span>
            `;
            
            container.appendChild(button);
        });
    }

    getFormatIcon(format) {
        const icons = {
            markdown: '📝',
            json: '📊',
            csv: '📋',
            txt: '📄',
            pdf: '📃'
        };
        return icons[format] || '📄';
    }

    selectFormat(format) {
        this.currentFormat = format;
        
        // Update button states
        document.querySelectorAll('.format-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-format') === format);
        });
    }

    updateScopeVisibility() {
        const searchScope = document.querySelector('input[value="search"]');
        const filteredScope = document.querySelector('input[value="filtered"]');
        
        if (searchScope) {
            const hasSearchResults = window.searchManager && 
                                   window.searchManager.searchResults.length > 0;
            searchScope.parentElement.style.display = hasSearchResults ? 'block' : 'none';
        }
        
        if (filteredScope) {
            const hasFilters = window.uiManager && 
                             window.uiManager.currentDifficulty !== 'all';
            filteredScope.parentElement.style.display = hasFilters ? 'block' : 'none';
        }
    }

    showExportModal() {
        this.updateExportModal();
        
        if (window.uiManager) {
            window.uiManager.showModal('exportModal');
        }
    }

    getExportData() {
        const scope = document.querySelector('input[name="exportScope"]:checked')?.value || 'current';
        const includeDifficulty = document.getElementById('includeDifficulty')?.checked || false;
        const includeTags = document.getElementById('includeTags')?.checked || false;
        const includeNotes = document.getElementById('includeNotes')?.checked || false;
        const lang = window.uiManager?.currentLanguage || 'de';

        let data = {};

        switch (scope) {
            case 'current':
                const currentCategory = window.uiManager?.currentCategory || 'general';
                data[currentCategory] = this.prepareShortcuts(
                    shortcutsHelpers.getShortcuts(currentCategory, lang),
                    { includeDifficulty, includeTags, includeNotes }
                );
                break;

            case 'all':
                Object.keys(config.categories).forEach(category => {
                    data[category] = this.prepareShortcuts(
                        shortcutsHelpers.getShortcuts(category, lang),
                        { includeDifficulty, includeTags, includeNotes }
                    );
                });
                break;

            case 'filtered':
                const currentCategory2 = window.uiManager?.currentCategory || 'general';
                const difficulty = window.uiManager?.currentDifficulty || 'all';
                data[currentCategory2] = this.prepareShortcuts(
                    shortcutsHelpers.getShortcutsByDifficulty(currentCategory2, lang, difficulty),
                    { includeDifficulty, includeTags, includeNotes }
                );
                break;

            case 'search':
                if (window.searchManager && window.searchManager.searchResults.length > 0) {
                    data['search_results'] = this.prepareShortcuts(
                        window.searchManager.searchResults.map(r => ({
                            key: r.key,
                            desc: r.description,
                            note: '', // Note might not be available in search results
                            difficulty: 'unknown',
                            tags: []
                        })),
                        { includeDifficulty, includeTags, includeNotes }
                    );
                }
                break;
        }

        return data;
    }

    prepareShortcuts(shortcuts, options) {
        return shortcuts.map(shortcut => {
            const prepared = {
                key: shortcut.key,
                description: shortcut.desc
            };

            if (options.includeNotes && shortcut.note) {
                prepared.note = shortcut.note;
            }

            if (options.includeDifficulty && shortcut.difficulty) {
                prepared.difficulty = shortcut.difficulty;
            }

            if (options.includeTags && shortcut.tags) {
                prepared.tags = shortcut.tags;
            }

            return prepared;
        });
    }

    formatData(data, format) {
        const lang = window.uiManager?.currentLanguage || 'de';
        const timestamp = new Date();

        switch (format) {
            case 'markdown':
                return this.formatAsMarkdown(data, lang, timestamp);
            case 'json':
                return this.formatAsJSON(data, lang, timestamp);
            case 'csv':
                return this.formatAsCSV(data, lang, timestamp);
            case 'txt':
                return this.formatAsText(data, lang, timestamp);
            case 'pdf':
                return this.formatAsPDF(data, lang, timestamp);
            default:
                return JSON.stringify(data, null, 2);
        }
    }

    formatAsMarkdown(data, lang, timestamp) {
        let markdown = `# Blender Shortcuts Export\n\n`;
        markdown += `**${t('language', lang)}:** ${lang.toUpperCase()}\n`;
        markdown += `**${t('generated-on', lang)}:** ${timestamp.toLocaleDateString()}\n`;
        markdown += `**${t('total-shortcuts', lang)}:** ${this.countShortcuts(data)}\n\n`;

        Object.keys(data).forEach(categoryKey => {
            const categoryName = categoryNames[lang] && categoryNames[lang][categoryKey] ? 
                                categoryNames[lang][categoryKey] : categoryKey;
            
            markdown += `## ${config.categories[categoryKey]?.icon || '📌'} ${categoryName}\n\n`;
            markdown += `| ${t('shortcut', lang)} | ${t('description', lang)}`;
            
            const firstShortcut = data[categoryKey][0];
            if (firstShortcut?.note) markdown += ` | ${t('note', lang)}`;
            if (firstShortcut?.difficulty) markdown += ` | ${t('difficulty', lang)}`;
            if (firstShortcut?.tags) markdown += ` | ${t('tags', lang)}`;
            
            markdown += ` |\n|`;
            markdown += ` --- | ---`;
            if (firstShortcut?.note) markdown += ` | ---`;
            if (firstShortcut?.difficulty) markdown += ` | ---`;
            if (firstShortcut?.tags) markdown += ` | ---`;
            markdown += ` |\n`;
            
            data[categoryKey].forEach(shortcut => {
                markdown += `| \`${shortcut.key}\` | ${shortcut.description}`;
                if (shortcut.note) markdown += ` | ${shortcut.note}`;
                if (shortcut.difficulty) markdown += ` | ${shortcut.difficulty}`;
                if (shortcut.tags) markdown += ` | ${shortcut.tags.join(', ')}`;
                markdown += ` |\n`;
            });
            
            markdown += `\n`;
        });

        markdown += `\n---\n`;
        markdown += `${t('exported-from', lang)} Blender Shortcuts App\n`;
        
        return markdown;
    }

    formatAsJSON(data, lang, timestamp) {
        return JSON.stringify({
            metadata: {
                application: 'Blender Shortcuts',
                version: config.version.app,
                language: lang,
                exportedAt: timestamp.toISOString(),
                totalShortcuts: this.countShortcuts(data)
            },
            shortcuts: data
        }, null, 2);
    }

    formatAsCSV(data, lang, timestamp) {
        const header = [
            t('category', lang),
            t('shortcut', lang),
            t('description', lang),
            t('note', lang),
            t('difficulty', lang),
            t('tags', lang)
        ].join(',');

        const rows = [header];
        
        Object.keys(data).forEach(categoryKey => {
            const categoryName = categoryNames[lang] && categoryNames[lang][categoryKey] ? 
                                categoryNames[lang][categoryKey] : categoryKey;
            
            data[categoryKey].forEach(shortcut => {
                const row = [
                    `"${categoryName}"`,
                    `"${shortcut.key}"`,
                    `"${shortcut.description}"`,
                    `"${shortcut.note || ''}"`,
                    `"${shortcut.difficulty || ''}"`,
                    `"${shortcut.tags ? shortcut.tags.join(';') : ''}"`
                ];
                rows.push(row.join(','));
            });
        });

        return rows.join('\n');
    }

    formatAsText(data, lang, timestamp) {
        let text = `BLENDER SHORTCUTS EXPORT\n`;
        text += `${'='.repeat(50)}\n\n`;
        text += `${t('language', lang)}: ${lang.toUpperCase()}\n`;
        text += `${t('generated-on', lang)}: ${timestamp.toLocaleDateString()}\n`;
        text += `${t('total-shortcuts', lang)}: ${this.countShortcuts(data)}\n\n`;

        Object.keys(data).forEach(categoryKey => {
            const categoryName = categoryNames[lang] && categoryNames[lang][categoryKey] ? 
                                categoryNames[lang][categoryKey] : categoryKey;
            
            text += `${categoryName.toUpperCase()}\n`;
            text += `${'-'.repeat(categoryName.length)}\n\n`;
            
            data[categoryKey].forEach(shortcut => {
                text += `${shortcut.key.padEnd(20)} - ${shortcut.description}\n`;
                if (shortcut.note) {
                    text += `${' '.repeat(20)}   ${shortcut.note}`;
                }
                if (shortcut.difficulty) {
                    text += ` (${shortcut.difficulty})`;
                }
                text += `\n`;
                if (shortcut.tags && shortcut.tags.length > 0) {
                    text += `${' '.repeat(20)}   Tags: ${shortcut.tags.join(', ')}\n`;
                }
                text += `\n`;
            });
            
            text += `\n`;
        });

        return text;
    }

    formatAsPDF(data, lang, timestamp) {
        // For PDF generation, we'll return HTML that can be converted to PDF
        // In a real implementation, you might use libraries like jsPDF or html2pdf
        let html = `
            <html>
            <head>
                <title>Blender Shortcuts Export</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; }
                    h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
                    h2 { color: #34495e; margin-top: 30px; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; font-weight: bold; }
                    .shortcut-key { font-family: monospace; background: #f8f9fa; padding: 2px 4px; border-radius: 3px; }
                    .metadata { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
                </style>
            </head>
            <body>
                <h1>🔥 Blender Shortcuts Export</h1>
                <div class="metadata">
                    <p><strong>${t('language', lang)}:</strong> ${lang.toUpperCase()}</p>
                    <p><strong>${t('generated-on', lang)}:</strong> ${timestamp.toLocaleDateString()}</p>
                    <p><strong>${t('total-shortcuts', lang)}:</strong> ${this.countShortcuts(data)}</p>
                </div>
        `;

        Object.keys(data).forEach(categoryKey => {
            const categoryName = categoryNames[lang] && categoryNames[lang][categoryKey] ? 
                                categoryNames[lang][categoryKey] : categoryKey;
            
            html += `<h2>${config.categories[categoryKey]?.icon || '📌'} ${categoryName}</h2>`;
            html += `<table>`;
            html += `<tr><th>${t('shortcut', lang)}</th><th>${t('description', lang)}</th>`;
            
            const firstShortcut = data[categoryKey][0];
            if (firstShortcut?.note) html += `<th>${t('note', lang)}</th>`;
            if (firstShortcut?.difficulty) html += `<th>${t('difficulty', lang)}</th>`;
            
            html += `</tr>`;
            
            data[categoryKey].forEach(shortcut => {
                html += `<tr>`;
                html += `<td><span class="shortcut-key">${shortcut.key}</span></td>`;
                html += `<td>${shortcut.description}</td>`;
                if (shortcut.note) html += `<td>${shortcut.note}</td>`;
                if (shortcut.difficulty) html += `<td>${shortcut.difficulty}</td>`;
                html += `</tr>`;
            });
            
            html += `</table>`;
        });

        html += `
                <div style="margin-top: 40px; text-align: center; color: #7f8c8d; font-size: 12px;">
                    ${t('exported-from', lang)} Blender Shortcuts App - ${config.version.app}
                </div>
            </body>
            </html>
        `;

        return html;
    }

    countShortcuts(data) {
        let count = 0;
        Object.keys(data).forEach(category => {
            count += data[category].length;
        });
        return count;
    }

    downloadExport() {
        try {
            const data = this.getExportData();
            const content = this.formatData(data, this.currentFormat);
            const filename = this.generateFilename();
            
            this.downloadFile(content, filename, this.currentFormat);
            
            if (window.uiManager) {
                window.uiManager.showToast(t('export-success', window.uiManager.currentLanguage), 'success');
                window.uiManager.closeModal('exportModal');
            }
        } catch (error) {
            console.error('Export failed:', error);
            if (window.uiManager) {
                window.uiManager.showToast(t('export-error', window.uiManager.currentLanguage), 'error');
            }
        }
    }

    generateFilename() {
        const lang = window.uiManager?.currentLanguage || 'de';
        const scope = document.querySelector('input[name="exportScope"]:checked')?.value || 'current';
        const date = new Date().toISOString().split('T')[0];
        const extension = this.getFileExtension(this.currentFormat);
        
        return `blender-shortcuts-${scope}-${lang}-${date}.${extension}`;
    }

    getFileExtension(format) {
        const extensions = {
            markdown: 'md',
            json: 'json',
            csv: 'csv',
            txt: 'txt',
            pdf: 'html' // Will be HTML for PDF conversion
        };
        return extensions[format] || 'txt';
    }

    downloadFile(content, filename, format) {
        const mimeTypes = {
            markdown: 'text/markdown',
            json: 'application/json',
            csv: 'text/csv',
            txt: 'text/plain',
            pdf: 'text/html'
        };

        const blob = new Blob([content], { 
            type: mimeTypes[format] || 'text/plain' 
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.style.display = 'none';
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        // Special handling for PDF
        if (format === 'pdf') {
            this.showPDFInstructions();
        }
    }

    showPDFInstructions() {
        const lang = window.uiManager?.currentLanguage || 'de';
        const message = t('pdf-instructions', lang);
        
        if (window.uiManager) {
            window.uiManager.showToast(message, 'info');
        }
    }

    previewExport() {
        try {
            const data = this.getExportData();
            const content = this.formatData(data, this.currentFormat);
            
            const previewContainer = document.getElementById('exportPreview');
            const previewContent = document.getElementById('exportPreviewContent');
            
            if (previewContainer && previewContent) {
                previewContent.textContent = content;
                previewContainer.style.display = 'block';
                
                // Scroll to preview
                previewContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        } catch (error) {
            console.error('Preview failed:', error);
            if (window.uiManager) {
                window.uiManager.showToast(t('preview-error', window.uiManager.currentLanguage), 'error');
            }
        }
    }

    copyToClipboard() {
        try {
            const data = this.getExportData();
            const content = this.formatData(data, this.currentFormat);
            
            if (capabilities.supportsClipboard()) {
                navigator.clipboard.writeText(content).then(() => {
                    if (window.uiManager) {
                        window.uiManager.showToast(t('copied-to-clipboard', window.uiManager.currentLanguage), 'success');
                    }
                }).catch(() => {
                    this.fallbackCopyToClipboard(content);
                });
            } else {
                this.fallbackCopyToClipboard(content);
            }
        } catch (error) {
            console.error('Copy failed:', error);
            if (window.uiManager) {
                window.uiManager.showToast(t('copy-error', window.uiManager.currentLanguage), 'error');
            }
        }
    }

    fallbackCopyToClipboard(content) {
        const textArea = document.createElement('textarea');
        textArea.value = content;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        textArea.style.pointerEvents = 'none';
        
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            if (window.uiManager) {
                window.uiManager.showToast(t('copied-to-clipboard', window.uiManager.currentLanguage), 'success');
            }
        } catch (err) {
            if (window.uiManager) {
                window.uiManager.showToast(t('copy-error', window.uiManager.currentLanguage), 'error');
            }
        }
        
        document.body.removeChild(textArea);
    }

    // Quick export functions for common formats
    quickExportMarkdown() {
        this.currentFormat = 'markdown';
        this.downloadExport();
    }

    quickExportJSON() {
        this.currentFormat = 'json';
        this.downloadExport();
    }

    quickExportCSV() {
        this.currentFormat = 'csv';
        this.downloadExport();
    }

    // Batch export functionality
    async exportAllFormats() {
        const lang = window.uiManager?.currentLanguage || 'de';
        
        if (window.uiManager) {
            window.uiManager.showToast(t('exporting-all-formats', lang), 'info');
        }

        const data = this.getExportData();
        const promises = [];

        this.supportedFormats.forEach(format => {
            if (format !== 'pdf') { // Skip PDF for batch export
                promises.push(
                    new Promise(resolve => {
                        setTimeout(() => {
                            try {
                                const content = this.formatData(data, format);
                                const filename = this.generateFilename().replace(/\.[^.]+$/, `.${this.getFileExtension(format)}`);
                                this.downloadFile(content, filename, format);
                                resolve();
                            } catch (error) {
                                console.error(`Failed to export ${format}:`, error);
                                resolve();
                            }
                        }, promises.length * 500); // Stagger downloads
                    })
                );
            }
        });

        await Promise.all(promises);

        if (window.uiManager) {
            window.uiManager.showToast(t('batch-export-complete', lang), 'success');
        }
    }

    // Share functionality (if Web Share API is supported)
    async shareExport() {
        if (!capabilities.supportsWebShare()) {
            if (window.uiManager) {
                window.uiManager.showToast(t('share-not-supported', window.uiManager.currentLanguage), 'error');
            }
            return;
        }

        try {
            const data = this.getExportData();
            const content = this.formatData(data, this.currentFormat);
            const filename = this.generateFilename();

            // Create a blob for sharing
            const blob = new Blob([content], { type: 'text/plain' });
            const file = new File([blob], filename, { type: 'text/plain' });

            await navigator.share({
                title: 'Blender Shortcuts Export',
                text: 'Exported Blender shortcuts from the Shortcuts App',
                files: [file]
            });

            if (window.uiManager) {
                window.uiManager.showToast(t('shared-successfully', window.uiManager.currentLanguage), 'success');
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Share failed:', error);
                if (window.uiManager) {
                    window.uiManager.showToast(t('share-error', window.uiManager.currentLanguage), 'error');
                }
            }
        }
    }

    // Print functionality
    printShortcuts() {
        const data = this.getExportData();
        const htmlContent = this.formatAsPDF(data, window.uiManager?.currentLanguage || 'de', new Date());
        
        const printWindow = window.open('', '_blank');
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        printWindow.onload = () => {
            printWindow.print();
        };
    }
}

// Global export functions
function exportShortcuts() {
    if (!window.exportManager) {
        window.exportManager = new ExportManager();
    }
    window.exportManager.showExportModal();
}

function executeExport() {
    if (window.exportManager) {
        window.exportManager.downloadExport();
    }
}

function previewExport() {
    if (window.exportManager) {
        window.exportManager.previewExport();
    }
}

function copyExportToClipboard() {
    if (window.exportManager) {
        window.exportManager.copyToClipboard();
    }
}

function quickExportMarkdown() {
    if (!window.exportManager) {
        window.exportManager = new ExportManager();
    }
    window.exportManager.quickExportMarkdown();
}

function quickExportJSON() {
    if (!window.exportManager) {
        window.exportManager = new ExportManager();
    }
    window.exportManager.quickExportJSON();
}

function printShortcuts() {
    if (!window.exportManager) {
        window.exportManager = new ExportManager();
    }
    window.exportManager.printShortcuts();
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ExportManager };
}