# 🔥 Blender Shortcuts & Hotkeys - Multilingual Reference

Eine umfassende, mehrsprachige Webanwendung für Blender-Tastenkürzel mit über 200+ Shortcuts in 10 Kategorien.

## 🌟 Features

### 🌍 Mehrsprachig
- **Deutsch** - Vollständige deutsche Übersetzung
- **English** - Complete English translation  
- **Русский** - Полный русский перевод

### 🎯 Umfassende Shortcut-Sammlung
- **10 Kategorien**: Allgemein, Navigation, Auswahl, Objekt-Modus, Edit-Modus, Modeling, Animation, Rendering, UV/Texturing, Erweitert
- **200+ Shortcuts** für Blender 4.x (kompatibel mit älteren Versionen)
- **Schwierigkeitsgrade**: Anfänger, Mittel, Fortgeschritten

### 🔍 Erweiterte Suchfunktionen
- **Echtzeit-Suche** mit Highlighting
- **Fuzzy-Matching** für Tippfehler
- **Tag-basierte Suche**
- **Tastatur-Navigation** in Suchergebnissen

### 📤 Flexible Export-Optionen
- **Markdown** (.md) - Für Dokumentation
- **JSON** (.json) - Für Entwickler
- **CSV** (.csv) - Für Tabellenkalkulation
- **Text** (.txt) - Einfaches Format
- **PDF** (.html) - Druckfreundlich

### 🎨 Moderne UI/UX
- **Dark Mode** & Light Mode
- **Responsive Design** für alle Geräte
- **Glassmorphism-Effekte**
- **Micro-Animations**
- **Accessibility-Features**

### ⚡ Performance & Zugänglichkeit
- **PWA-Ready** (Progressive Web App)
- **Offline-Funktionalität**
- **Keyboard-Navigation**
- **Screen Reader Support**
- **High Contrast Mode**

## 📁 Projektstruktur

```
blender-shortcuts/
├── index.html                 # Entry Point
├── css/
│   ├── main.css              # Hauptstyles
│   ├── themes.css            # Dark Mode & Themes
│   └── responsive.css        # Responsive Design
├── js/
│   ├── config.js             # Konfiguration
│   ├── translations.js       # Übersetzungen
│   ├── shortcuts-data.js     # Shortcuts Daten
│   ├── ui.js                 # UI Management
│   ├── search.js             # Such-Funktionalität
│   ├── export.js             # Export-Features
│   └── main.js               # Hauptanwendung
├── assets/
│   ├── icons/                # App Icons
│   └── images/               # Bilder
├── sw.js                     # Service Worker
├── manifest.json             # PWA Manifest
└── README.md                 # Diese Datei
```

## 🚀 Installation & Setup

### 1. Dateien herunterladen
Laden Sie alle Projektdateien in einen Ordner herunter und behalten Sie die Ordnerstruktur bei.

### 2. Lokaler Server (empfohlen)
Für die beste Erfahrung verwenden Sie einen lokalen Webserver:

```bash
# Mit Python 3
python -m http.server 8000

# Mit Node.js (http-server)
npx http-server

# Mit PHP
php -S localhost:8000
```

### 3. Browser öffnen
Navigieren Sie zu `http://localhost:8000` in Ihrem Browser.

## 🎮 Verwendung

### Grundlegende Navigation
- **Sprache wechseln**: Klicken Sie auf die Sprach-Buttons oben
- **Kategorien durchsuchen**: Verwenden Sie die Tab-Navigation
- **Suchen**: Geben Sie Begriffe in die Suchleiste ein
- **Kopieren**: Klicken Sie auf Shortcut-Tasten zum Kopieren

### Tastenkürzel der App
- `Ctrl + F` - Suchfeld fokussieren
- `Alt + 1/2/3` - Sprache wechseln (Deutsch/English/Русский)
- `Ctrl + 1-9` - Kategorie wechseln
- `Ctrl + D` - Dark Mode umschalten
- `Esc` - Suche löschen
- `F11` - Vollbild umschalten

### Erweiterte Features
- **Filter**: Filtern Sie nach Schwierigkeitsgrad
- **Export**: Exportieren Sie Shortcuts in verschiedenen Formaten
- **Print**: Drucken Sie eine formatierte Liste
- **Offline**: Funktioniert auch ohne Internetverbindung

## 🛠️ Technische Details

### Technologie-Stack
- **Frontend**: Vanilla JavaScript (ES6+), CSS3, HTML5
- **Architektur**: Modulares Design mit Event-System
- **Responsive**: CSS Grid & Flexbox
- **PWA**: Service Worker, Web App Manifest
- **Accessibility**: WCAG 2.1 konform

### Browser-Unterstützung
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

### Performance-Optimierungen
- **Lazy Loading** für große Datasets
- **Debounced Search** (300ms)
- **Efficient DOM Updates**
- **Memory Management**
- **Code Splitting** (modular architecture)

## 🎨 Anpassung

### Neue Sprachen hinzufügen

1. **Übersetzungen erweitern** in `js/translations.js`:
```javascript
const translations = {
    // Bestehende Sprachen...
    'fr': {
        'main-title': 'Raccourcis Blender',
        // Weitere Übersetzungen...
    }
};
```

2. **Kategorienamen hinzufügen**:
```javascript
const categoryNames = {
    'fr': {
        general: 'Général',
        navigation: 'Navigation',
        // Weitere Kategorien...
    }
};
```

3. **Shortcuts-Daten hinzufügen** in `js/shortcuts-data.js`:
```javascript
const shortcutsData = {
    general: {
        'fr': [
            { key: 'Tab', desc: 'Basculer le mode édition', note: 'Essentiel', difficulty: 'beginner' }
            // Weitere Shortcuts...
        ]
    }
};
```

