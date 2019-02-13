// Créer une variable favoriteCityId (à l'aide mot clé let) qui contient la chaîne de caractères : "rome".
// Afficher dans la console (console.log(...)) la variable favoriteCityId.
// Affecter une nouvelle valeur à la variable favoriteCityId : une chaînes de caractères : "paris".
// Afficher dans la console (console.log(...)) la variable favoriteCityId.
// Vérifier le résultat dans la console

let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

// Créer une constante citiesId (à l'aide mot clé const) qui contient un tableau de chaînes de caractères : "paris", "nyc", "rome", "rio-de-janeiro".
// Afficher dans la console (console.log(...)) la constante citiesId.
// Vérifier le résultat dans la console .
// Affecter une nouvelle valeur à la constante citiesId : un tableau vide par exemple. Que constatez-vous dans la console ? Mettre en commentaire la ligne de code de la nouvelle affectation.
// Ajouter un nouvel élément au tableau : "tokyo".
// Afficher dans la console (console.log(...)) la constante citiesId.

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId = [];
// console.log(citiesId);
citiesId.push("tokyo");
console.log(citiesId);

// Créer une fonction getWeather qui possède un paramètre cityId.
// Dans cette fonction, ajouter 2 variables locales :
// city qui stocke la valeur du paramètre cityId en lettres majuscules.
// temperature valorisé à 20.
// Utiliser la nouvelle syntaxe ES2015, pour retourner un objet de la forme {city: "PARIS", temperature: 20}.

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}
console.log(getWeather("paris"));

// Créer une constante weather qui exécute la fonction getWeather en lui passant en paramètre favoriteCityId.
// Afficher dans la console constante weather

const weather = getWeather(favoriteCityId);
console.log(weather);

// Avec la nouvelle syntaxe d'affectation destructurée, créer deux constantes city et temperature qui récupère leurs valeurs à partir de la constante weather.
// Afficher dans la console la valeur de constante city.
// Afficher dans la console la valeur de constante temperature.

const city = weather.city;
const temp = weather.temperature;
console.log(city + " : " + temp);

// A l'aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et othersCitiesId.
// Afficher dans la console la valeur de constante parisId.
// Afficher dans la console la valeur de constante nycId.
// Afficher dans la console la taille du tableau othersCitiesId.

const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Créer une classe Trip.
// Ajouter un constructeur avec les propriétés : id, name, imageUrl.
// Créer un objet parisTrip avec la classe Trip avec les informations suivantes :
// id : paris
// name : Paris
// imageUrl : img/paris.jpg
// Afficher dans la console :
// l'objet parisTrip.
// la propriété name de l'objet parisTrip.
// Vérifier le résultat dans la console.
// Ajouter la méthode toString() à la classe Trip qui permet d'avoir l'affichage ci-après.
//Afficher dans la console le résultat de son exécution sur l'objet parisTrip.
// Ajouter un getter et un setter pour la propriété price. La classe sauvegardera la valeur dans une variable privée appellée _price.
// Compléter la méthode toString() pour qu'elle affiche la valeur de _price.
// Valoriser à 100 la propriété price de l'objet parisTrip.
// Afficher dans la console, le résultat de la méthode toString() de l'objet parisTrip
// Ajouter à la classe Trip une méthode statique getDefaultTrip() qui retourne une instance de la classe Trip valorisée avec les informations suivantes :
// id : rio-de-janeiro
// name : Rio de Janeiro
// imageUrl : img/rio-de-janeiro.jpg

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.price + "]";
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip("rio de janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());

// Créer une constante defaultTrip qui récupère le résultat de l'exécution de la méthode getDefaultTrip().
// Afficher dans la console defaultTrip.toString().

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

// Créer la classe FreeTrip qui étends Trip.
// Elle se construit avec les informations suivantes : id, name et imageUrl. La propriété price est valorisé par défaut à 0.
// Créer une constante freeTrip, instance de la classe FreeTrip avec les informations suivantes :
// id : nantes
// name : Nantes
// imageUrl : img/nantes.jpg
// Afficher dans la console freeTrip.toString()
//Redéfinir la méthode toString() dont le résultat est la concaténation de la chaîne de caractères Free
//et du résultat de l'exécution de la méthode toString() de la classe Trip.

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        super.price = 0;
    }

    toString() {
        return "Free" + super.toString();
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());





// Si aucun voyage ne correspond au nom en paramètre, renvoyer une erreur No trip with name xxx.
// Compléter la méthode findPriceByTripId pour qu'elle renvoie une promesse.
// Utiliser la méthode setTimeout(fn,delay) pour créer une latence de 2s.
// Renvoyer la valeur du prix si trouvé
// Si aucun prix trouvé, renvoyer l'erreur No price found for id xxxx.
// Créer une instance de TripService et une instance de PriceService.
// Effectuer une recherche par nom de voyage avec la valeur Paris. Afficher dans la console le résultat trouvé.

class TripService {

    // Compléter le constructeur de la classe TripService pour initialiser un Set de 3 objet Trip.
    constructor() {
        let trips = new Set();
        trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
        this.trips = trips;
    }

    // Compléter la méthode findByName(tripName) pour qu'elle renvoie une promesse.
    // Pour simuler une récupération des données distantes, utiliser la méthode setTimeout(fn,delay) pour créer une latence de 2s.
    
    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // Renvoyer l'objet Trip correspondant au nom du voyage en paramètre.
                if(!this.trips.has(tripName)){
                    reject("no trip");
                }
                this.trips.forEach(e => {
                    if(e.name == tripName){
                        resolve(e);
                    }
                });
            }, 2000)
        });
    }
}

let tp = new TripService();
console.log(tp.findByName("paris"));

class PriceService {

    // Compléter le constructeur de la classe PriceService pour initialiser une Map (clé = identifiant voyage, valeur = prix). Stocker y 2 prix pour les villes Paris et Rio de Janeiro.
    constructor() {
        this.map = new Map();
        map.set("Paris", 100);
        map.set("Rio de Janeiro", 800);
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}