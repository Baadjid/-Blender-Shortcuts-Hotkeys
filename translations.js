// Multilingual translations
const translations = {
    de: {
        'main-title': '🔥 Blender Shortcuts & Hotkeys',
        'subtitle': 'Komplette mehrsprachige Übersicht aller Tastenkürzel für Blender 4.x',
        'version-text': 'Diese Shortcuts sind für Blender 4.x optimiert. Die meisten funktionieren auch in älteren Versionen.',
        'tip-text': 'Verwenden Sie die Suchfunktion oder navigieren Sie durch die Kategorien. Klicken Sie auf Shortcuts zum Kopieren.',
        'stats-text': '📊 Insgesamt über 200+ Shortcuts in 10 Kategorien',
        'search-placeholder': 'Shortcut oder Funktion suchen...',
        'loading-text': 'Shortcuts werden geladen...',
        'copied': 'In Zwischenablage kopiert!',
        'export-success': 'Export erfolgreich!',
        'export-error': 'Export fehlgeschlagen!',
        'all': 'Alle',
        'beginner': 'Anfänger',
        'intermediate': 'Mittel',
        'advanced': 'Fortgeschritten',
        'help-title': 'Hilfe & Tipps',
        'help-search': '🔍 Suchen',
        'help-search-desc': 'Verwenden Sie die Suchleiste, um schnell bestimmte Shortcuts zu finden.',
        'help-keyboard': '⌨️ App-Tastenkürzel',
        'help-difficulty': '🎨 Schwierigkeitsgrade',
        'help-difficulty-beginner': 'Grundlegende Shortcuts',
        'help-difficulty-intermediate': 'Häufig verwendete Shortcuts',
        'help-difficulty-advanced': 'Spezialisierte Shortcuts',
        'help-tips': '💡 Tipps',
        'help-tips-desc': 'Klicken Sie auf Shortcut-Tasten zum Kopieren. Verwenden Sie Filter für bessere Organisation.',
        'shortcut-app-focus': 'Suchfeld fokussieren',
        'shortcut-app-lang': 'Sprache wechseln',
        'shortcut-app-category': 'Kategorie wechseln',
        'shortcut-app-dark': 'Dark Mode umschalten',  
        'shortcut-app-clear': 'Suche löschen',
        'no-shortcuts': 'Keine Shortcuts gefunden',
        'search-results': 'Suchergebnisse',
        'showing-results': 'Zeige {0} von {1} Shortcuts',
        'dark-mode': 'Dark Mode',
        'light-mode': 'Light Mode',
        'export': 'Export',
        'fullscreen': 'Vollbild',
        'help': 'Hilfe',
        'close': 'Schließen',
        'copy': 'Kopieren',
        'back-to-top': 'Nach oben',
        'keyboard-shortcuts': 'Tastenkürzel',
        'category-all': 'Alle Kategorien'
    },
    en: {
        'main-title': '🔥 Blender Shortcuts & Hotkeys',
        'subtitle': 'Complete multilingual overview of all keyboard shortcuts for Blender 4.x',
        'version-text': 'These shortcuts are optimized for Blender 4.x. Most also work with older versions.',
        'tip-text': 'Use the search function or navigate through the categories. Click on shortcuts to copy them.',
        'stats-text': '📊 Over 200+ shortcuts in 10 categories total',
        'search-placeholder': 'Search shortcut or function...',
        'loading-text': 'Loading shortcuts...',
        'copied': 'Copied to clipboard!',
        'export-success': 'Export successful!',
        'export-error': 'Export failed!',
        'all': 'All',
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced',
        'help-title': 'Help & Tips',
        'help-search': '🔍 Search',
        'help-search-desc': 'Use the search bar to quickly find specific shortcuts.',
        'help-keyboard': '⌨️ App Shortcuts',
        'help-difficulty': '🎨 Difficulty Levels',
        'help-difficulty-beginner': 'Basic shortcuts',
        'help-difficulty-intermediate': 'Commonly used shortcuts',
        'help-difficulty-advanced': 'Specialized shortcuts',
        'help-tips': '💡 Tips',
        'help-tips-desc': 'Click on shortcut keys to copy them. Use filters for better organization.',
        'shortcut-app-focus': 'Focus search field',
        'shortcut-app-lang': 'Switch language',
        'shortcut-app-category': 'Switch category',
        'shortcut-app-dark': 'Toggle dark mode',
        'shortcut-app-clear': 'Clear search',
        'no-shortcuts': 'No shortcuts found',
        'search-results': 'Search Results',
        'showing-results': 'Showing {0} of {1} shortcuts',
        'dark-mode': 'Dark Mode',
        'light-mode': 'Light Mode',
        'export': 'Export',
        'fullscreen': 'Fullscreen',
        'help': 'Help',
        'close': 'Close',
        'copy': 'Copy',
        'back-to-top': 'Back to top',
        'keyboard-shortcuts': 'Keyboard Shortcuts',
        'category-all': 'All Categories'
    },
    ru: {
        'main-title': '🔥 Горячие клавиши Blender',
        'subtitle': 'Полный многоязычный обзор всех горячих клавиш для Blender 4.x',
        'version-text': 'Эти горячие клавиши оптимизированы для Blender 4.x. Большинство также работает со старыми версиями.',
        'tip-text': 'Используйте функцию поиска или навигацию по категориям. Нажимайте на горячие клавиши для копирования.',
        'stats-text': '📊 Всего более 200+ горячих клавиш в 10 категориях',
        'search-placeholder': 'Поиск горячих клавиш или функций...',
        'loading-text': 'Загрузка горячих клавиш...',
        'copied': 'Скопировано в буфер обмена!',
        'export-success': 'Экспорт успешен!',
        'export-error': 'Ошибка экспорта!',
        'all': 'Все',
        'beginner': 'Начинающий',
        'intermediate': 'Средний',
        'advanced': 'Продвинутый',
        'help-title': 'Помощь и советы',
        'help-search': '🔍 Поиск',
        'help-search-desc': 'Используйте строку поиска для быстрого поиска определённых горячих клавиш.',
        'help-keyboard': '⌨️ Горячие клавиши приложения',
        'help-difficulty': '🎨 Уровни сложности',
        'help-difficulty-beginner': 'Базовые горячие клавиши',
        'help-difficulty-intermediate': 'Часто используемые горячие клавиши',
        'help-difficulty-advanced': 'Специализированные горячие клавиши',
        'help-tips': '💡 Советы',
        'help-tips-desc': 'Нажимайте на клавиши горячих клавиш для их копирования. Используйте фильтры для лучшей организации.',
        'shortcut-app-focus': 'Фокус на поле поиска',
        'shortcut-app-lang': 'Переключить язык',
        'shortcut-app-category': 'Переключить категорию',
        'shortcut-app-dark': 'Переключить тёмный режим',
        'shortcut-app-clear': 'Очистить поиск',
        'no-shortcuts': 'Горячие клавиши не найдены',
        'search-results': 'Результаты поиска',
        'showing-results': 'Показано {0} из {1} горячих клавиш',
        'dark-mode': 'Тёмный режим',
        'light-mode': 'Светлый режим',
        'export': 'Экспорт',
        'fullscreen': 'Полный экран',
        'help': 'Помощь',
        'close': 'Закрыть',
        'copy': 'Копировать',
        'back-to-top': 'Наверх',
        'keyboard-shortcuts': 'Горячие клавиши',
        'category-all': 'Все категории'
    }
};