### Neue Shortcuts hinzufügen

```javascript
// In der entsprechenden Kategorie und Sprache
{
    key: 'Ctrl + Shift + A',
    desc: 'Neue Funktion',
    note: 'Beschreibung',
    difficulty: 'intermediate', // 'beginner', 'intermediate', 'advanced'
    tags: ['tag1', 'tag2'] // Optional für bessere Suche
}
```

### Design anpassen

**CSS-Variablen** in `css/main.css` ändern:
```css
:root {
    --primary-color: #3498db;    /* Hauptfarbe */
    --secondary-color: #e74c3c;  /* Akzentfarbe */
    --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Neue Export-Formate hinzufügen

```javascript
// In js/export.js
formatAsCustom(data, lang, timestamp) {
    // Ihre benutzerdefinierte Formatierung
    return formattedContent;
}
```

## 🔧 Konfiguration

### App-Konfiguration in `js/config.js`:

```javascript
const config = {
    // Grundeinstellungen
    defaultLanguage: 'de',
    defaultTheme: 'light',
    
    // Such-Einstellungen
    searchDebounceTime: 300,
    minSearchLength: 1,
    
    // Features ein-/ausschalten
    features: {
        exportEnabled: true,
        printModeEnabled: true,
        analyticsEnabled: false
    }
};
```

## 📱 PWA-Installation

### Desktop (Chrome/Edge):
1. Klicken Sie auf das ⚙️ Symbol in der Adressleiste
2. Wählen Sie "Installieren"
3. Die App wird als Desktop-App installiert

### Mobile (iOS/Android):
1. Öffnen Sie das Teilen-Menü
2. Wählen Sie "Zum Homescreen hinzufügen"
3. Die App wird als native App installiert

## 🐛 Fehlerbehebung

### Häufige Probleme

**Problem**: Shortcuts werden nicht angezeigt
- **Lösung**: Überprüfen Sie die Browserkonsole auf Fehler
- **Lösung**: Verwenden Sie einen lokalen Server statt file:// URLs

**Problem**: Suche funktioniert nicht
- **Lösung**: JavaScript muss aktiviert sein
- **Lösung**: Überprüfen Sie, ob alle JS-Dateien geladen wurden

**Problem**: Export funktioniert nicht
- **Lösung**: Überprüfen Sie Browser-Popup-Blocker
- **Lösung**: Stellen Sie sicher, dass Downloads erlaubt sind

**Problem**: Dark Mode wird nicht gespeichert
- **Lösung**: LocalStorage muss im Browser aktiviert sein
- **Lösung**: Überprüfen Sie die Datenschutz-Einstellungen

### Debug-Modus aktivieren

In `js/config.js`:
```javascript
development: {
    debugMode: true,
    logLevel: 'debug',
    enableDevTools: true
}
```

Dann stehen Debug-Tools in `window.debug` zur Verfügung.

## 🤝 Beitragen

### Neue Shortcuts hinzufügen
1. Forken Sie das Repository
2. Fügen Sie Shortcuts in allen drei Sprachen hinzu
3. Testen Sie die Funktionalität
4. Erstellen Sie einen Pull Request

### Übersetzungen verbessern
1. Überprüfen Sie `js/translations.js`
2. Korrigieren oder erweitern Sie Übersetzungen
3. Testen Sie in der entsprechenden Sprache

### Bugs melden
1. Überprüfen Sie die Browser-Konsole
2. Beschreiben Sie Schritte zur Reproduktion
3. Geben Sie Browser und OS-Informationen an

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für Details.

## 🙏 Danksagungen

- **Blender Foundation** - Für die großartige 3D-Software
- **Blender Community** - Für Feedback und Shortcuts-Sammlung
- **Web-Entwickler-Community** - Für Inspiration und Best Practices

## 📞 Support & Kontakt

- **Issues**: [GitHub Issues](https://github.com/username/blender-shortcuts/issues)
- **Diskussionen**: [GitHub Discussions](https://github.com/username/blender-shortcuts/discussions)
- **Email**: support@blender-shortcuts.app

## 🔄 Changelog

### Version 2.0.0 (Current)
- ✨ Modulare Architektur
- 🌍 Drei-Sprachen-Support
- 🔍 Erweiterte Suchfunktionen
- 📤 Flexible Export-Optionen
- 🎨 Modernes UI/UX Design
- ⚡ PWA-Funktionalität
- ♿ Accessibility-Verbesserungen

### Version 1.0.0
- 📝 Grundlegende Shortcut-Liste
- 🇩🇪 Nur Deutsch
- 🔍 Einfache Suche
- 📋 Basic Export

## 🚀 Roadmap

### Geplante Features
- [ ] **Weitere Sprachen**: Französisch, Spanisch, Japanisch
- [ ] **Kategorien erweitern**: Sculpting, Grease Pencil, Geometry Nodes
- [ ] **Personalisierung**: Benutzerdefinierte Shortcut-Listen
- [ ] **Synchronisation**: Cloud-Speicher für Einstellungen
- [ ] **Mobile App**: Native iOS/Android Apps
- [ ] **Gamification**: Shortcut-Quiz und Lernmodus
- [ ] **Community**: User-generated Shortcuts
- [ ] **Integration**: Blender Add-on für direkten Zugriff

### Technische Verbesserungen
- [ ] **TypeScript**: Migration zu TypeScript
- [ ] **Tests**: Unit und E2E Tests
- [ ] **CI/CD**: Automatisierte Builds
- [ ] **CDN**: Globale Verfügbarkeit
- [ ] **Analytics**: Nutzungsstatistiken (opt-in)

---

**Gemacht mit ❤️ für die Blender-Community**

*Wenn Ihnen diese App hilft, geben Sie ihr einen ⭐ auf GitHub!*