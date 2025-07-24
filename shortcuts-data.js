// Complete Blender shortcuts data for all categories and languages
const shortcutsData = {
    general: {
        de: [
            { key: 'Tab', desc: 'Edit-Modus ein/aus', note: 'Grundlegend', difficulty: 'beginner', tags: ['mode', 'basic'] },
            { key: 'Esc', desc: 'Aktion abbrechen', note: 'Universal', difficulty: 'beginner', tags: ['cancel', 'basic'] },
            { key: 'Space', desc: 'Such-Menü öffnen', note: 'Schnellzugriff', difficulty: 'beginner', tags: ['search', 'menu'] },
            { key: 'Ctrl + Z', desc: 'Rückgängig', note: 'Standard', difficulty: 'beginner', tags: ['undo', 'basic'] },
            { key: 'Ctrl + Shift + Z', desc: 'Wiederholen', note: 'Standard', difficulty: 'beginner', tags: ['redo', 'basic'] },
            { key: 'Ctrl + S', desc: 'Datei speichern', note: 'Standard', difficulty: 'beginner', tags: ['save', 'file'] },
            { key: 'Ctrl + O', desc: 'Datei öffnen', note: 'Standard', difficulty: 'beginner', tags: ['open', 'file'] },
            { key: 'Ctrl + N', desc: 'Neue Datei', note: 'Standard', difficulty: 'beginner', tags: ['new', 'file'] },
            { key: 'Ctrl + Q', desc: 'Blender beenden', note: 'Standard', difficulty: 'beginner', tags: ['quit', 'exit'] },
            { key: 'F12', desc: 'Rendern', note: 'Wichtig', difficulty: 'beginner', tags: ['render', 'important'] },
            { key: 'F11', desc: 'Render-Fenster zeigen/verstecken', note: 'Praktisch', difficulty: 'beginner', tags: ['render', 'window'] },
            { key: 'Ctrl + Alt + U', desc: 'Benutzereinstellungen', note: 'Konfiguration', difficulty: 'intermediate', tags: ['preferences', 'settings'] },
            { key: 'Shift + Ctrl + S', desc: 'Speichern unter', note: 'Standard', difficulty: 'beginner', tags: ['save', 'file'] },
            { key: 'Ctrl + W', desc: 'Datei schließen', note: 'Standard', difficulty: 'beginner', tags: ['close', 'file'] },
            { key: 'F1', desc: 'Hilfe öffnen', note: 'Dokumentation', difficulty: 'beginner', tags: ['help', 'docs'] },
            { key: 'F2', desc: 'Umbenennen', note: 'Aktives Element', difficulty: 'beginner', tags: ['rename', 'edit'] },
            { key: 'F3', desc: 'Speichern unter Dialog', note: 'Datei-Operation', difficulty: 'intermediate', tags: ['save', 'dialog'] }
        ],
        en: [
            { key: 'Tab', desc: 'Toggle Edit Mode', note: 'Essential', difficulty: 'beginner', tags: ['mode', 'basic'] },
            { key: 'Esc', desc: 'Cancel action', note: 'Universal', difficulty: 'beginner', tags: ['cancel', 'basic'] },
            { key: 'Space', desc: 'Open search menu', note: 'Quick access', difficulty: 'beginner', tags: ['search', 'menu'] },
            { key: 'Ctrl + Z', desc: 'Undo', note: 'Standard', difficulty: 'beginner', tags: ['undo', 'basic'] },
            { key: 'Ctrl + Shift + Z', desc: 'Redo', note: 'Standard', difficulty: 'beginner', tags: ['redo', 'basic'] },
            { key: 'Ctrl + S', desc: 'Save file', note: 'Standard', difficulty: 'beginner', tags: ['save', 'file'] },
            { key: 'Ctrl + O', desc: 'Open file', note: 'Standard', difficulty: 'beginner', tags: ['open', 'file'] },
            { key: 'Ctrl + N', desc: 'New file', note: 'Standard', difficulty: 'beginner', tags: ['new', 'file'] },
            { key: 'Ctrl + Q', desc: 'Quit Blender', note: 'Standard', difficulty: 'beginner', tags: ['quit', 'exit'] },
            { key: 'F12', desc: 'Render', note: 'Important', difficulty: 'beginner', tags: ['render', 'important'] },
            { key: 'F11', desc: 'Show/hide render window', note: 'Useful', difficulty: 'beginner', tags: ['render', 'window'] },
            { key: 'Ctrl + Alt + U', desc: 'User preferences', note: 'Configuration', difficulty: 'intermediate', tags: ['preferences', 'settings'] },
            { key: 'Shift + Ctrl + S', desc: 'Save as', note: 'Standard', difficulty: 'beginner', tags: ['save', 'file'] },
            { key: 'Ctrl + W', desc: 'Close file', note: 'Standard', difficulty: 'beginner', tags: ['close', 'file'] },
            { key: 'F1', desc: 'Open help', note: 'Documentation', difficulty: 'beginner', tags: ['help', 'docs'] },
            { key: 'F2', desc: 'Rename', note: 'Active element', difficulty: 'beginner', tags: ['rename', 'edit'] },
            { key: 'F3', desc: 'Save as dialog', note: 'File operation', difficulty: 'intermediate', tags: ['save', 'dialog'] }
        ],
        ru: [
            { key: 'Tab', desc: 'Переключить режим редактирования', note: 'Основная', difficulty: 'beginner', tags: ['mode', 'basic'] },
            { key: 'Esc', desc: 'Отменить действие', note: 'Универсальная', difficulty: 'beginner', tags: ['cancel', 'basic'] },
            { key: 'Space', desc: 'Открыть меню поиска', note: 'Быстрый доступ', difficulty: 'beginner', tags: ['search', 'menu'] },
            { key: 'Ctrl + Z', desc: 'Отменить', note: 'Стандартная', difficulty: 'beginner', tags: ['undo', 'basic'] },
            { key: 'Ctrl + Shift + Z', desc: 'Повторить', note: 'Стандартная', difficulty: 'beginner', tags: ['redo', 'basic'] },
            { key: 'Ctrl + S', desc: 'Сохранить файл', note: 'Стандартная', difficulty: 'beginner', tags: ['save', 'file'] },
            { key: 'Ctrl + O', desc: 'Открыть файл', note: 'Стандартная', difficulty: 'beginner', tags: ['open', 'file'] },
            { key: 'Ctrl + N', desc: 'Новый файл', note: 'Стандартная', difficulty: 'beginner', tags: ['new', 'file'] },
            { key: 'Ctrl + Q', desc: 'Выйти из Blender', note: 'Стандартная', difficulty: 'beginner', tags: ['quit', 'exit'] },
            { key: 'F12', desc: 'Рендер', note: 'Важная', difficulty: 'beginner', tags: ['render', 'important'] },
            { key: 'F11', desc: 'Показать/скрыть окно рендера', note: 'Полезная', difficulty: 'beginner', tags: ['render', 'window'] },
            { key: 'Ctrl + Alt + U', desc: 'Настройки пользователя', note: 'Конфигурация', difficulty: 'intermediate', tags: ['preferences', 'settings'] },
            { key: 'Shift + Ctrl + S', desc: 'Сохранить как', note: 'Стандартная', difficulty: 'beginner', tags: ['save', 'file'] },
            { key: 'Ctrl + W', desc: 'Закрыть файл', note: 'Стандартная', difficulty: 'beginner', tags: ['close', 'file'] },
            { key: 'F1', desc: 'Открыть справку', note: 'Документация', difficulty: 'beginner', tags: ['help', 'docs'] },
            { key: 'F2', desc: 'Переименовать', note: 'Активный элемент', difficulty: 'beginner', tags: ['rename', 'edit'] },
            { key: 'F3', desc: 'Диалог сохранения как', note: 'Файловая операция', difficulty: 'intermediate', tags: ['save', 'dialog'] }
        ]
    },

    navigation: {
        de: [
            { key: 'MMB', desc: 'Ansicht drehen', note: 'Mittlere Maustaste', difficulty: 'beginner', tags: ['viewport', 'rotation'] },
            { key: 'Shift + MMB', desc: 'Ansicht verschieben', note: 'Pan', difficulty: 'beginner', tags: ['viewport', 'pan'] },
            { key: 'Scroll', desc: 'Zoomen', note: 'Mausrad', difficulty: 'beginner', tags: ['viewport', 'zoom'] },
            { key: 'Ctrl + MMB', desc: 'Präzises Zoomen', note: 'Feinabstimmung', difficulty: 'intermediate', tags: ['viewport', 'zoom'] },
            { key: 'Num 1', desc: 'Frontansicht', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 1', desc: 'Rückansicht', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 3', desc: 'Seitenansicht (rechts)', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 3', desc: 'Seitenansicht (links)', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 7', desc: 'Draufsicht', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 7', desc: 'Unteransicht', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 0', desc: 'Kamera-Ansicht', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'camera'] },
            { key: 'Ctrl + Alt + Num 0', desc: 'Kamera zur aktuellen Ansicht', note: 'Praktisch', difficulty: 'intermediate', tags: ['camera', 'align'] },
            { key: 'Num 5', desc: 'Orthogonal/Perspektive umschalten', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'projection'] },
            { key: 'Home', desc: 'Alle Objekte anzeigen', note: 'Vollansicht', difficulty: 'beginner', tags: ['view', 'frame'] },
            { key: 'Num .', desc: 'Auswahl fokussieren', note: 'Ziffernblock', difficulty: 'beginner', tags: ['view', 'focus'] },
            { key: 'Z', desc: 'Shading-Menü', note: 'Wireframe/Solid/Material/Rendered', difficulty: 'beginner', tags: ['shading', 'viewport'] },
            { key: '` (Backtick)', desc: 'Lokale Ansicht umschalten', note: 'Nur ausgewählte Objekte', difficulty: 'intermediate', tags: ['view', 'local'] },
            { key: 'Num /', desc: 'Lokale Ansicht umschalten', note: 'Alternative zu Backtick', difficulty: 'intermediate', tags: ['view', 'local'] },
            { key: 'Shift + Z', desc: 'Wireframe-Modus umschalten', note: 'Drahtgitter', difficulty: 'beginner', tags: ['shading', 'wireframe'] },
            { key: 'Alt + Z', desc: 'Röntgen-Modus umschalten', note: 'X-Ray', difficulty: 'intermediate', tags: ['shading', 'xray'] }
        ],
        en: [
            { key: 'MMB', desc: 'Rotate view', note: 'Middle mouse button', difficulty: 'beginner', tags: ['viewport', 'rotation'] },
            { key: 'Shift + MMB', desc: 'Pan view', note: 'Move view', difficulty: 'beginner', tags: ['viewport', 'pan'] },
            { key: 'Scroll', desc: 'Zoom', note: 'Mouse wheel', difficulty: 'beginner', tags: ['viewport', 'zoom'] },
            { key: 'Ctrl + MMB', desc: 'Precise zoom', note: 'Fine tuning', difficulty: 'intermediate', tags: ['viewport', 'zoom'] },
            { key: 'Num 1', desc: 'Front view', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 1', desc: 'Back view', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 3', desc: 'Right side view', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 3', desc: 'Left side view', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 7', desc: 'Top view', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 7', desc: 'Bottom view', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 0', desc: 'Camera view', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'camera'] },
            { key: 'Ctrl + Alt + Num 0', desc: 'Set camera to current view', note: 'Useful', difficulty: 'intermediate', tags: ['camera', 'align'] },
            { key: 'Num 5', desc: 'Toggle orthographic/perspective', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'projection'] },
            { key: 'Home', desc: 'View all objects', note: 'Frame all', difficulty: 'beginner', tags: ['view', 'frame'] },
            { key: 'Num .', desc: 'Focus selection', note: 'Numpad', difficulty: 'beginner', tags: ['view', 'focus'] },
            { key: 'Z', desc: 'Shading menu', note: 'Wireframe/Solid/Material/Rendered', difficulty: 'beginner', tags: ['shading', 'viewport'] },
            { key: '` (Backtick)', desc: 'Toggle local view', note: 'Selected objects only', difficulty: 'intermediate', tags: ['view', 'local'] },
            { key: 'Num /', desc: 'Toggle local view', note: 'Alternative to backtick', difficulty: 'intermediate', tags: ['view', 'local'] },
            { key: 'Shift + Z', desc: 'Toggle wireframe mode', note: 'Wireframe', difficulty: 'beginner', tags: ['shading', 'wireframe'] },
            { key: 'Alt + Z', desc: 'Toggle X-ray mode', note: 'See through', difficulty: 'intermediate', tags: ['shading', 'xray'] }
        ],
        ru: [
            { key: 'MMB', desc: 'Вращать вид', note: 'Средняя кнопка мыши', difficulty: 'beginner', tags: ['viewport', 'rotation'] },
            { key: 'Shift + MMB', desc: 'Перемещать вид', note: 'Панорама', difficulty: 'beginner', tags: ['viewport', 'pan'] },
            { key: 'Scroll', desc: 'Масштабировать', note: 'Колесо мыши', difficulty: 'beginner', tags: ['viewport', 'zoom'] },
            { key: 'Ctrl + MMB', desc: 'Точное масштабирование', note: 'Тонкая настройка', difficulty: 'intermediate', tags: ['viewport', 'zoom'] },
            { key: 'Num 1', desc: 'Вид спереди', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 1', desc: 'Вид сзади', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 3', desc: 'Вид справа', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 3', desc: 'Вид слева', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 7', desc: 'Вид сверху', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Ctrl + Num 7', desc: 'Вид снизу', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'orthogonal'] },
            { key: 'Num 0', desc: 'Вид с камеры', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'camera'] },
            { key: 'Ctrl + Alt + Num 0', desc: 'Установить камеру в текущий вид', note: 'Полезная', difficulty: 'intermediate', tags: ['camera', 'align'] },
            { key: 'Num 5', desc: 'Переключить ортогональ/перспективу', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'projection'] },
            { key: 'Home', desc: 'Показать все объекты', note: 'Полный кадр', difficulty: 'beginner', tags: ['view', 'frame'] },
            { key: 'Num .', desc: 'Фокус на выделении', note: 'Цифровая клавиатура', difficulty: 'beginner', tags: ['view', 'focus'] },
            { key: 'Z', desc: 'Меню затенения', note: 'Каркас/Сплошной/Материал/Рендер', difficulty: 'beginner', tags: ['shading', 'viewport'] },
            { key: '` (Backtick)', desc: 'Переключить локальный вид', note: 'Только выделенные объекты', difficulty: 'intermediate', tags: ['view', 'local'] },
            { key: 'Num /', desc: 'Переключить локальный вид', note: 'Альтернатива backtick', difficulty: 'intermediate', tags: ['view', 'local'] },
            { key: 'Shift + Z', desc: 'Переключить каркасный режим', note: 'Wireframe', difficulty: 'beginner', tags: ['shading', 'wireframe'] },
            { key: 'Alt + Z', desc: 'Переключить рентген-режим', note: 'Просвечивание', difficulty: 'intermediate', tags: ['shading', 'xray'] }
        ]
    },

    selection: {
        de: [
            { key: 'A', desc: 'Alles auswählen/abwählen', note: 'Toggle', difficulty: 'beginner', tags: ['select', 'all'] },
            { key: 'Alt + A', desc: 'Alles abwählen', note: 'Deselect all', difficulty: 'beginner', tags: ['select', 'clear'] },
            { key: 'B', desc: 'Box-Auswahl', note: 'Rechteckauswahl', difficulty: 'beginner', tags: ['select', 'box'] },
            { key: 'C', desc: 'Kreis-Auswahl', note: 'Brush select', difficulty: 'beginner', tags: ['select', 'circle'] },
            { key: 'Ctrl + LMB', desc: 'Lasso-Auswahl', note: 'Freihand', difficulty: 'intermediate', tags: ['select', 'lasso'] },
            { key: 'Shift + LMB', desc: 'Zur Auswahl hinzufügen', note: 'Mehrfachauswahl', difficulty: 'beginner', tags: ['select', 'add'] },
            { key: 'Ctrl + LMB', desc: 'Von Auswahl entfernen', note: 'Deselect', difficulty: 'beginner', tags: ['select', 'remove'] },
            { key: 'L', desc: 'Verbundene Elemente auswählen', note: 'Linked', difficulty: 'intermediate', tags: ['select', 'linked'] },
            { key: 'Ctrl + L', desc: 'Verbundenes Mesh auswählen', note: 'Ganzes Objekt', difficulty: 'intermediate', tags: ['select', 'mesh'] },
            { key: 'Shift + L', desc: 'Verbundene abwählen', note: 'Deselect linked', difficulty: 'intermediate', tags: ['select', 'deselect'] },
            { key: 'Ctrl + I', desc: 'Auswahl umkehren', note: 'Invert selection', difficulty: 'intermediate', tags: ['select', 'invert'] },
            { key: 'Shift + G', desc: 'Ähnliche auswählen', note: 'Select similar', difficulty: 'intermediate', tags: ['select', 'similar'] },
            { key: 'Alt + LMB', desc: 'Edge/Face Loop auswählen', note: 'Loop select', difficulty: 'intermediate', tags: ['select', 'loop'] },
            { key: 'Ctrl + Alt + LMB', desc: 'Edge Ring auswählen', note: 'Ring select', difficulty: 'advanced', tags: ['select', 'ring'] },
            { key: 'Ctrl + +', desc: 'Auswahl erweitern', note: 'Grow selection', difficulty: 'intermediate', tags: ['select', 'grow'] },
            { key: 'Ctrl + -', desc: 'Auswahl verkleinern', note: 'Shrink selection', difficulty: 'intermediate', tags: ['select', 'shrink'] }
        ],
        en: [
            { key: 'A', desc: 'Select/deselect all', note: 'Toggle', difficulty: 'beginner', tags: ['select', 'all'] },
            { key: 'Alt + A', desc: 'Deselect all', note: 'Clear selection', difficulty: 'beginner', tags: ['select', 'clear'] },
            { key: 'B', desc: 'Box select', note: 'Rectangle selection', difficulty: 'beginner', tags: ['select', 'box'] },
            { key: 'C', desc: 'Circle select', note: 'Brush select', difficulty: 'beginner', tags: ['select', 'circle'] },
            { key: 'Ctrl + LMB', desc: 'Lasso select', note: 'Freehand', difficulty: 'intermediate', tags: ['select', 'lasso'] },
            { key: 'Shift + LMB', desc: 'Add to selection', note: 'Multi-select', difficulty: 'beginner', tags: ['select', 'add'] },
            { key: 'Ctrl + LMB', desc: 'Remove from selection', note: 'Deselect', difficulty: 'beginner', tags: ['select', 'remove'] },
            { key: 'L', desc: 'Select linked', note: 'Connected elements', difficulty: 'intermediate', tags: ['select', 'linked'] },
            { key: 'Ctrl + L', desc: 'Select linked mesh', note: 'Whole object', difficulty: 'intermediate', tags: ['select', 'mesh'] },
            { key: 'Shift + L', desc: 'Deselect linked', note: 'Remove linked', difficulty: 'intermediate', tags: ['select', 'deselect'] },
            { key: 'Ctrl + I', desc: 'Invert selection', note: 'Reverse selection', difficulty: 'intermediate', tags: ['select', 'invert'] },
            { key: 'Shift + G', desc: 'Select similar', note: 'By properties', difficulty: 'intermediate', tags: ['select', 'similar'] },
            { key: 'Alt + LMB', desc: 'Select edge/face loop', note: 'Loop select', difficulty: 'intermediate', tags: ['select', 'loop'] },
            { key: 'Ctrl + Alt + LMB', desc: 'Select edge ring', note: 'Ring select', difficulty: 'advanced', tags: ['select', 'ring'] },
            { key: 'Ctrl + +', desc: 'Grow selection', note: 'Expand selection', difficulty: 'intermediate', tags: ['select', 'grow'] },
            { key: 'Ctrl + -', desc: 'Shrink selection', note: 'Contract selection', difficulty: 'intermediate', tags: ['select', 'shrink'] }
        ],
        ru: [
            { key: 'A', desc: 'Выделить/снять выделение всего', note: 'Переключение', difficulty: 'beginner', tags: ['select', 'all'] },
            { key: 'Alt + A', desc: 'Снять все выделение', note: 'Очистить выделение', difficulty: 'beginner', tags: ['select', 'clear'] },
            { key: 'B', desc: 'Прямоугольное выделение', note: 'Box select', difficulty: 'beginner', tags: ['select', 'box'] },
            { key: 'C', desc: 'Круговое выделение', note: 'Кисть выделения', difficulty: 'beginner', tags: ['select', 'circle'] },
            { key: 'Ctrl + LMB', desc: 'Лассо выделение', note: 'Свободная форма', difficulty: 'intermediate', tags: ['select', 'lasso'] },
            { key: 'Shift + LMB', desc: 'Добавить к выделению', note: 'Множественное выделение', difficulty: 'beginner', tags: ['select', 'add'] },
            { key: 'Ctrl + LMB', desc: 'Убрать из выделения', note: 'Снять выделение', difficulty: 'beginner', tags: ['select', 'remove'] },
            { key: 'L', desc: 'Выделить связанные', note: 'Соединенные элементы', difficulty: 'intermediate', tags: ['select', 'linked'] },
            { key: 'Ctrl + L', desc: 'Выделить связанную сетку', note: 'Весь объект', difficulty: 'intermediate', tags: ['select', 'mesh'] },
            { key: 'Shift + L', desc: 'Снять выделение связанных', note: 'Убрать связанные', difficulty: 'intermediate', tags: ['select', 'deselect'] },
            { key: 'Ctrl + I', desc: 'Инвертировать выделение', note: 'Обратное выделение', difficulty: 'intermediate', tags: ['select', 'invert'] },
            { key: 'Shift + G', desc: 'Выделить похожие', note: 'По свойствам', difficulty: 'intermediate', tags: ['select', 'similar'] },
            { key: 'Alt + LMB', desc: 'Выделить петлю граней/рёбер', note: 'Loop select', difficulty: 'intermediate', tags: ['select', 'loop'] },
            { key: 'Ctrl + Alt + LMB', desc: 'Выделить кольцо рёбер', note: 'Ring select', difficulty: 'advanced', tags: ['select', 'ring'] },
            { key: 'Ctrl + +', desc: 'Расширить выделение', note: 'Увеличить выделение', difficulty: 'intermediate', tags: ['select', 'grow'] },
            { key: 'Ctrl + -', desc: 'Сузить выделение', note: 'Уменьшить выделение', difficulty: 'intermediate', tags: ['select', 'shrink'] }
        ]
    },

    object: {
        de: [
            { key: 'Shift + A', desc: 'Objekt hinzufügen', note: 'Add menu', difficulty: 'beginner', tags: ['add', 'object'] },
            { key: 'X / Del', desc: 'Objekt löschen', note: 'Delete', difficulty: 'beginner', tags: ['delete', 'object'] },
            { key: 'G', desc: 'Verschieben (Grab)', note: 'Move', difficulty: 'beginner', tags: ['transform', 'move'] },
            { key: 'R', desc: 'Rotieren', note: 'Rotate', difficulty: 'beginner', tags: ['transform', 'rotate'] },
            { key: 'S', desc: 'Skalieren', note: 'Scale', difficulty: 'beginner', tags: ['transform', 'scale'] },
            { key: 'Shift + D', desc: 'Duplizieren', note: 'Duplicate', difficulty: 'beginner', tags: ['duplicate', 'copy'] },
            { key: 'Alt + D', desc: 'Verknüpfte Kopie erstellen', note: 'Linked duplicate', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
            { key: 'Ctrl + J', desc: 'Objekte verbinden', note: 'Join objects', difficulty: 'intermediate', tags: ['join', 'merge'] },
            { key: 'Ctrl + P', desc: 'Parent setzen', note: 'Set parent', difficulty: 'intermediate', tags: ['parent', 'hierarchy'] },
            { key: 'Alt + P', desc: 'Parent entfernen', note: 'Clear parent', difficulty: 'intermediate', tags: ['parent', 'clear'] },
            { key: 'H', desc: 'Verstecken', note: 'Hide', difficulty: 'beginner', tags: ['visibility', 'hide'] },
            { key: 'Alt + H', desc: 'Alle einblenden', note: 'Unhide all', difficulty: 'beginner', tags: ['visibility', 'show'] },
            { key: 'Shift + H', desc: 'Alles andere verstecken', note: 'Hide unselected', difficulty: 'intermediate', tags: ['visibility', 'isolate'] },
            { key: 'M', desc: 'In Collection verschieben', note: 'Move to collection', difficulty: 'intermediate', tags: ['collection', 'organize'] },
            { key: 'Ctrl + A', desc: 'Apply-Menü', note: 'Apply transforms', difficulty: 'intermediate', tags: ['apply', 'transform'] },
            { key: 'Ctrl + G', desc: 'Zu Gruppe hinzufügen', note: 'Add to group', difficulty: 'intermediate', tags: ['group', 'organize'] }
        ],
        en: [
            { key: 'Shift + A', desc: 'Add object', note: 'Add menu', difficulty: 'beginner', tags: ['add', 'object'] },
            { key: 'X / Del', desc: 'Delete object', note: 'Remove', difficulty: 'beginner', tags: ['delete', 'object'] },
            { key: 'G', desc: 'Grab (move)', note: 'Translate', difficulty: 'beginner', tags: ['transform', 'move'] },
            { key: 'R', desc: 'Rotate', note: 'Turn', difficulty: 'beginner', tags: ['transform', 'rotate'] },
            { key: 'S', desc: 'Scale', note: 'Resize', difficulty: 'beginner', tags: ['transform', 'scale'] },
            { key: 'Shift + D', desc: 'Duplicate', note: 'Copy', difficulty: 'beginner', tags: ['duplicate', 'copy'] },
            { key: 'Alt + D', desc: 'Linked duplicate', note: 'Instance', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
            { key: 'Ctrl + J', desc: 'Join objects', note: 'Merge objects', difficulty: 'intermediate', tags: ['join', 'merge'] },
            { key: 'Ctrl + P', desc: 'Set parent', note: 'Parent relationship', difficulty: 'intermediate', tags: ['parent', 'hierarchy'] },
            { key: 'Alt + P', desc: 'Clear parent', note: 'Remove parent', difficulty: 'intermediate', tags: ['parent', 'clear'] },
            { key: 'H', desc: 'Hide', note: 'Make invisible', difficulty: 'beginner', tags: ['visibility', 'hide'] },
            { key: 'Alt + H', desc: 'Unhide all', note: 'Show all', difficulty: 'beginner', tags: ['visibility', 'show'] },
            { key: 'Shift + H', desc: 'Hide unselected', note: 'Hide others', difficulty: 'intermediate', tags: ['visibility', 'isolate'] },
            { key: 'M', desc: 'Move to collection', note: 'Organize', difficulty: 'intermediate', tags: ['collection', 'organize'] },
            { key: 'Ctrl + A', desc: 'Apply menu', note: 'Apply transforms', difficulty: 'intermediate', tags: ['apply', 'transform'] },
            { key: 'Ctrl + G', desc: 'Add to group', note: 'Group objects', difficulty: 'intermediate', tags: ['group', 'organize'] }
        ],
        ru: [
            { key: 'Shift + A', desc: 'Добавить объект', note: 'Меню добавления', difficulty: 'beginner', tags: ['add', 'object'] },
            { key: 'X / Del', desc: 'Удалить объект', note: 'Удаление', difficulty: 'beginner', tags: ['delete', 'object'] },
            { key: 'G', desc: 'Схватить (переместить)', note: 'Перемещение', difficulty: 'beginner', tags: ['transform', 'move'] },
            { key: 'R', desc: 'Повернуть', note: 'Вращение', difficulty: 'beginner', tags: ['transform', 'rotate'] },
            { key: 'S', desc: 'Масштабировать', note: 'Изменить размер', difficulty: 'beginner', tags: ['transform', 'scale'] },
            { key: 'Shift + D', desc: 'Дублировать', note: 'Копировать', difficulty: 'beginner', tags: ['duplicate', 'copy'] },
            { key: 'Alt + D', desc: 'Связанная копия', note: 'Экземпляр', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
            { key: 'Ctrl + J', desc: 'Объединить объекты', note: 'Слить объекты', difficulty: 'intermediate', tags: ['join', 'merge'] },
            { key: 'Ctrl + P', desc: 'Установить родителя', note: 'Родительская связь', difficulty: 'intermediate', tags: ['parent', 'hierarchy'] },
            { key: 'Alt + P', desc: 'Убрать родителя', note: 'Удалить связь', difficulty: 'intermediate', tags: ['parent', 'clear'] },
            { key: 'H', desc: 'Скрыть', note: 'Сделать невидимым', difficulty: 'beginner', tags: ['visibility', 'hide'] },
            { key: 'Alt + H', desc: 'Показать все', note: 'Отобразить все', difficulty: 'beginner', tags: ['visibility', 'show'] },
            { key: 'Shift + H', desc: 'Скрыть невыделенные', note: 'Скрыть остальные', difficulty: 'intermediate', tags: ['visibility', 'isolate'] },
            { key: 'M', desc: 'Переместить в коллекцию', note: 'Организация', difficulty: 'intermediate', tags: ['collection', 'organize'] },
            { key: 'Ctrl + A', desc: 'Меню применения', note: 'Применить трансформации', difficulty: 'intermediate', tags: ['apply', 'transform'] },
            { key: 'Ctrl + G', desc: 'Добавить в группу', note: 'Группировать объекты', difficulty: 'intermediate', tags: ['group', 'organize'] }
        ]
    },

    edit: {
    de: [
        { key: '1', desc: 'Vertex-Auswahl', note: 'Punkt-Modus', difficulty: 'beginner', tags: ['selection', 'vertex'] },
        { key: '2', desc: 'Edge-Auswahl', note: 'Kanten-Modus', difficulty: 'beginner', tags: ['selection', 'edge'] },
        { key: '3', desc: 'Face-Auswahl', note: 'Flächen-Modus', difficulty: 'beginner', tags: ['selection', 'face'] },
        { key: 'E', desc: 'Extrudieren', note: 'Vertices/Edges/Faces', difficulty: 'beginner', tags: ['extrude', 'modeling'] },
        { key: 'I', desc: 'Inset Faces', note: 'Flächen einziehen', difficulty: 'intermediate', tags: ['inset', 'faces'] },
        { key: 'K', desc: 'Knife Tool', note: 'Schneidewerkzeug', difficulty: 'intermediate', tags: ['knife', 'cut'] },
        { key: 'Ctrl + R', desc: 'Loop Cut', note: 'Schleifen schneiden', difficulty: 'intermediate', tags: ['loop', 'cut'] },
        { key: 'F', desc: 'Face erstellen', note: 'Fill/New Face', difficulty: 'beginner', tags: ['face', 'fill'] },
        { key: 'Alt + F', desc: 'Face füllen', note: 'Fill Faces', difficulty: 'intermediate', tags: ['face', 'fill'] },
        { key: 'P', desc: 'Trennen', note: 'Separate by selection', difficulty: 'intermediate', tags: ['separate', 'split'] },
        { key: 'V', desc: 'Rip Vertices', note: 'Vertices aufreißen', difficulty: 'advanced', tags: ['rip', 'vertex'] },
        { key: 'Alt + V', desc: 'Rip Vertices and Fill', note: 'Vertices aufreißen und füllen', difficulty: 'advanced', tags: ['rip', 'fill'] },
        { key: 'J', desc: 'Connect Vertex Path', note: 'Vertices verbinden', difficulty: 'intermediate', tags: ['connect', 'vertex'] },
        { key: 'Ctrl + F', desc: 'Face-Menü', note: 'Face operations', difficulty: 'intermediate', tags: ['face', 'menu'] },
        { key: 'Ctrl + E', desc: 'Edge-Menü', note: 'Edge operations', difficulty: 'intermediate', tags: ['edge', 'menu'] },
        { key: 'Ctrl + V', desc: 'Vertex-Menü', note: 'Vertex operations', difficulty: 'intermediate', tags: ['vertex', 'menu'] },
        { key: 'M', desc: 'Merge-Menü', note: 'Vertices zusammenführen', difficulty: 'intermediate', tags: ['merge', 'vertex'] },
        { key: 'Alt + M', desc: 'Merge', note: 'Schnelles Zusammenführen', difficulty: 'intermediate', tags: ['merge', 'quick'] },
        { key: 'Ctrl + X', desc: 'Dissolve-Menü', note: 'Elemente auflösen', difficulty: 'intermediate', tags: ['dissolve', 'delete'] },
        { key: 'U', desc: 'Unwrap-Menü', note: 'UV unwrapping', difficulty: 'intermediate', tags: ['uv', 'unwrap'] },
        { key: 'Ctrl + L', desc: 'Select Linked', note: 'Verbundene auswählen', difficulty: 'intermediate', tags: ['select', 'linked'] },
        { key: 'Ctrl + +', desc: 'Select More', note: 'Auswahl erweitern', difficulty: 'intermediate', tags: ['select', 'grow'] },
        { key: 'Ctrl + -', desc: 'Select Less', note: 'Auswahl verkleinern', difficulty: 'intermediate', tags: ['select', 'shrink'] },
        { key: 'Ctrl + Shift + +', desc: 'Select Next Active', note: 'Nächste Auswahl', difficulty: 'advanced', tags: ['select', 'next'] },
        { key: 'Ctrl + Shift + -', desc: 'Select Previous Active', note: 'Vorherige Auswahl', difficulty: 'advanced', tags: ['select', 'previous'] },
        { key: 'W', desc: 'Proportional Editing', note: 'Proportionales Bearbeiten', difficulty: 'intermediate', tags: ['proportional', 'edit'] },
        { key: 'Shift + W', desc: 'Proportional Editing Menu', note: 'Proportionales Menü', difficulty: 'intermediate', tags: ['proportional', 'menu'] },
        { key: 'O', desc: 'Proportional Editing Toggle', note: 'Proportional umschalten', difficulty: 'intermediate', tags: ['proportional', 'toggle'] },
        { key: 'Shift + O', desc: 'Proportional Connected Only', note: 'Nur verbundene', difficulty: 'advanced', tags: ['proportional', 'connected'] }
    ],
    en: [
        { key: '1', desc: 'Vertex select mode', note: 'Point mode', difficulty: 'beginner', tags: ['selection', 'vertex'] },
        { key: '2', desc: 'Edge select mode', note: 'Edge mode', difficulty: 'beginner', tags: ['selection', 'edge'] },
        { key: '3', desc: 'Face select mode', note: 'Face mode', difficulty: 'beginner', tags: ['selection', 'face'] },
        { key: 'E', desc: 'Extrude', note: 'Vertices/Edges/Faces', difficulty: 'beginner', tags: ['extrude', 'modeling'] },
        { key: 'I', desc: 'Inset Faces', note: 'Inset selected faces', difficulty: 'intermediate', tags: ['inset', 'faces'] },
        { key: 'K', desc: 'Knife Tool', note: 'Cut tool', difficulty: 'intermediate', tags: ['knife', 'cut'] },
        { key: 'Ctrl + R', desc: 'Loop Cut', note: 'Edge loop cut', difficulty: 'intermediate', tags: ['loop', 'cut'] },
        { key: 'F', desc: 'Create Face', note: 'Fill/New Face', difficulty: 'beginner', tags: ['face', 'fill'] },
        { key: 'Alt + F', desc: 'Fill Faces', note: 'Fill selected faces', difficulty: 'intermediate', tags: ['face', 'fill'] },
        { key: 'P', desc: 'Separate', note: 'Separate by selection', difficulty: 'intermediate', tags: ['separate', 'split'] },
        { key: 'V', desc: 'Rip Vertices', note: 'Tear vertices apart', difficulty: 'advanced', tags: ['rip', 'vertex'] },
        { key: 'Alt + V', desc: 'Rip Vertices and Fill', note: 'Rip and fill gap', difficulty: 'advanced', tags: ['rip', 'fill'] },
        { key: 'J', desc: 'Connect Vertex Path', note: 'Connect vertices', difficulty: 'intermediate', tags: ['connect', 'vertex'] },
        { key: 'Ctrl + F', desc: 'Face menu', note: 'Face operations', difficulty: 'intermediate', tags: ['face', 'menu'] },
        { key: 'Ctrl + E', desc: 'Edge menu', note: 'Edge operations', difficulty: 'intermediate', tags: ['edge', 'menu'] },
        { key: 'Ctrl + V', desc: 'Vertex menu', note: 'Vertex operations', difficulty: 'intermediate', tags: ['vertex', 'menu'] },
        { key: 'M', desc: 'Merge menu', note: 'Merge vertices', difficulty: 'intermediate', tags: ['merge', 'vertex'] },
        { key: 'Alt + M', desc: 'Merge', note: 'Quick merge', difficulty: 'intermediate', tags: ['merge', 'quick'] },
        { key: 'Ctrl + X', desc: 'Dissolve menu', note: 'Dissolve elements', difficulty: 'intermediate', tags: ['dissolve', 'delete'] },
        { key: 'U', desc: 'Unwrap menu', note: 'UV unwrapping', difficulty: 'intermediate', tags: ['uv', 'unwrap'] },
        { key: 'Ctrl + L', desc: 'Select Linked', note: 'Select connected', difficulty: 'intermediate', tags: ['select', 'linked'] },
        { key: 'Ctrl + +', desc: 'Select More', note: 'Grow selection', difficulty: 'intermediate', tags: ['select', 'grow'] },
        { key: 'Ctrl + -', desc: 'Select Less', note: 'Shrink selection', difficulty: 'intermediate', tags: ['select', 'shrink'] },
        { key: 'Ctrl + Shift + +', desc: 'Select Next Active', note: 'Next selection', difficulty: 'advanced', tags: ['select', 'next'] },
        { key: 'Ctrl + Shift + -', desc: 'Select Previous Active', note: 'Previous selection', difficulty: 'advanced', tags: ['select', 'previous'] },
        { key: 'W', desc: 'Proportional Editing', note: 'Proportional editing mode', difficulty: 'intermediate', tags: ['proportional', 'edit'] },
        { key: 'Shift + W', desc: 'Proportional Editing Menu', note: 'Proportional menu', difficulty: 'intermediate', tags: ['proportional', 'menu'] },
        { key: 'O', desc: 'Proportional Editing Toggle', note: 'Toggle proportional', difficulty: 'intermediate', tags: ['proportional', 'toggle'] },
        { key: 'Shift + O', desc: 'Proportional Connected Only', note: 'Connected only', difficulty: 'advanced', tags: ['proportional', 'connected'] }
    ],
    ru: [
        { key: '1', desc: 'Режим выбора вершин', note: 'Режим точек', difficulty: 'beginner', tags: ['selection', 'vertex'] },
        { key: '2', desc: 'Режим выбора рёбер', note: 'Режим рёбер', difficulty: 'beginner', tags: ['selection', 'edge'] },
        { key: '3', desc: 'Режим выбора граней', note: 'Режим граней', difficulty: 'beginner', tags: ['selection', 'face'] },
        { key: 'E', desc: 'Выдавливание', note: 'Вершины/Рёбра/Грани', difficulty: 'beginner', tags: ['extrude', 'modeling'] },
        { key: 'I', desc: 'Вставка граней', note: 'Втягивание граней', difficulty: 'intermediate', tags: ['inset', 'faces'] },
        { key: 'K', desc: 'Инструмент нож', note: 'Инструмент разрезания', difficulty: 'intermediate', tags: ['knife', 'cut'] },
        { key: 'Ctrl + R', desc: 'Разрез петли', note: 'Разрез петли рёбер', difficulty: 'intermediate', tags: ['loop', 'cut'] },
        { key: 'F', desc: 'Создать грань', note: 'Заполнить/Новая грань', difficulty: 'beginner', tags: ['face', 'fill'] },
        { key: 'Alt + F', desc: 'Заполнить грани', note: 'Заполнить выбранные грани', difficulty: 'intermediate', tags: ['face', 'fill'] },
        { key: 'P', desc: 'Разделить', note: 'Разделить по выделению', difficulty: 'intermediate', tags: ['separate', 'split'] },
        { key: 'V', desc: 'Разорвать вершины', note: 'Разорвать вершины', difficulty: 'advanced', tags: ['rip', 'vertex'] },
        { key: 'Alt + V', desc: 'Разорвать и заполнить', note: 'Разорвать и заполнить разрыв', difficulty: 'advanced', tags: ['rip', 'fill'] },
        { key: 'J', desc: 'Соединить путь вершин', note: 'Соединить вершины', difficulty: 'intermediate', tags: ['connect', 'vertex'] },
        { key: 'Ctrl + F', desc: 'Меню граней', note: 'Операции с гранями', difficulty: 'intermediate', tags: ['face', 'menu'] },
        { key: 'Ctrl + E', desc: 'Меню рёбер', note: 'Операции с рёбрами', difficulty: 'intermediate', tags: ['edge', 'menu'] },
        { key: 'Ctrl + V', desc: 'Меню вершин', note: 'Операции с вершинами', difficulty: 'intermediate', tags: ['vertex', 'menu'] },
        { key: 'M', desc: 'Меню слияния', note: 'Слить вершины', difficulty: 'intermediate', tags: ['merge', 'vertex'] },
        { key: 'Alt + M', desc: 'Слить', note: 'Быстрое слияние', difficulty: 'intermediate', tags: ['merge', 'quick'] },
        { key: 'Ctrl + X', desc: 'Меню растворения', note: 'Растворить элементы', difficulty: 'intermediate', tags: ['dissolve', 'delete'] },
        { key: 'U', desc: 'Меню развёртки', note: 'UV развёртка', difficulty: 'intermediate', tags: ['uv', 'unwrap'] },
        { key: 'Ctrl + L', desc: 'Выбрать связанные', note: 'Выбрать соединённые', difficulty: 'intermediate', tags: ['select', 'linked'] },
        { key: 'Ctrl + +', desc: 'Больше выделения', note: 'Расширить выделение', difficulty: 'intermediate', tags: ['select', 'grow'] },
        { key: 'Ctrl + -', desc: 'Меньше выделения', note: 'Сузить выделение', difficulty: 'intermediate', tags: ['select', 'shrink'] },
        { key: 'Ctrl + Shift + +', desc: 'Выбрать следующий активный', note: 'Следующий выбор', difficulty: 'advanced', tags: ['select', 'next'] },
        { key: 'Ctrl + Shift + -', desc: 'Выбрать предыдущий активный', note: 'Предыдущий выбор', difficulty: 'advanced', tags: ['select', 'previous'] },
        { key: 'W', desc: 'Пропорциональное редактирование', note: 'Режим пропорционального редактирования', difficulty: 'intermediate', tags: ['proportional', 'edit'] },
        { key: 'Shift + W', desc: 'Меню пропорционального редактирования', note: 'Меню пропорционального', difficulty: 'intermediate', tags: ['proportional', 'menu'] },
        { key: 'O', desc: 'Переключить пропорциональное редактирование', note: 'Переключить пропорциональное', difficulty: 'intermediate', tags: ['proportional', 'toggle'] },
        { key: 'Shift + O', desc: 'Только связанные пропорционально', note: 'Только связанные', difficulty: 'advanced', tags: ['proportional', 'connected'] }
    ]
},

modeling: {
    de: [
        { key: 'Ctrl + B', desc: 'Bevel', note: 'Kanten abschrägen', difficulty: 'intermediate', tags: ['bevel', 'edges'] },
        { key: 'Shift + Ctrl + B', desc: 'Vertex Bevel', note: 'Vertices abschrägen', difficulty: 'intermediate', tags: ['bevel', 'vertex'] },
        { key: 'Ctrl + Shift + R', desc: 'Multi-Loop Cut', note: 'Mehrere Loop Cuts', difficulty: 'intermediate', tags: ['loop', 'cut', 'multi'] },
        { key: 'Alt + S', desc: 'Shrink/Fatten', note: 'Entlang Normalen skalieren', difficulty: 'intermediate', tags: ['shrink', 'fatten', 'normal'] },
        { key: 'Shift + Alt + S', desc: 'Push/Pull', note: 'Schieben/Ziehen', difficulty: 'intermediate', tags: ['push', 'pull'] },
        { key: 'Ctrl + T', desc: 'Triangulate Faces', note: 'Flächen triangulieren', difficulty: 'intermediate', tags: ['triangulate', 'faces'] },
        { key: 'Ctrl + Shift + T', desc: 'Tris to Quads', note: 'Dreiecke zu Vierecken', difficulty: 'intermediate', tags: ['tris', 'quads'] },
        { key: 'Y', desc: 'Split', note: 'Aufteilen', difficulty: 'intermediate', tags: ['split', 'separate'] },
        { key: 'Alt + D', desc: 'Duplicate Linked', note: 'Verknüpft duplizieren', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
        { key: 'Shift + Ctrl + Alt + C', desc: 'Set Origin', note: 'Ursprung setzen', difficulty: 'intermediate', tags: ['origin', 'center'] },
        { key: 'Ctrl + Alt + Shift + S', desc: 'Shear', note: 'Scheren', difficulty: 'advanced', tags: ['shear', 'transform'] },
        { key: 'Shift + S', desc: 'Snap Menu', note: 'Einrasten-Menü', difficulty: 'intermediate', tags: ['snap', 'cursor'] },
        { key: 'Shift + Ctrl + M', desc: 'Merge by Distance', note: 'Nach Entfernung zusammenführen', difficulty: 'intermediate', tags: ['merge', 'distance'] },
        { key: 'Ctrl + N', desc: 'Recalculate Normals', note: 'Normalen neu berechnen', difficulty: 'intermediate', tags: ['normals', 'recalculate'] },
        { key: 'Shift + Ctrl + N', desc: 'Recalculate Inside', note: 'Normalen nach innen', difficulty: 'advanced', tags: ['normals', 'inside'] },
        { key: 'Alt + N', desc: 'Normals Menu', note: 'Normalen-Menü', difficulty: 'intermediate', tags: ['normals', 'menu'] },
        { key: 'Ctrl + Shift + F', desc: 'Fill Holes', note: 'Löcher füllen', difficulty: 'intermediate', tags: ['fill', 'holes'] },
        { key: 'Shift + F', desc: 'Beautify Fill', note: 'Schön füllen', difficulty: 'advanced', tags: ['beautify', 'fill'] },
        { key: 'Alt + J', desc: 'Convert Tris to Quads', note: 'Dreiecke zu Vierecken', difficulty: 'intermediate', tags: ['convert', 'quads'] },
        { key: 'Ctrl + Alt + Q', desc: 'Quad View Toggle', note: 'Vier-Ansichten umschalten', difficulty: 'intermediate', tags: ['quad', 'view'] }
    ],
    en: [
        { key: 'Ctrl + B', desc: 'Bevel', note: 'Bevel edges/vertices', difficulty: 'intermediate', tags: ['bevel', 'edges'] },
        { key: 'Shift + Ctrl + B', desc: 'Vertex Bevel', note: 'Bevel vertices', difficulty: 'intermediate', tags: ['bevel', 'vertex'] },
        { key: 'Ctrl + Shift + R', desc: 'Multi-Loop Cut', note: 'Multiple loop cuts', difficulty: 'intermediate', tags: ['loop', 'cut', 'multi'] },
        { key: 'Alt + S', desc: 'Shrink/Fatten', note: 'Scale along normals', difficulty: 'intermediate', tags: ['shrink', 'fatten', 'normal'] },
        { key: 'Shift + Alt + S', desc: 'Push/Pull', note: 'Push/Pull faces', difficulty: 'intermediate', tags: ['push', 'pull'] },
        { key: 'Ctrl + T', desc: 'Triangulate Faces', note: 'Convert to triangles', difficulty: 'intermediate', tags: ['triangulate', 'faces'] },
        { key: 'Ctrl + Shift + T', desc: 'Tris to Quads', note: 'Convert triangles to quads', difficulty: 'intermediate', tags: ['tris', 'quads'] },
        { key: 'Y', desc: 'Split', note: 'Split elements', difficulty: 'intermediate', tags: ['split', 'separate'] },
        { key: 'Alt + D', desc: 'Duplicate Linked', note: 'Linked duplication', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
        { key: 'Shift + Ctrl + Alt + C', desc: 'Set Origin', note: 'Set object origin', difficulty: 'intermediate', tags: ['origin', 'center'] },
        { key: 'Ctrl + Alt + Shift + S', desc: 'Shear', note: 'Shear transformation', difficulty: 'advanced', tags: ['shear', 'transform'] },
        { key: 'Shift + S', desc: 'Snap Menu', note: 'Snap/cursor menu', difficulty: 'intermediate', tags: ['snap', 'cursor'] },
        { key: 'Shift + Ctrl + M', desc: 'Merge by Distance', note: 'Merge vertices by distance', difficulty: 'intermediate', tags: ['merge', 'distance'] },
        { key: 'Ctrl + N', desc: 'Recalculate Normals', note: 'Recalculate outside normals', difficulty: 'intermediate', tags: ['normals', 'recalculate'] },
        { key: 'Shift + Ctrl + N', desc: 'Recalculate Inside', note: 'Recalculate inside normals', difficulty: 'advanced', tags: ['normals', 'inside'] },
        { key: 'Alt + N', desc: 'Normals Menu', note: 'Normal operations menu', difficulty: 'intermediate', tags: ['normals', 'menu'] },
        { key: 'Ctrl + Shift + F', desc: 'Fill Holes', note: 'Fill selected holes', difficulty: 'intermediate', tags: ['fill', 'holes'] },
        { key: 'Shift + F', desc: 'Beautify Fill', note: 'Beautify face fill', difficulty: 'advanced', tags: ['beautify', 'fill'] },
        { key: 'Alt + J', desc: 'Convert Tris to Quads', note: 'Join triangles to quads', difficulty: 'intermediate', tags: ['convert', 'quads'] },
        { key: 'Ctrl + Alt + Q', desc: 'Quad View Toggle', note: 'Toggle quad viewport', difficulty: 'intermediate', tags: ['quad', 'view'] }
    ],
    ru: [
        { key: 'Ctrl + B', desc: 'Скос', note: 'Скосить рёбра/вершины', difficulty: 'intermediate', tags: ['bevel', 'edges'] },
        { key: 'Shift + Ctrl + B', desc: 'Скос вершин', note: 'Скосить вершины', difficulty: 'intermediate', tags: ['bevel', 'vertex'] },
        { key: 'Ctrl + Shift + R', desc: 'Множественный разрез петли', note: 'Несколько разрезов петли', difficulty: 'intermediate', tags: ['loop', 'cut', 'multi'] },
        { key: 'Alt + S', desc: 'Сжать/Раздуть', note: 'Масштабировать по нормалям', difficulty: 'intermediate', tags: ['shrink', 'fatten', 'normal'] },
        { key: 'Shift + Alt + S', desc: 'Толкать/Тянуть', note: 'Толкать/Тянуть грани', difficulty: 'intermediate', tags: ['push', 'pull'] },
        { key: 'Ctrl + T', desc: 'Триангулировать грани', note: 'Преобразовать в треугольники', difficulty: 'intermediate', tags: ['triangulate', 'faces'] },
        { key: 'Ctrl + Shift + T', desc: 'Треугольники в четырёхугольники', note: 'Преобразовать треугольники в четырёхугольники', difficulty: 'intermediate', tags: ['tris', 'quads'] },
        { key: 'Y', desc: 'Разделить', note: 'Разделить элементы', difficulty: 'intermediate', tags: ['split', 'separate'] },
        { key: 'Alt + D', desc: 'Связанное дублирование', note: 'Связанное дублирование', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
        { key: 'Shift + Ctrl + Alt + C', desc: 'Установить начало координат', note: 'Установить начало координат объекта', difficulty: 'intermediate', tags: ['origin', 'center'] },
        { key: 'Ctrl + Alt + Shift + S', desc: 'Сдвиг', note: 'Трансформация сдвига', difficulty: 'advanced', tags: ['shear', 'transform'] },
        { key: 'Shift + S', desc: 'Меню привязки', note: 'Меню привязки/курсора', difficulty: 'intermediate', tags: ['snap', 'cursor'] },
        { key: 'Shift + Ctrl + M', desc: 'Слить по расстоянию', note: 'Слить вершины по расстоянию', difficulty: 'intermediate', tags: ['merge', 'distance'] },
        { key: 'Ctrl + N', desc: 'Пересчитать нормали', note: 'Пересчитать внешние нормали', difficulty: 'intermediate', tags: ['normals', 'recalculate'] },
        { key: 'Shift + Ctrl + N', desc: 'Пересчитать внутрь', note: 'Пересчитать внутренние нормали', difficulty: 'advanced', tags: ['normals', 'inside'] },
        { key: 'Alt + N', desc: 'Меню нормалей', note: 'Меню операций с нормалями', difficulty: 'intermediate', tags: ['normals', 'menu'] },
        { key: 'Ctrl + Shift + F', desc: 'Заполнить отверстия', note: 'Заполнить выбранные отверстия', difficulty: 'intermediate', tags: ['fill', 'holes'] },
        { key: 'Shift + F', desc: 'Красивое заполнение', note: 'Красивое заполнение граней', difficulty: 'advanced', tags: ['beautify', 'fill'] },
        { key: 'Alt + J', desc: 'Преобразовать треугольники в четырёхугольники', note: 'Соединить треугольники в четырёхугольники', difficulty: 'intermediate', tags: ['convert', 'quads'] },
        { key: 'Ctrl + Alt + Q', desc: 'Переключить четыре вида', note: 'Переключить четыре области просмотра', difficulty: 'intermediate', tags: ['quad', 'view'] }
    ]
},

animation: {
    de: [
        { key: 'I', desc: 'Keyframe einfügen', note: 'Insert Keyframe menu', difficulty: 'beginner', tags: ['keyframe', 'animation'] },
        { key: 'Alt + I', desc: 'Keyframe löschen', note: 'Delete Keyframe menu', difficulty: 'beginner', tags: ['keyframe', 'delete'] },
        { key: 'Shift + Alt + I', desc: 'Keyframes löschen', note: 'Clear Keyframes', difficulty: 'intermediate', tags: ['keyframe', 'clear'] },
        { key: 'Space', desc: 'Animation abspielen/stoppen', note: 'Play/Pause animation', difficulty: 'beginner', tags: ['playback', 'animation'] },
        { key: 'Left Arrow', desc: 'Vorheriger Frame', note: 'Previous frame', difficulty: 'beginner', tags: ['frame', 'navigation'] },
        { key: 'Right Arrow', desc: 'Nächster Frame', note: 'Next frame', difficulty: 'beginner', tags: ['frame', 'navigation'] },
        { key: 'Up Arrow', desc: 'Nächster Keyframe', note: 'Next keyframe', difficulty: 'beginner', tags: ['keyframe', 'navigation'] },
        { key: 'Down Arrow', desc: 'Vorheriger Keyframe', note: 'Previous keyframe', difficulty: 'beginner', tags: ['keyframe', 'navigation'] },
        { key: 'Alt + A', desc: 'Animation abspielen', note: 'Play animation', difficulty: 'beginner', tags: ['playback', 'play'] },
        { key: 'Shift + Left Arrow', desc: '10 Frames zurück', note: '10 frames backward', difficulty: 'intermediate', tags: ['frame', 'navigation'] },
        { key: 'Shift + Right Arrow', desc: '10 Frames vorwärts', note: '10 frames forward', difficulty: 'intermediate', tags: ['frame', 'navigation'] },
        { key: 'Shift + Up Arrow', desc: 'Zum letzten Keyframe', note: 'Jump to last keyframe', difficulty: 'intermediate', tags: ['keyframe', 'jump'] },
        { key: 'Shift + Down Arrow', desc: 'Zum ersten Keyframe', note: 'Jump to first keyframe', difficulty: 'intermediate', tags: ['keyframe', 'jump'] },
        { key: 'Alt + Shift + A', desc: 'Animation rückwärts', note: 'Play animation backwards', difficulty: 'intermediate', tags: ['playback', 'reverse'] },
        { key: 'Ctrl + F12', desc: 'Animation rendern', note: 'Render animation', difficulty: 'beginner', tags: ['render', 'animation'] },
        { key: 'S', desc: 'Frame setzen', note: 'Set frame', difficulty: 'intermediate', tags: ['frame', 'set'] },
        { key: 'E', desc: 'Frame Ende setzen', note: 'Set end frame', difficulty: 'intermediate', tags: ['frame', 'end'] },
        { key: 'Ctrl + Home', desc: 'Zum Start-Frame', note: 'Jump to start frame', difficulty: 'intermediate', tags: ['frame', 'start'] },
        { key: 'Ctrl + End', desc: 'Zum End-Frame', note: 'Jump to end frame', difficulty: 'intermediate', tags: ['frame', 'end'] },
        { key: 'Ctrl + Alt + A', desc: 'Apply Visual Transform', note: 'Apply visual keyframe', difficulty: 'advanced', tags: ['apply', 'visual'] },
        { key: 'Shift + E', desc: 'Extrapolation Mode', note: 'Set extrapolation', difficulty: 'advanced', tags: ['extrapolation', 'curve'] },
        { key: 'Shift + H', desc: 'Handle Type', note: 'Set handle type', difficulty: 'advanced', tags: ['handle', 'curve'] },
        { key: 'V', desc: 'Handle Alignment', note: 'Align handles', difficulty: 'advanced', tags: ['handle', 'align'] },
        { key: 'Ctrl + M', desc: 'Mirror Keyframes', note: 'Mirror selected keyframes', difficulty: 'advanced', tags: ['mirror', 'keyframe'] },
        { key: 'T', desc: 'Interpolation Mode', note: 'Set interpolation', difficulty: 'intermediate', tags: ['interpolation', 'curve'] }
    ],
    en: [
        { key: 'I', desc: 'Insert Keyframe', note: 'Insert Keyframe menu', difficulty: 'beginner', tags: ['keyframe', 'animation'] },
        { key: 'Alt + I', desc: 'Delete Keyframe', note: 'Delete Keyframe menu', difficulty: 'beginner', tags: ['keyframe', 'delete'] },
        { key: 'Shift + Alt + I', desc: 'Clear Keyframes', note: 'Clear all keyframes', difficulty: 'intermediate', tags: ['keyframe', 'clear'] },
        { key: 'Space', desc: 'Play/Pause animation', note: 'Toggle animation playback', difficulty: 'beginner', tags: ['playback', 'animation'] },
        { key: 'Left Arrow', desc: 'Previous frame', note: 'Step backward one frame', difficulty: 'beginner', tags: ['frame', 'navigation'] },
        { key: 'Right Arrow', desc: 'Next frame', note: 'Step forward one frame', difficulty: 'beginner', tags: ['frame', 'navigation'] },
        { key: 'Up Arrow', desc: 'Next keyframe', note: 'Jump to next keyframe', difficulty: 'beginner', tags: ['keyframe', 'navigation'] },
        { key: 'Down Arrow', desc: 'Previous keyframe', note: 'Jump to previous keyframe', difficulty: 'beginner', tags: ['keyframe', 'navigation'] },
        { key: 'Alt + A', desc: 'Play animation', note: 'Start animation playback', difficulty: 'beginner', tags: ['playback', 'play'] },
        { key: 'Shift + Left Arrow', desc: '10 frames backward', note: 'Jump 10 frames back', difficulty: 'intermediate', tags: ['frame', 'navigation'] },
        { key: 'Shift + Right Arrow', desc: '10 frames forward', note: 'Jump 10 frames ahead', difficulty: 'intermediate', tags: ['frame', 'navigation'] },
        { key: 'Shift + Up Arrow', desc: 'Jump to last keyframe', note: 'Go to final keyframe', difficulty: 'intermediate', tags: ['keyframe', 'jump'] },
        { key: 'Shift + Down Arrow', desc: 'Jump to first keyframe', note: 'Go to initial keyframe', difficulty: 'intermediate', tags: ['keyframe', 'jump'] },
        { key: 'Alt + Shift + A', desc: 'Play backwards', note: 'Play animation in reverse', difficulty: 'intermediate', tags: ['playback', 'reverse'] },
        { key: 'Ctrl + F12', desc: 'Render animation', note: 'Start animation render', difficulty: 'beginner', tags: ['render', 'animation'] },
        { key: 'S', desc: 'Set frame', note: 'Set current frame', difficulty: 'intermediate', tags: ['frame', 'set'] },
        { key: 'E', desc: 'Set end frame', note: 'Set animation end frame', difficulty: 'intermediate', tags: ['frame', 'end'] },
        { key: 'Ctrl + Home', desc: 'Jump to start frame', note: 'Go to first frame', difficulty: 'intermediate', tags: ['frame', 'start'] },
        { key: 'Ctrl + End', desc: 'Jump to end frame', note: 'Go to last frame', difficulty: 'intermediate', tags: ['frame', 'end'] },
        { key: 'Ctrl + Alt + A', desc: 'Apply Visual Transform', note: 'Apply visual keyframe', difficulty: 'advanced', tags: ['apply', 'visual'] },
        { key: 'Shift + E', desc: 'Extrapolation Mode', note: 'Set curve extrapolation', difficulty: 'advanced', tags: ['extrapolation', 'curve'] },
        { key: 'Shift + H', desc: 'Handle Type', note: 'Set keyframe handle type', difficulty: 'advanced', tags: ['handle', 'curve'] },
        { key: 'V', desc: 'Handle Alignment', note: 'Align curve handles', difficulty: 'advanced', tags: ['handle', 'align'] },
        { key: 'Ctrl + M', desc: 'Mirror Keyframes', note: 'Mirror selected keyframes', difficulty: 'advanced', tags: ['mirror', 'keyframe'] },
        { key: 'T', desc: 'Interpolation Mode', note: 'Set keyframe interpolation', difficulty: 'intermediate', tags: ['interpolation', 'curve'] }
    ],
    ru: [
        { key: 'I', desc: 'Вставить ключевой кадр', note: 'Меню вставки ключевого кадра', difficulty: 'beginner', tags: ['keyframe', 'animation'] },
        { key: 'Alt + I', desc: 'Удалить ключевой кадр', note: 'Меню удаления ключевого кадра', difficulty: 'beginner', tags: ['keyframe', 'delete'] },
        { key: 'Shift + Alt + I', desc: 'Очистить ключевые кадры', note: 'Очистить все ключевые кадры', difficulty: 'intermediate', tags: ['keyframe', 'clear'] },
        { key: 'Space', desc: 'Воспроизвести/Пауза анимации', note: 'Переключить воспроизведение анимации', difficulty: 'beginner', tags: ['playback', 'animation'] },
        { key: 'Left Arrow', desc: 'Предыдущий кадр', note: 'Шаг назад на один кадр', difficulty: 'beginner', tags: ['frame', 'navigation'] },
        { key: 'Right Arrow', desc: 'Следующий кадр', note: 'Шаг вперёд на один кадр', difficulty: 'beginner', tags: ['frame', 'navigation'] },
        { key: 'Up Arrow', desc: 'Следующий ключевой кадр', note: 'Перейти к следующему ключевому кадру', difficulty: 'beginner', tags: ['keyframe', 'navigation'] },
        { key: 'Down Arrow', desc: 'Предыдущий ключевой кадр', note: 'Перейти к предыдущему ключевому кадру', difficulty: 'beginner', tags: ['keyframe', 'navigation'] },
        { key: 'Alt + A', desc: 'Воспроизвести анимацию', note: 'Начать воспроизведение анимации', difficulty: 'beginner', tags: ['playback', 'play'] },
        { key: 'Shift + Left Arrow', desc: '10 кадров назад', note: 'Прыжок на 10 кадров назад', difficulty: 'intermediate', tags: ['frame', 'navigation'] },
        { key: 'Shift + Right Arrow', desc: '10 кадров вперёд', note: 'Прыжок на 10 кадров вперёд', difficulty: 'intermediate', tags: ['frame', 'navigation'] },
        { key: 'Shift + Up Arrow', desc: 'Перейти к последнему ключевому кадру', note: 'Перейти к финальному ключевому кадру', difficulty: 'intermediate', tags: ['keyframe', 'jump'] },
        { key: 'Shift + Down Arrow', desc: 'Перейти к первому ключевому кадру', note: 'Перейти к начальному ключевому кадру', difficulty: 'intermediate', tags: ['keyframe', 'jump'] },
        { key: 'Alt + Shift + A', desc: 'Воспроизвести назад', note: 'Воспроизвести анимацию в обратном направлении', difficulty: 'intermediate', tags: ['playback', 'reverse'] },
        { key: 'Ctrl + F12', desc: 'Рендер анимации', note: 'Начать рендер анимации', difficulty: 'beginner', tags: ['render', 'animation'] },
        { key: 'S', desc: 'Установить кадр', note: 'Установить текущий кадр', difficulty: 'intermediate', tags: ['frame', 'set'] },
        { key: 'E', desc: 'Установить конечный кадр', note: 'Установить конечный кадр анимации', difficulty: 'intermediate', tags: ['frame', 'end'] },
        { key: 'Ctrl + Home', desc: 'Перейти к начальному кадру', note: 'Перейти к первому кадру', difficulty: 'intermediate', tags: ['frame', 'start'] },
        { key: 'Ctrl + End', desc: 'Перейти к конечному кадру', note: 'Перейти к последнему кадру', difficulty: 'intermediate', tags: ['frame', 'end'] },
        { key: 'Ctrl + Alt + A', desc: 'Применить визуальную трансформацию', note: 'Применить визуальный ключевой кадр', difficulty: 'advanced', tags: ['apply', 'visual'] },
        { key: 'Shift + E', desc: 'Режим экстраполяции', note: 'Установить экстраполяцию кривой', difficulty: 'advanced', tags: ['extrapolation', 'curve'] },
        { key: 'Shift + H', desc: 'Тип рукоятки', note: 'Установить тип рукоятки ключевого кадра', difficulty: 'advanced', tags: ['handle', 'curve'] },
        { key: 'V', desc: 'Выравнивание рукояток', note: 'Выровнять рукоятки кривой', difficulty: 'advanced', tags: ['handle', 'align'] },
        { key: 'Ctrl + M', desc: 'Отразить ключевые кадры', note: 'Отразить выбранные ключевые кадры', difficulty: 'advanced', tags: ['mirror', 'keyframe'] },
        { key: 'T', desc: 'Режим интерполяции', note: 'Установить интерполяцию ключевого кадра', difficulty: 'intermediate', tags: ['interpolation', 'curve'] }
    ]
},

rendering: {
    de: [
        { key: 'F12', desc: 'Rendern', note: 'Render current frame', difficulty: 'beginner', tags: ['render', 'image'] },
        { key: 'Ctrl + F12', desc: 'Animation rendern', note: 'Render animation', difficulty: 'beginner', tags: ['render', 'animation'] },
        { key: 'F11', desc: 'Render-Ergebnis anzeigen', note: 'Show render result', difficulty: 'beginner', tags: ['render', 'view'] },
        { key: 'Z', desc: 'Shading-Modi', note: 'Viewport shading modes', difficulty: 'beginner', tags: ['shading', 'viewport'] },
        { key: 'Shift + Z', desc: 'Wireframe umschalten', note: 'Toggle wireframe', difficulty: 'beginner', tags: ['wireframe', 'viewport'] },
        { key: 'Alt + Z', desc: 'X-Ray umschalten', note: 'Toggle X-ray mode', difficulty: 'intermediate', tags: ['xray', 'viewport'] },
        { key: 'Ctrl + Alt + Z', desc: 'Solid Shading', note: 'Switch to solid shading', difficulty: 'beginner', tags: ['solid', 'shading'] },
        { key: 'Shift + Alt + Z', desc: 'Material Preview', note: 'Material preview shading', difficulty: 'intermediate', tags: ['material', 'preview'] },
        { key: 'Ctrl + Shift + Alt + Z', desc: 'Rendered Shading', note: 'Rendered viewport shading', difficulty: 'intermediate', tags: ['rendered', 'shading'] },
        { key: 'Shift + Ctrl + F11', desc: 'Render Region', note: 'Render selected region', difficulty: 'intermediate', tags: ['render', 'region'] },
        { key: 'Ctrl + B', desc: 'Render Border setzen', note: 'Set render border', difficulty: 'intermediate', tags: ['render', 'border'] },
        { key: 'Ctrl + Alt + B', desc: 'Render Border löschen', note: 'Clear render border', difficulty: 'intermediate', tags: ['render', 'clear'] },
        { key: 'Shift + B', desc: 'Zoom to Border', note: 'Zoom to selected area', difficulty: 'intermediate', tags: ['zoom', 'border'] },
        { key: 'Ctrl + Shift + B', desc: 'Clipping Border', note: 'Set view clipping border', difficulty: 'advanced', tags: ['clipping', 'border'] },
        { key: 'Ctrl + 0', desc: 'Kamera als aktive setzen', note: 'Set active camera', difficulty: 'intermediate', tags: ['camera', 'active'] },
        { key: 'Shift + Ctrl + 0', desc: 'Kamera zu Ansicht', note: 'Align camera to view', difficulty: 'intermediate', tags: ['camera', 'align'] },
        { key: 'Ctrl + Alt + 0', desc: 'Ansicht zu Kamera', note: 'Align view to camera', difficulty: 'intermediate', tags: ['view', 'camera'] },
        { key: 'Shift + F11', desc: 'Render Slots', note: 'Switch render slots', difficulty: 'advanced', tags: ['render', 'slots'] },
        { key: 'J', desc: 'Render Slot speichern', note: 'Save render slot', difficulty: 'advanced', tags: ['render', 'save'] },
        { key: 'F3', desc: 'Bild speichern', note: 'Save rendered image', difficulty: 'intermediate', tags: ['save', 'image'] }
    ],
    en: [
        { key: 'F12', desc: 'Render', note: 'Render current frame', difficulty: 'beginner', tags: ['render', 'image'] },
        { key: 'Ctrl + F12', desc: 'Render Animation', note: 'Render full animation', difficulty: 'beginner', tags: ['render', 'animation'] },
        { key: 'F11', desc: 'Show Render Result', note: 'Display render result', difficulty: 'beginner', tags: ['render', 'view'] },
        { key: 'Z', desc: 'Shading Modes', note: 'Viewport shading modes', difficulty: 'beginner', tags: ['shading', 'viewport'] },
        { key: 'Shift + Z', desc: 'Toggle Wireframe', note: 'Switch wireframe on/off', difficulty: 'beginner', tags: ['wireframe', 'viewport'] },
        { key: 'Alt + Z', desc: 'Toggle X-Ray', note: 'Toggle X-ray transparency', difficulty: 'intermediate', tags: ['xray', 'viewport'] },
        { key: 'Ctrl + Alt + Z', desc: 'Solid Shading', note: 'Switch to solid shading', difficulty: 'beginner', tags: ['solid', 'shading'] },
        { key: 'Shift + Alt + Z', desc: 'Material Preview', note: 'Material preview shading', difficulty: 'intermediate', tags: ['material', 'preview'] },
        { key: 'Ctrl + Shift + Alt + Z', desc: 'Rendered Shading', note: 'Rendered viewport shading', difficulty: 'intermediate', tags: ['rendered', 'shading'] },
        { key: 'Shift + Ctrl + F11', desc: 'Render Region', note: 'Render selected region', difficulty: 'intermediate', tags: ['render', 'region'] },
        { key: 'Ctrl + B', desc: 'Set Render Border', note: 'Define render border', difficulty: 'intermediate', tags: ['render', 'border'] },
        { key: 'Ctrl + Alt + B', desc: 'Clear Render Border', note: 'Remove render border', difficulty: 'intermediate', tags: ['render', 'clear'] },
        { key: 'Shift + B', desc: 'Zoom to Border', note: 'Zoom to selected area', difficulty: 'intermediate', tags: ['zoom', 'border'] },
        { key: 'Ctrl + Shift + B', desc: 'Clipping Border', note: 'Set view clipping border', difficulty: 'advanced', tags: ['clipping', 'border'] },
        { key: 'Ctrl + 0', desc: 'Set Active Camera', note: 'Make camera active', difficulty: 'intermediate', tags: ['camera', 'active'] },
        { key: 'Shift + Ctrl + 0', desc: 'Camera to View', note: 'Align camera to current view', difficulty: 'intermediate', tags: ['camera', 'align'] },
        { key: 'Ctrl + Alt + 0', desc: 'View to Camera', note: 'Align view to camera', difficulty: 'intermediate', tags: ['view', 'camera'] },
        { key: 'Shift + F11', desc: 'Render Slots', note: 'Switch between render slots', difficulty: 'advanced', tags: ['render', 'slots'] },
        { key: 'J', desc: 'Save Render Slot', note: 'Save current render slot', difficulty: 'advanced', tags: ['render', 'save'] },
        { key: 'F3', desc: 'Save Image', note: 'Save rendered image', difficulty: 'intermediate', tags: ['save', 'image'] }
    ],
    ru: [
        { key: 'F12', desc: 'Рендер', note: 'Рендер текущего кадра', difficulty: 'beginner', tags: ['render', 'image'] },
        { key: 'Ctrl + F12', desc: 'Рендер анимации', note: 'Рендер полной анимации', difficulty: 'beginner', tags: ['render', 'animation'] },
        { key: 'F11', desc: 'Показать результат рендера', note: 'Отобразить результат рендера', difficulty: 'beginner', tags: ['render', 'view'] },
        { key: 'Z', desc: 'Режимы затенения', note: 'Режимы затенения области просмотра', difficulty: 'beginner', tags: ['shading', 'viewport'] },
        { key: 'Shift + Z', desc: 'Переключить каркас', note: 'Включить/выключить каркасный режим', difficulty: 'beginner', tags: ['wireframe', 'viewport'] },
        { key: 'Alt + Z', desc: 'Переключить рентген', note: 'Переключить прозрачность рентгена', difficulty: 'intermediate', tags: ['xray', 'viewport'] },
        { key: 'Ctrl + Alt + Z', desc: 'Сплошное затенение', note: 'Переключиться на сплошное затенение', difficulty: 'beginner', tags: ['solid', 'shading'] },
        { key: 'Shift + Alt + Z', desc: 'Предпросмотр материала', note: 'Затенение предпросмотра материала', difficulty: 'intermediate', tags: ['material', 'preview'] },
        { key: 'Ctrl + Shift + Alt + Z', desc: 'Затенение рендера', note: 'Затенение области просмотра рендера', difficulty: 'intermediate', tags: ['rendered', 'shading'] },
        { key: 'Shift + Ctrl + F11', desc: 'Рендер области', note: 'Рендер выбранной области', difficulty: 'intermediate', tags: ['render', 'region'] },
        { key: 'Ctrl + B', desc: 'Установить границу рендера', note: 'Определить границу рендера', difficulty: 'intermediate', tags: ['render', 'border'] },
        { key: 'Ctrl + Alt + B', desc: 'Очистить границу рендера', note: 'Удалить границу рендера', difficulty: 'intermediate', tags: ['render', 'clear'] },
        { key: 'Shift + B', desc: 'Масштабировать к границе', note: 'Масштабировать к выбранной области', difficulty: 'intermediate', tags: ['zoom', 'border'] },
        { key: 'Ctrl + Shift + B', desc: 'Граница отсечения', note: 'Установить границу отсечения вида', difficulty: 'advanced', tags: ['clipping', 'border'] },
        { key: 'Ctrl + 0', desc: 'Установить активную камеру', note: 'Сделать камеру активной', difficulty: 'intermediate', tags: ['camera', 'active'] },
        { key: 'Shift + Ctrl + 0', desc: 'Камера к виду', note: 'Выровнять камеру по текущему виду', difficulty: 'intermediate', tags: ['camera', 'align'] },
        { key: 'Ctrl + Alt + 0', desc: 'Вид к камере', note: 'Выровнять вид по камере', difficulty: 'intermediate', tags: ['view', 'camera'] },
        { key: 'Shift + F11', desc: 'Слоты рендера', note: 'Переключаться между слотами рендера', difficulty: 'advanced', tags: ['render', 'slots'] },
        { key: 'J', desc: 'Сохранить слот рендера', note: 'Сохранить текущий слот рендера', difficulty: 'advanced', tags: ['render', 'save'] },
        { key: 'F3', desc: 'Сохранить изображение', note: 'Сохранить отрендеренное изображение', difficulty: 'intermediate', tags: ['save', 'image'] }
    ]
},

uv: {
    de: [
        { key: 'U', desc: 'UV Unwrap Menü', note: 'UV unwrapping options', difficulty: 'intermediate', tags: ['uv', 'unwrap'] },
        { key: 'Alt + U', desc: 'UV Reset', note: 'Reset UV coordinates', difficulty: 'intermediate', tags: ['uv', 'reset'] },
        { key: 'Ctrl + U', desc: 'Smart UV Project', note: 'Automatic UV projection', difficulty: 'intermediate', tags: ['uv', 'smart'] },
        { key: 'Shift + U', desc: 'Follow Active Quads', note: 'UV follow active quads', difficulty: 'advanced', tags: ['uv', 'follow'] },
        { key: 'E', desc: 'UV Edge Select', note: 'Select UV edge loop', difficulty: 'intermediate', tags: ['uv', 'edge'] },
        { key: 'Alt + E', desc: 'UV Edge Ring', note: 'Select UV edge ring', difficulty: 'advanced', tags: ['uv', 'ring'] },
        { key: 'L', desc: 'UV Island auswählen', note: 'Select UV island', difficulty: 'intermediate', tags: ['uv', 'island'] },
        { key: 'Ctrl + L', desc: 'Alle UV Islands', note: 'Select all UV islands', difficulty: 'intermediate', tags: ['uv', 'all'] },
        { key: 'P', desc: 'UV Island ausblenden', note: 'Pin UV island', difficulty: 'intermediate', tags: ['uv', 'pin'] },
        { key: 'Alt + P', desc: 'UV unpin', note: 'Unpin UV coordinates', difficulty: 'intermediate', tags: ['uv', 'unpin'] },
        { key: 'S', desc: 'UV skalieren', note: 'Scale UV coordinates', difficulty: 'beginner', tags: ['uv', 'scale'] },
        { key: 'R', desc: 'UV rotieren', note: 'Rotate UV coordinates', difficulty: 'beginner', tags: ['uv', 'rotate'] },
        { key: 'G', desc: 'UV verschieben', note: 'Move UV coordinates', difficulty: 'beginner', tags: ['uv', 'move'] },
        { key: 'Ctrl + E', desc: 'UV Seam markieren', note: 'Mark UV seam', difficulty: 'intermediate', tags: ['uv', 'seam'] },
        { key: 'Ctrl + Alt + E', desc: 'UV Seam löschen', note: 'Clear UV seam', difficulty: 'intermediate', tags: ['uv', 'clear'] },
        { key: 'Shift + Ctrl + E', desc: 'Seam from Islands', note: 'Create seams from islands', difficulty: 'advanced', tags: ['uv', 'auto'] },
        { key: 'Y', desc: 'UV Stitch', note: 'Stitch UV islands', difficulty: 'advanced', tags: ['uv', 'stitch'] },
        { key: 'V', desc: 'UV Rip', note: 'Rip UV coordinates', difficulty: 'advanced', tags: ['uv', 'rip'] },
        { key: 'W', desc: 'UV Welding', note: 'Weld UV vertices', difficulty: 'advanced', tags: ['uv', 'weld'] },
        { key: 'Ctrl + A', desc: 'UV Pack Islands', note: 'Pack UV islands', difficulty: 'intermediate', tags: ['uv', 'pack'] }
    ],
    en: [
        { key: 'U', desc: 'UV Unwrap Menu', note: 'UV unwrapping options', difficulty: 'intermediate', tags: ['uv', 'unwrap'] },
        { key: 'Alt + U', desc: 'UV Reset', note: 'Reset UV coordinates', difficulty: 'intermediate', tags: ['uv', 'reset'] },
        { key: 'Ctrl + U', desc: 'Smart UV Project', note: 'Automatic UV projection', difficulty: 'intermediate', tags: ['uv', 'smart'] },
        { key: 'Shift + U', desc: 'Follow Active Quads', note: 'UV follow active quads', difficulty: 'advanced', tags: ['uv', 'follow'] },
        { key: 'E', desc: 'UV Edge Select', note: 'Select UV edge loop', difficulty: 'intermediate', tags: ['uv', 'edge'] },
        { key: 'Alt + E', desc: 'UV Edge Ring', note: 'Select UV edge ring', difficulty: 'advanced', tags: ['uv', 'ring'] },
        { key: 'L', desc: 'Select UV Island', note: 'Select connected UV island', difficulty: 'intermediate', tags: ['uv', 'island'] },
        { key: 'Ctrl + L', desc: 'Select All UV Islands', note: 'Select all UV islands', difficulty: 'intermediate', tags: ['uv', 'all'] },
        { key: 'P', desc: 'Pin UV Island', note: 'Pin UV coordinates in place', difficulty: 'intermediate', tags: ['uv', 'pin'] },
        { key: 'Alt + P', desc: 'Unpin UV', note: 'Unpin UV coordinates', difficulty: 'intermediate', tags: ['uv', 'unpin'] },
        { key: 'S', desc: 'Scale UV', note: 'Scale UV coordinates', difficulty: 'beginner', tags: ['uv', 'scale'] },
        { key: 'R', desc: 'Rotate UV', note: 'Rotate UV coordinates', difficulty: 'beginner', tags: ['uv', 'rotate'] },
        { key: 'G', desc: 'Move UV', note: 'Move UV coordinates', difficulty: 'beginner', tags: ['uv', 'move'] },
        { key: 'Ctrl + E', desc: 'Mark UV Seam', note: 'Mark UV seam edge', difficulty: 'intermediate', tags: ['uv', 'seam'] },
        { key: 'Ctrl + Alt + E', desc: 'Clear UV Seam', note: 'Clear UV seam marking', difficulty: 'intermediate', tags: ['uv', 'clear'] },
        { key: 'Shift + Ctrl + E', desc: 'Seam from Islands', note: 'Create seams from islands', difficulty: 'advanced', tags: ['uv', 'auto'] },
        { key: 'Y', desc: 'UV Stitch', note: 'Stitch UV islands together', difficulty: 'advanced', tags: ['uv', 'stitch'] },
        { key: 'V', desc: 'UV Rip', note: 'Rip UV coordinates apart', difficulty: 'advanced', tags: ['uv', 'rip'] },
        { key: 'W', desc: 'UV Welding', note: 'Weld UV vertices together', difficulty: 'advanced', tags: ['uv', 'weld'] },
        { key: 'Ctrl + A', desc: 'UV Pack Islands', note: 'Pack UV islands efficiently', difficulty: 'intermediate', tags: ['uv', 'pack'] }
    ],
    ru: [
        { key: 'U', desc: 'Меню UV развёртки', note: 'Опции UV развёртки', difficulty: 'intermediate', tags: ['uv', 'unwrap'] },
        { key: 'Alt + U', desc: 'Сброс UV', note: 'Сбросить UV координаты', difficulty: 'intermediate', tags: ['uv', 'reset'] },
        { key: 'Ctrl + U', desc: 'Умная UV проекция', note: 'Автоматическая UV проекция', difficulty: 'intermediate', tags: ['uv', 'smart'] },
        { key: 'Shift + U', desc: 'Следовать активным четырёхугольникам', note: 'UV следование активным четырёхугольникам', difficulty: 'advanced', tags: ['uv', 'follow'] },
        { key: 'E', desc: 'Выбор UV рёбер', note: 'Выбрать петлю UV рёбер', difficulty: 'intermediate', tags: ['uv', 'edge'] },
        { key: 'Alt + E', desc: 'Кольцо UV рёбер', note: 'Выбрать кольцо UV рёбер', difficulty: 'advanced', tags: ['uv', 'ring'] },
        { key: 'L', desc: 'Выбрать UV остров', note: 'Выбрать связанный UV остров', difficulty: 'intermediate', tags: ['uv', 'island'] },
        { key: 'Ctrl + L', desc: 'Выбрать все UV острова', note: 'Выбрать все UV острова', difficulty: 'intermediate', tags: ['uv', 'all'] },
        { key: 'P', desc: 'Закрепить UV остров', note: 'Закрепить UV координаты на месте', difficulty: 'intermediate', tags: ['uv', 'pin'] },
        { key: 'Alt + P', desc: 'Открепить UV', note: 'Открепить UV координаты', difficulty: 'intermediate', tags: ['uv', 'unpin'] },
        { key: 'S', desc: 'Масштабировать UV', note: 'Масштабировать UV координаты', difficulty: 'beginner', tags: ['uv', 'scale'] },
        { key: 'R', desc: 'Повернуть UV', note: 'Повернуть UV координаты', difficulty: 'beginner', tags: ['uv', 'rotate'] },
        { key: 'G', desc: 'Переместить UV', note: 'Переместить UV координаты', difficulty: 'beginner', tags: ['uv', 'move'] },
        { key: 'Ctrl + E', desc: 'Отметить UV шов', note: 'Отметить ребро UV шва', difficulty: 'intermediate', tags: ['uv', 'seam'] },
        { key: 'Ctrl + Alt + E', desc: 'Очистить UV шов', note: 'Очистить отметку UV шва', difficulty: 'intermediate', tags: ['uv', 'clear'] },
        { key: 'Shift + Ctrl + E', desc: 'Шов из островов', note: 'Создать швы из островов', difficulty: 'advanced', tags: ['uv', 'auto'] },
        { key: 'Y', desc: 'UV сшивание', note: 'Сшить UV острова вместе', difficulty: 'advanced', tags: ['uv', 'stitch'] },
        { key: 'V', desc: 'UV разрыв', note: 'Разорвать UV координаты', difficulty: 'advanced', tags: ['uv', 'rip'] },
        { key: 'W', desc: 'UV сварка', note: 'Сварить UV вершины вместе', difficulty: 'advanced', tags: ['uv', 'weld'] },
        { key: 'Ctrl + A', desc: 'Упаковать UV острова', note: 'Эффективно упаковать UV острова', difficulty: 'intermediate', tags: ['uv', 'pack'] }
    ]
},

advanced: {
    de: [
        { key: 'Ctrl + Alt + Shift + C', desc: 'Set Origin Menu', note: 'Ursprung setzen Menü', difficulty: 'intermediate', tags: ['origin', 'center'] },
        { key: 'Ctrl + Alt + O', desc: 'Clear Origin', note: 'Ursprung zurücksetzen', difficulty: 'intermediate', tags: ['origin', 'clear'] },
        { key: 'Shift + Ctrl + Alt + S', desc: 'Shear Transform', note: 'Scheren-Transformation', difficulty: 'advanced', tags: ['transform', 'shear'] },
        { key: 'Ctrl + Alt + Shift + M', desc: 'Mirror Menu', note: 'Spiegeln-Menü', difficulty: 'intermediate', tags: ['mirror', 'transform'] },
        { key: 'Ctrl + Shift + D', desc: 'Duplicate Linked', note: 'Verknüpft duplizieren', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
        { key: 'Alt + Shift + D', desc: 'Instance Collection', note: 'Collection instanziieren', difficulty: 'advanced', tags: ['collection', 'instance'] },
        { key: 'Ctrl + G', desc: 'Group Objects', note: 'Objekte gruppieren', difficulty: 'intermediate', tags: ['group', 'collection'] },
        { key: 'Ctrl + Alt + G', desc: 'Ungroup Objects', note: 'Gruppierung aufheben', difficulty: 'intermediate', tags: ['ungroup', 'collection'] },
        { key: 'Shift + Ctrl + C', desc: 'Make Links Menu', note: 'Verknüpfungen erstellen', difficulty: 'advanced', tags: ['link', 'data'] },
        { key: 'Shift + Ctrl + L', desc: 'Make Single User', note: 'Einzelbenutzer erstellen', difficulty: 'advanced', tags: ['single', 'user'] },
        { key: 'Ctrl + Alt + Shift + T', desc: 'Track Menu', note: 'Verfolgung-Menü', difficulty: 'advanced', tags: ['track', 'constraint'] },
        { key: 'Alt + Shift + C', desc: 'Clear Track', note: 'Verfolgung löschen', difficulty: 'advanced', tags: ['clear', 'track'] },
        { key: 'Ctrl + Shift + Alt + A', desc: 'Apply All Transforms', note: 'Alle Transformationen anwenden', difficulty: 'intermediate', tags: ['apply', 'all'] },
        { key: 'Ctrl + Alt + Shift + V', desc: 'Paste Special', note: 'Spezielles Einfügen', difficulty: 'advanced', tags: ['paste', 'special'] },
        { key: 'Shift + Ctrl + Alt + X', desc: 'Advanced Delete', note: 'Erweiterte Löschoptionen', difficulty: 'advanced', tags: ['delete', 'advanced'] },
        { key: 'Ctrl + Alt + Shift + D', desc: 'Driver Menu', note: 'Treiber-Menü', difficulty: 'advanced', tags: ['driver', 'animation'] },
        { key: 'Ctrl + Shift + F', desc: 'Search Files', note: 'Dateien durchsuchen', difficulty: 'intermediate', tags: ['search', 'files'] },
        { key: 'Ctrl + Alt + U', desc: 'User Preferences', note: 'Benutzereinstellungen', difficulty: 'beginner', tags: ['preferences', 'settings'] },
        { key: 'F4', desc: 'File Browser', note: 'Datei-Browser', difficulty: 'intermediate', tags: ['browser', 'files'] },
        { key: 'Shift + F4', desc: 'Console', note: 'Python-Konsole', difficulty: 'advanced', tags: ['console', 'python'] },
        { key: 'Shift + F11', desc: 'Text Editor', note: 'Text-Editor', difficulty: 'intermediate', tags: ['text', 'editor'] },
        { key: 'Shift + F2', desc: 'Logic Editor', note: 'Logik-Editor', difficulty: 'advanced', tags: ['logic', 'nodes'] },
        { key: 'Shift + F3', desc: 'Node Editor', note: 'Node-Editor', difficulty: 'intermediate', tags: ['nodes', 'shader'] },
        { key: 'Shift + F9', desc: 'Outliner', note: 'Outliner-Panel', difficulty: 'beginner', tags: ['outliner', 'hierarchy'] },
        { key: 'Shift + F6', desc: 'Graph Editor', note: 'Graph-Editor', difficulty: 'intermediate', tags: ['graph', 'animation'] },
        { key: 'Shift + F12', desc: 'Dope Sheet', note: 'Dope Sheet Editor', difficulty: 'intermediate', tags: ['dope', 'animation'] },
        { key: 'Ctrl + Alt + T', desc: '3D Cursor', note: '3D-Cursor setzen', difficulty: 'intermediate', tags: ['cursor', '3d'] },
        { key: 'Shift + Ctrl + Alt + F', desc: 'Freestyle', note: 'Freestyle Einstellungen', difficulty: 'advanced', tags: ['freestyle', 'render'] },
        { key: 'Ctrl + F10', desc: 'Compositor', note: 'Compositor-Nodes', difficulty: 'advanced', tags: ['compositor', 'nodes'] },
        { key: 'Shift + F10', desc: 'UV Editor', note: 'UV/Image Editor', difficulty: 'intermediate', tags: ['uv', 'image'] }
    ],
    en: [
        { key: 'Ctrl + Alt + Shift + C', desc: 'Set Origin Menu', note: 'Object origin options', difficulty: 'intermediate', tags: ['origin', 'center'] },
        { key: 'Ctrl + Alt + O', desc: 'Clear Origin', note: 'Reset object origin', difficulty: 'intermediate', tags: ['origin', 'clear'] },
        { key: 'Shift + Ctrl + Alt + S', desc: 'Shear Transform', note: 'Shear transformation tool', difficulty: 'advanced', tags: ['transform', 'shear'] },
        { key: 'Ctrl + Alt + Shift + M', desc: 'Mirror Menu', note: 'Mirror transformation options', difficulty: 'intermediate', tags: ['mirror', 'transform'] },
        { key: 'Ctrl + Shift + D', desc: 'Duplicate Linked', note: 'Create linked duplicate', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
        { key: 'Alt + Shift + D', desc: 'Instance Collection', note: 'Instance collection objects', difficulty: 'advanced', tags: ['collection', 'instance'] },
        { key: 'Ctrl + G', desc: 'Group Objects', note: 'Create object group', difficulty: 'intermediate', tags: ['group', 'collection'] },
        { key: 'Ctrl + Alt + G', desc: 'Ungroup Objects', note: 'Remove from group', difficulty: 'intermediate', tags: ['ungroup', 'collection'] },
        { key: 'Shift + Ctrl + C', desc: 'Make Links Menu', note: 'Create data links', difficulty: 'advanced', tags: ['link', 'data'] },
        { key: 'Shift + Ctrl + L', desc: 'Make Single User', note: 'Make single user data', difficulty: 'advanced', tags: ['single', 'user'] },
        { key: 'Ctrl + Alt + Shift + T', desc: 'Track Menu', note: 'Tracking constraint menu', difficulty: 'advanced', tags: ['track', 'constraint'] },
        { key: 'Alt + Shift + C', desc: 'Clear Track', note: 'Clear tracking constraints', difficulty: 'advanced', tags: ['clear', 'track'] },
        { key: 'Ctrl + Shift + Alt + A', desc: 'Apply All Transforms', note: 'Apply all transformations', difficulty: 'intermediate', tags: ['apply', 'all'] },
        { key: 'Ctrl + Alt + Shift + V', desc: 'Paste Special', note: 'Special paste options', difficulty: 'advanced', tags: ['paste', 'special'] },
        { key: 'Shift + Ctrl + Alt + X', desc: 'Advanced Delete', note: 'Advanced deletion options', difficulty: 'advanced', tags: ['delete', 'advanced'] },
        { key: 'Ctrl + Alt + Shift + D', desc: 'Driver Menu', note: 'Animation driver menu', difficulty: 'advanced', tags: ['driver', 'animation'] },
        { key: 'Ctrl + Shift + F', desc: 'Search Files', note: 'File search browser', difficulty: 'intermediate', tags: ['search', 'files'] },
        { key: 'Ctrl + Alt + U', desc: 'User Preferences', note: 'Open preferences panel', difficulty: 'beginner', tags: ['preferences', 'settings'] },
        { key: 'F4', desc: 'File Browser', note: 'Open file browser', difficulty: 'intermediate', tags: ['browser', 'files'] },
        { key: 'Shift + F4', desc: 'Console', note: 'Python console', difficulty: 'advanced', tags: ['console', 'python'] },
        { key: 'Shift + F11', desc: 'Text Editor', note: 'Text editor panel', difficulty: 'intermediate', tags: ['text', 'editor'] },
        { key: 'Shift + F2', desc: 'Logic Editor', note: 'Logic node editor', difficulty: 'advanced', tags: ['logic', 'nodes'] },
        { key: 'Shift + F3', desc: 'Node Editor', note: 'Shader node editor', difficulty: 'intermediate', tags: ['nodes', 'shader'] },
        { key: 'Shift + F9', desc: 'Outliner', note: 'Outliner panel', difficulty: 'beginner', tags: ['outliner', 'hierarchy'] },
        { key: 'Shift + F6', desc: 'Graph Editor', note: 'Animation graph editor', difficulty: 'intermediate', tags: ['graph', 'animation'] },
        { key: 'Shift + F12', desc: 'Dope Sheet', note: 'Dope sheet editor', difficulty: 'intermediate', tags: ['dope', 'animation'] },
        { key: 'Ctrl + Alt + T', desc: '3D Cursor', note: 'Place 3D cursor', difficulty: 'intermediate', tags: ['cursor', '3d'] },
        { key: 'Shift + Ctrl + Alt + F', desc: 'Freestyle', note: 'Freestyle line art settings', difficulty: 'advanced', tags: ['freestyle', 'render'] },
        { key: 'Ctrl + F10', desc: 'Compositor', note: 'Compositing nodes', difficulty: 'advanced', tags: ['compositor', 'nodes'] },
        { key: 'Shift + F10', desc: 'UV Editor', note: 'UV/Image editor', difficulty: 'intermediate', tags: ['uv', 'image'] }
    ],
    ru: [
        { key: 'Ctrl + Alt + Shift + C', desc: 'Меню установки начала координат', note: 'Опции начала координат объекта', difficulty: 'intermediate', tags: ['origin', 'center'] },
        { key: 'Ctrl + Alt + O', desc: 'Очистить начало координат', note: 'Сбросить начало координат объекта', difficulty: 'intermediate', tags: ['origin', 'clear'] },
        { key: 'Shift + Ctrl + Alt + S', desc: 'Трансформация сдвига', note: 'Инструмент трансформации сдвига', difficulty: 'advanced', tags: ['transform', 'shear'] },
        { key: 'Ctrl + Alt + Shift + M', desc: 'Меню отражения', note: 'Опции трансформации отражения', difficulty: 'intermediate', tags: ['mirror', 'transform'] },
        { key: 'Ctrl + Shift + D', desc: 'Связанное дублирование', note: 'Создать связанную копию', difficulty: 'intermediate', tags: ['duplicate', 'linked'] },
        { key: 'Alt + Shift + D', desc: 'Экземпляр коллекции', note: 'Создать экземпляр объектов коллекции', difficulty: 'advanced', tags: ['collection', 'instance'] },
        { key: 'Ctrl + G', desc: 'Группировать объекты', note: 'Создать группу объектов', difficulty: 'intermediate', tags: ['group', 'collection'] },
        { key: 'Ctrl + Alt + G', desc: 'Разгруппировать объекты', note: 'Удалить из группы', difficulty: 'intermediate', tags: ['ungroup', 'collection'] },
        { key: 'Shift + Ctrl + C', desc: 'Меню создания ссылок', note: 'Создать ссылки на данные', difficulty: 'advanced', tags: ['link', 'data'] },
        { key: 'Shift + Ctrl + L', desc: 'Сделать единственным пользователем', note: 'Сделать данные единственного пользователя', difficulty: 'advanced', tags: ['single', 'user'] },
        { key: 'Ctrl + Alt + Shift + T', desc: 'Меню отслеживания', note: 'Меню ограничений отслеживания', difficulty: 'advanced', tags: ['track', 'constraint'] },
        { key: 'Alt + Shift + C', desc: 'Очистить отслеживание', note: 'Очистить ограничения отслеживания', difficulty: 'advanced', tags: ['clear', 'track'] },
        { key: 'Ctrl + Shift + Alt + A', desc: 'Применить все трансформации', note: 'Применить все преобразования', difficulty: 'intermediate', tags: ['apply', 'all'] },
        { key: 'Ctrl + Alt + Shift + V', desc: 'Специальная вставка', note: 'Опции специальной вставки', difficulty: 'advanced', tags: ['paste', 'special'] },
        { key: 'Shift + Ctrl + Alt + X', desc: 'Расширенное удаление', note: 'Расширенные опции удаления', difficulty: 'advanced', tags: ['delete', 'advanced'] },
        { key: 'Ctrl + Alt + Shift + D', desc: 'Меню драйверов', note: 'Меню драйверов анимации', difficulty: 'advanced', tags: ['driver', 'animation'] },
        { key: 'Ctrl + Shift + F', desc: 'Поиск файлов', note: 'Браузер поиска файлов', difficulty: 'intermediate', tags: ['search', 'files'] },
        { key: 'Ctrl + Alt + U', desc: 'Настройки пользователя', note: 'Открыть панель настроек', difficulty: 'beginner', tags: ['preferences', 'settings'] },
        { key: 'F4', desc: 'Браузер файлов', note: 'Открыть браузер файлов', difficulty: 'intermediate', tags: ['browser', 'files'] },
        { key: 'Shift + F4', desc: 'Консоль', note: 'Консоль Python', difficulty: 'advanced', tags: ['console', 'python'] },
        { key: 'Shift + F11', desc: 'Текстовый редактор', note: 'Панель текстового редактора', difficulty: 'intermediate', tags: ['text', 'editor'] },
        { key: 'Shift + F2', desc: 'Редактор логики', note: 'Редактор узлов логики', difficulty: 'advanced', tags: ['logic', 'nodes'] },
        { key: 'Shift + F3', desc: 'Редактор узлов', note: 'Редактор узлов шейдеров', difficulty: 'intermediate', tags: ['nodes', 'shader'] },
        { key: 'Shift + F9', desc: 'Структура сцены', note: 'Панель структуры сцены', difficulty: 'beginner', tags: ['outliner', 'hierarchy'] },
        { key: 'Shift + F6', desc: 'Редактор графиков', note: 'Редактор графиков анимации', difficulty: 'intermediate', tags: ['graph', 'animation'] },
        { key: 'Shift + F12', desc: 'Лист экспозиции', note: 'Редактор листа экспозиции', difficulty: 'intermediate', tags: ['dope', 'animation'] },
        { key: 'Ctrl + Alt + T', desc: '3D курсор', note: 'Разместить 3D курсор', difficulty: 'intermediate', tags: ['cursor', '3d'] },
        { key: 'Shift + Ctrl + Alt + F', desc: 'Freestyle', note: 'Настройки линейной графики Freestyle', difficulty: 'advanced', tags: ['freestyle', 'render'] },
        { key: 'Ctrl + F10', desc: 'Композитор', note: 'Узлы композитинга', difficulty: 'advanced', tags: ['compositor', 'nodes'] },
        { key: 'Shift + F10', desc: 'UV редактор', note: 'UV/Редактор изображений', difficulty: 'intermediate', tags: ['uv', 'image'] }
    ]
  }

};

// Helper functions for working with shortcuts data
const shortcutsHelpers = {
    // Get all shortcuts for a specific category and language
    getShortcuts(category, language = 'de') {
        return shortcutsData[category] && shortcutsData[category][language] ? 
               shortcutsData[category][language] : [];
    },

    // Get shortcuts by difficulty level
    getShortcutsByDifficulty(category, language, difficulty) {
        const shortcuts = this.getShortcuts(category, language);
        return difficulty === 'all' ? shortcuts : 
               shortcuts.filter(s => s.difficulty === difficulty);
    },

    // Search shortcuts by key or description
    searchShortcuts(searchTerm, language = 'de', categories = null) {
        const results = [];
        const categoriesToSearch = categories || Object.keys(shortcutsData);
        const term = searchTerm.toLowerCase();

        categoriesToSearch.forEach(category => {
            const shortcuts = this.getShortcuts(category, language);
            shortcuts.forEach(shortcut => {
                if (shortcut.key.toLowerCase().includes(term) ||
                    shortcut.desc.toLowerCase().includes(term) ||
                    shortcut.note.toLowerCase().includes(term) ||
                    (shortcut.tags && shortcut.tags.some(tag => tag.includes(term)))) {
                    results.push({
                        ...shortcut,
                        category: category
                    });
                }
            });
        });

        return results;
    },

    // Get total count of shortcuts
    getTotalCount(language = 'de') {
        let total = 0;
        Object.keys(shortcutsData).forEach(category => {
            total += this.getShortcuts(category, language).length;
        });
        return total;
    },

    // Get shortcuts count by category
    getCategoryCount(category, language = 'de') {
        return this.getShortcuts(category, language).length;
    },

    // Get shortcuts by tags
    getShortcutsByTags(tags, language = 'de') {
        const results = [];
        Object.keys(shortcutsData).forEach(category => {
            const shortcuts = this.getShortcuts(category, language);
            shortcuts.forEach(shortcut => {
                if (shortcut.tags && 
                    tags.some(tag => shortcut.tags.includes(tag))) {
                    results.push({
                        ...shortcut,
                        category: category
                    });
                }
            });
        });
        return results;
    },

    // Export shortcuts in different formats
    exportToFormat(format, category = null, language = 'de') {
        const categoriesToExport = category ? [category] : Object.keys(shortcutsData);
        let exportData = {};

        categoriesToExport.forEach(cat => {
            exportData[cat] = this.getShortcuts(cat, language);
        });

        switch (format) {
            case 'json':
                return JSON.stringify(exportData, null, 2);
            case 'csv':
                return this.convertToCSV(exportData);
            case 'markdown':
                return this.convertToMarkdown(exportData, language);
            case 'txt':
                return this.convertToText(exportData, language);
            default:
                return JSON.stringify(exportData, null, 2);
        }
    },

    convertToCSV(data) {
        const rows = ['Category,Key,Description,Note,Difficulty,Tags'];
        Object.keys(data).forEach(category => {
            data[category].forEach(shortcut => {
                const tags = shortcut.tags ? shortcut.tags.join(';') : '';
                rows.push(`"${category}","${shortcut.key}","${shortcut.desc}","${shortcut.note}","${shortcut.difficulty}","${tags}"`);
            });
        });
        return rows.join('\n');
    },

    convertToMarkdown(data, language) {
        let markdown = `# Blender Shortcuts (${language.toUpperCase()})\n\n`;
        markdown += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

        Object.keys(data).forEach(category => {
            const categoryName = categoryNames[language] && categoryNames[language][category] ? 
                                categoryNames[language][category] : category;
            markdown += `## ${categoryName}\n\n`;
            markdown += '| Shortcut | Description | Note | Difficulty |\n';
            markdown += '|----------|-------------|------|------------|\n';
            
            data[category].forEach(shortcut => {
                markdown += `| \`${shortcut.key}\` | ${shortcut.desc} | ${shortcut.note} | ${shortcut.difficulty} |\n`;
            });
            markdown += '\n';
        });

        return markdown;
    },

    convertToText(data, language) {
        let text = `Blender Shortcuts (${language.toUpperCase()})\n`;
        text += `Generated on: ${new Date().toLocaleDateString()}\n`;
        text += '='.repeat(50) + '\n\n';

        Object.keys(data).forEach(category => {
            const categoryName = categoryNames[language] && categoryNames[language][category] ? 
                                categoryNames[language][category] : category;
            text += `${categoryName.toUpperCase()}\n`;
            text += '-'.repeat(categoryName.length) + '\n\n';
            
            data[category].forEach(shortcut => {
                text += `${shortcut.key.padEnd(20)} - ${shortcut.desc}\n`;
                text += `${' '.repeat(20)}   ${shortcut.note} (${shortcut.difficulty})\n\n`;
            });
            text += '\n';
        });

        return text;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        shortcutsData,
        shortcutsHelpers
    };
}