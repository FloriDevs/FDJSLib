Version = 26.000001


/**
 * @param {string} elementId - Die ID des zu bewegenden HTML-Elements.
 * @param {string} axis - Die Achse der Bewegung ('x', 'y' oder 'z').
 * @param {number} value - Der Wert (in Pixeln) um den das Element verschoben werden soll.
 */
function move(elementId, axis, value) {
    const el = document.getElementById(elementId);
    if (!el) {
        console.error(`404 ID '${elementId}' `);
        return;
    }

    // Aktuelle Positionen aus den data-Attributen lesen
    let x = parseInt(el.dataset.x, 10) || 0;
    let y = parseInt(el.dataset.y, 10) || 0;
    let z = parseInt(el.dataset.z, 10) || 0;

    // Den Wert für die angegebene Achse aktualisieren
    switch(axis) {
        case 'x':
            x += value;
            break;
        case 'y':
            y += value;
            break;
        case 'z':
            z += value;
            break;
        default:
            console.error(`Ungültige Achse: '${axis}'. Gültige Werte sind 'x', 'y' oder 'z'.`);
            return;
    }

    // Neue Position in den data-Attributen speichern
    el.dataset.x = x;
    el.dataset.y = y;
    el.dataset.z = z;

    // Die CSS-Transformation anwenden
    el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
}

/**
 * Setzt die Position eines Elements auf den Ursprung zurück.
 * @param {string} elementId - Die ID des Elements.
 */
function resetPosition(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    // Setzt die data-Attribut-Werte auf 0 zurück
    el.dataset.x = 0;
    el.dataset.y = 0;
    el.dataset.z = 0;

    // Die CSS-Transformation zurücksetzen
    el.style.transform = 'translate3d(0, 0, 0)';
}


function fdsver(){
    console.log("FloriDevs JS Library");
    console.log("version: ", Version);
    console.log("all rights for the Library are at https://www.github.com/FloriDevs/")
}
function role(){
    (function() {
    document.body.style.transition = "transform 2s linear";
    document.body.style.transformOrigin = "center";

    setInterval(() => {
        const currentRotation = (parseInt(document.body.dataset.rotation) || 0) + 360;
        document.body.dataset.rotation = currentRotation;
        document.body.style.transform = `rotate(${currentRotation}deg)`;
    }, 2000);
})();
}







/**
 * @fileoverview Eine einfache Bibliothek zur Manipulation des Textinhalts von HTML-Elementen.
 */

/**

 * @param {string} elementId - Die ID des zu bearbeitenden HTML-Elements.
 * @param {string} text - Der neue Textinhalt.
 */
function setText(elementId, text) {
    const el = document.getElementById(elementId);
    if (!el) {
        console.error(`404 ID '${elementId}' `);
        return;
    }
    el.textContent = text;
}

/**

 *
 * @param {string} elementId - Die ID des zu bearbeitenden HTML-Elements.
 * @param {string} textToAppend - Der Text, der hinzugefügt werden soll.
 */
function appendText(elementId, textToAppend) {
    const el = document.getElementById(elementId);
    if (!el) {
        console.error(`404 ID '${elementId}' `);
        return;
    }
    el.textContent += textToAppend;
}

/**

 *
 * @param {string} elementId - Die ID des zu bearbeitenden HTML-Elements.
 */
function clearText(elementId) {
    const el = document.getElementById(elementId);
    if (!el) {
        console.error(`404 ID '${elementId}' `);
        return;
    }
    el.textContent = '';
}



function changeImage(elementId, newImageUrl) {
    const el = document.getElementById(elementId);
    if (!el && el.tagName.toLowerCase() !== 'img') {
        console.error(`404 ID '${elementId}' `);
        return;
    }
    el.src = newImageUrl;
}

/**
 * Aktualisiert die Anzeige der aktuellen Uhrzeit in einem HTML-Element.
 * @param {string} elementId - Die ID des Elements, das die Uhrzeit anzeigen soll.
 */
function updateClock(elementId) {
    const el = document.getElementById(elementId);
    if (!el) {
        console.error(`Element mit der ID '${elementId}' nicht gefunden.`);
        return;
    }

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${hours}:${minutes}:${seconds}`;
}

/**
 * Ruft Wetterdaten für einen bestimmten Ort ab und zeigt sie an.
 * Hinweis: Sie müssen hier einen gültigen API-Schlüssel und eine API-URL angeben.
 * Für dieses Beispiel wird ein Platzhalter verwendet.
 * @param {string} elementId - Die ID des Elements, das die Wetterdaten anzeigen soll.
 * @param {string} city - Der Name der Stadt, für die das Wetter abgefragt werden soll.
 */
function getWeather(elementId, city) {
    const el = document.getElementById(elementId);
    if (!el) {
        console.error(`Element mit der ID '${elementId}' nicht gefunden.`);
        return;
    }
    
    // Platzhalter für eine Wetter-API-URL. Ersetzen Sie dies durch Ihre eigene.
    const apiUrl = `https://api.example.com/weather?q=${city}&appid=YOUR_API_KEY`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Dies ist ein Beispiel für die Verarbeitung der Daten. Passen Sie dies an Ihre API an.
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            el.innerHTML = `Wetter in ${city}: ${temperature}°C, ${description}`;
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Wetterdaten:', error);
            el.textContent = 'Wetterdaten konnten nicht geladen werden.';
        });
}
