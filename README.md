# Emoji Wetter App - Debug Challenge 🐛

## Willkommen zur Debug Challenge!
In dieser Übung findet ihr eine Wetter-App mit verschiedenen Bugs, die es zu fixen gilt. Schaut euch die `screenshot.png` an, um zu sehen, wie die App am Ende aussehen soll.

### Funktionale Bugs 🔧
1. Die App bricht sofort ab und zeigt "Oops something went wrong..."
2. Der Stadt-Input funktioniert nicht (`cityInputt`)
3. Die Wetter-Emoji Funktion zeigt immer nur das Sonnen-Emoji (☀️) an
4. Die Temperaturanzeige erscheint nicht (Variable `asd` nicht definiert)
5. Fehler bei der Groß-/Kleinschreibung von `dAta`
6. Die Fehlerbehandlung zeigt das rohe Error-Objekt statt einer benutzerfreundlichen Nachricht

### UI/CSS Bugs 🎨
1. Die Wetter-Emojis sind zu klein (8px)
2. Input und Button sind nicht responsive (fixe Breite von 300px)
3. Der Container-Schatten ist fehlerhaft
4. Die Temperatur braucht das 🌡️ Emoji und °C Symbol

### Erwartetes Verhalten ✨
- Eingabe einer Stadt möglich
- Korrekte Anzeige des Wetters mit passendem Emoji
- Temperaturanzeige im Format: 🌡️ XX°C
- Benutzerfreundliche Fehlermeldungen
- Responsive Design für alle Bildschirmgrößen
- UI entspricht dem Design in `screenshot.png`

### Wetter-Codes und Emojis 🌤️
- 0: ☀️ (Sonnig)
- 1-3: 🌤️/⛅/☁️ (Bewölkt)
- 45,48: 🌫️ (Nebel)
- 51-55: 🌦️ (Leichter Regen)
- 61-65: 🌧️ (Regen)
- 80-82: 🌧️ (Regenschauer)
- 95-99: ⛈️ (Gewitter)

### 🌟 Bonus Challenge: Wetter-Verlauf
Wenn du alle Bugs erfolgreich behoben hast, kannst du diese zusätzliche Funktion implementieren:

Füge unter der aktuellen Wetteranzeige eine Liste der letzten 3 Städte mit ihrem Wetter hinzu:
- Speichere die letzten 3 Suchanfragen mit Stadt, Temperatur und Wetter-Emoji
- Zeige diese in einer schönen Liste unter der aktuellen Wetteranzeige an
- Die Liste soll nach jeder neuen Suche automatisch aktualisiert werden
- Beim Neuladen der Seite kann die Liste leer sein

Tipp: Du kannst dafür ein Array verwenden, um die letzten Suchanfragen zu speichern!

Viel Erfolg beim Debuggen! 🚀
