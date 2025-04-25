// Sur ce code la fonction log a été importé depuis le fichier log.js. 
import {log} from "./log.js";
// cette ligne de code permet de savoir si le script a bien été lancé 
log("Load");
// appel de fonction 
// on appel getResources elle retourne une promesse donc elle utilise .then() pour attendre le résultat
getResources().then( data => {
    log("Result of getResources", data);
});
// dans cette fonction qui renvoie une liste de personne elle retourne aussi une promesse qui utilise .then qui attend le résultat
getPeople().then(data => {
    log("Result of getPeople", data);
});
// pareil pour cet appel de fonction mais cette fois ci c'est au niveau de la page 2
getPeople({page: 2}).then( data => {
    log("Result of getPeople (page 2)", data);
});

getPerson(1).then( data => {
    log("Result of getPerson/1", data);
});