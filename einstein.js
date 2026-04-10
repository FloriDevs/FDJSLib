// Wir speichern die Witze in einem Array, um sie einfacher zu verwalten
let witze = [
    "Wussten sie, dass antike Völker mit Ein-Steinschleudern <br> feindliche Schiffe mit Ein-Steinen beschossen haben.",
    "Egal wie du schläfst – Albert schläft wie Ein-Stein.",
    "Der Unterschied zwischen Genialität und Dummheit ist, <br> dass die Genialität ihre Grenzen hat.",
    "Nur weil du in den Zug kotzt... <br> ...bist du noch lange nicht... <br> <h1>BAHNBRECHEND</h1>",
    "Einstein hatte recht, Zeit ist relativ. <br> Die Dauer einer Minute hängt im Wesentlichen davon ab, <br> ob man sich vor oder hinter einer geschlossenen Klotür befindet.",
    '<img src="https://github.com/FloriDevs/FDJSLib/blob/main/einsteinert.png?raw=true" alt="einstein" style="width:800px; display:block; margin:10px 0;">'
];

// In diesem Array merken wir uns, welche Index-Nummern noch übrig sind
let verfuegbareIndizes = [0, 1, 2, 3, 4, 5];

function einStein() {
    const ziel = document.getElementById("ausgabe");

    if (verfuegbareIndizes.length === 0) {
        alert("Keine neuen Einstein-Witze mehr verfügbar!");
        return;
    }

    // Wähle eine zufällige Position aus den verbleibenden Indizes
    let randomIndex = Math.floor(Math.random() * verfuegbareIndizes.length);
    // Hole die echte Witz-Nummer an dieser Position
    let witzNummer = verfuegbareIndizes[randomIndex];

    // Entferne die Nummer aus den verfügbaren Indizes (verhindert Dopplungen)
    verfuegbareIndizes.splice(randomIndex, 1);

    // Erstelle ein neues Div-Element für den Witz
    let witzContainer = document.createElement("div");
    witzContainer.innerHTML = "<hr>" + witze[witzNummer];

    // .prepend() fügt das neue Element ganz oben im Container ein
    // Die alten Witze rutschen dadurch nach unten
    ziel.prepend(witzContainer);
}