// Category names in different languages
const categoryNames = {
    de: {
        general: 'Allgemein',
        navigation: 'Navigation',
        selection: 'Auswahl',
        object: 'Objekt-Modus',
        edit: 'Edit-Modus',
        modeling: 'Modeling',
        animation: 'Animation',
        rendering: 'Rendering',
        uv: 'UV/Texturing',
        advanced: 'Erweitert'
    },
    en: {
        general: 'General',
        navigation: 'Navigation',
        selection: 'Selection',
        object: 'Object Mode',
        edit: 'Edit Mode',
        modeling: 'Modeling',
        animation: 'Animation',
        rendering: 'Rendering',
        uv: 'UV/Texturing',
        advanced: 'Advanced'
    },
    ru: {
        general: 'Общие',
        navigation: 'Навигация',
        selection: 'Выбор',
        object: 'Режим объекта',
        edit: 'Редактирование',
        modeling: 'Моделирование',
        animation: 'Анимация',
        rendering: 'Рендеринг',
        uv: 'UV/Текстуры',
        advanced: 'Продвинутые'
    }
};

// Difficulty level translations
const difficultyLevels = {
    de: {
        beginner: 'Anfänger',
        intermediate: 'Mittel',
        advanced: 'Fortgeschritten'
    },
    en: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced'
    },
    ru: {
        beginner: 'Начинающий',
        intermediate: 'Средний',
        advanced: 'Продвинутый'
    }
};

// Export format translations
const exportFormats = {
    de: {
        markdown: 'Markdown (.md)',
        json: 'JSON (.json)',
        csv: 'CSV (.csv)',
        txt: 'Text (.txt)'
    },
    en: {
        markdown: 'Markdown (.md)',
        json: 'JSON (.json)',
        csv: 'CSV (.csv)',
        txt: 'Text (.txt)'
    },
    ru: {
        markdown: 'Markdown (.md)',
        json: 'JSON (.json)',
        csv: 'CSV (.csv)',
        txt: 'Текст (.txt)'
    }
};

// Helper function to get translated text
function t(key, lang = null) {
    const currentLang = lang || window.currentLanguage || 'de';
    return translations[currentLang] && translations[currentLang][key] ? 
           translations[currentLang][key] : 
           translations['en'][key] || key;
}

// Helper function to format text with placeholders
function tf(key, ...args) {
    let text = t(key);
    args.forEach((arg, index) => {
        text = text.replace(`{${index}}`, arg);
    });
    return text;
}

// Export translations for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        categoryNames,
        difficultyLevels,
        exportFormats,
        t,
        tf
    };
}