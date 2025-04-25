// au début de ce code, il y a l'url de l'api de swapi qui a été récupéré 
const rootURL = "https://www.swapi.tech/api/";
// la fonction getResources a été créer avec async qui permet retourner une promesse. dans cette fonction une url a été récupérée. avec la méthode fetch, elle envoie une requête HTTP. le résultat est ajouté dans response grâce au const. si l'api est par exemple hors ligne alors elle retourne une erreur. 
async function getResources() {
    const url = new URL(rootURL);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
// dans ces deux fonctions suivantes elle suivent le même procédé que la fonction précédente. 
async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/");
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    } 
}


async function getFilm(id){
    const url = new URL( "https://www.swapi.tech/api/films/3" + "film/" + id + "/")        
    try {
        const response = await fetch (url)
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
// cette fonction permet de récupérer des informations sur des personnes sur une API et elle est asynchrone pour ne pas bloquer le programme pendant l'appel. 
async function getPeople(queryObject) {
    const url = new URL(rootURL + "people");
    if (queryObject) {
        for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            url.searchParams.append(key, value);
        }
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getFilms(objectQuery){
    const url = new URL ("https://www.swapi.tech/api/films/3" + 'film/' + objectQuery)
    if(objectQuery){
        
    }
}
