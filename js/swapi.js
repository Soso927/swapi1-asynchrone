// au début de ce code, il y a l'url de l'api de swapi qui a été récupéré 
const rootURL = "https://www.swapi.tech/api/";
// la fonction getResources a été créer avec async qui permet retourner une promesse. dans cette fonction une url a été récupérée. avec la méthode fetch, elle envoie une requête HTTP. le résultat est ajouté dans response grâce au const. si l'api est par exemple hors ligne alors elle retourne une erreur. 
async function getResources() {
    const url = new URL(rootURL);
    // const data = request(url);
    // return data;
    return request(url);
}
// dans ces deux fonctions suivantes elle suivent le même procédé que la fonction précédente. 
async function getPerson(id) {
    const url = new URL(rootURL + "people/" + id + "/");
    // const data = request(url);
    // return data;
    return request(url);
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // }
    // catch (error) {
    //     console.log(error);
    // } 
}


async function getFilm(id) {
    console.log("getFilm")
    const url = new URL(rootURL + "films/" + id + "/")
    // const data = request(url);
    // return data;
    return request(url);
    // try {
    //     const response = await fetch (url)
    //     const data = await response.json();
    //     return data;
    // }
    // catch (error) {
    //     console.log(error);
    // }
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
    // const data = request(url);
    // return data;
    return request(url);
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // }
    // catch (error) {
    //     console.log(error);
    // }
}
async function getFilms(objectQuery) {
    const url = new URL(rootURL + "films");
    if (objectQuery) {
        for (let key of Object.keys(objectQuery)) {
            let value = objectQuery[key];
            url.searchParams.append(key, value);
        }
    }
    // const data = request(url);
    // return data;
    return request(url);
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // }
    // catch (error) {
    //     console.log(error);
    // }
}

// Définition d'une fonction asynchrone nommée getstarship qui prend un identifiant (id) en paramètre
async function getstarship(id) {
    console.log("getstarship"); // Affiche dans la console un message pour indiquer que la fonction a été appelée

    // Construit une URL en concaténant rootURL avec le chemin vers une ressource "starships" et l'identifiant fourni
    const url = new URL(rootURL + "starships/" + id + "/");
    // const data = request(url);
    // return data;
    return request(url);
    // try {
    //     // Utilise fetch pour envoyer une requête HTTP GET à l'URL construite, et attend la réponse
    //     const response = await fetch(url);

    //     // Attend que le corps de la réponse soit converti en JSON
    //     const data = await response.json();

    //     // Retourne les données JSON récupérées
    //     return data;
    // }
    // catch (error) {
    //     // En cas d'erreur (par exemple, réseau ou JSON invalide), affiche l'erreur dans la console
    //     console.log(error);
    // }
}

async function getstarships(objectQuery) {
    console.log("getstarships")
    const url = new URL(rootURL + "starships");
    if (objectQuery) {
        for (let key of Object.keys(objectQuery)) {
            let value = objectQuery[key];
            url.searchParams.append(key, value);
        }
    }
    // const data = request(url);
    // return data;
    return request(url);
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // }
    // catch (error) {
    //     console.log(error);
    // }
}

// async function requestold(url){
//     console.log("request")
//     if (objectQuery) {
//         for (let key of Object.keys(objectQuery)) {
//             let value = objectQuery[key];
//             url.searchParams.append(key, value);
//         }
//     }
//     try {
//         const response = await request(url);
//         const data = await response.json();
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

async function request(url) {
    console.log("request", url)
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
async function getVehicle(id) {
    console.log("getVehicle");
    const url = new URL(rootURL + "vehicles/" + id + "/");
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }

    // const data = request(url);
    // return data;
    // return request(url);
}

async function getVehicles(objectQuery) {
    console.log("getvehicles")
    const url = new URL(rootURL + "vehicles");
    if (objectQuery) {
        for (let key of Object.keys(objectQuery)) {
            let value = objectQuery[key];
            url.searchParams.append(key, value);
        }
    }
    // const data = request(url);
    // return data;
    // return request(url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getSpecies(id){
    console.log("getSpecies");
    const url = new URL(rootURL + "species/" + id + "/");
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}