// Sélectionne l'élément HTML avec l'ID "console"
const elConsole = document.querySelector("#console");

// Exporte une fonction nommée "log"
export function log() {
    // Affiche tous les arguments dans la console 
    console.log("arguments : ", ...arguments);

    // Crée un élément <pre> pour afficher le texte formaté sur la page
    const pre = document.createElement("pre");

    // Parcourt tous les arguments passés à la fonction
    for (let arg of arguments) {
        switch (typeof arg) {
            case "string":
                // Si c'est une chaîne, on l'ajoute telle quelle
                pre.append(arg);
                break;
            default:
                // Sinon (objet, nombre, booléen, etc.), on convertit en JSON formaté
                pre.append(JSON.stringify(arg, null, 2));
        }
        // Ajoute un espace après chaque argument
        pre.append(" ");
    }

    // Ajoute l'élément <pre> au DOM dans #console
    elConsole.append(pre);
}
