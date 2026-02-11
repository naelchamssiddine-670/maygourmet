const express = require('express');
// J'importe le pilote Mysql2 utilisé interroger la BDD MySQL2
const mysql2 = require("mysql2");

//j'importe le piloteur express-myconnection utilisé pour se connecter à la BDD
const myConnection = require('express-myconnection');

const app = express();

// Je configure les éléments attendus pour me connecter à MySQL2
const optionsConnexionBasesDonnees = {
    host: "localhost",
    user: "root",
    password: "naelchamssiddine@118",
    database: "maygourmet",
    port: 3306,
}
/*Middleware pour se connecter à la BBD MySQL
    "pool" est la stratégie de connexion à la BDD MySQL
*/
app.use(myConnection(mysql2, optionsConnexionBasesDonnees, "pool"));
// Je précise que les vues sont dans le dossier 'views'
app.set('views', './views');

// Configurer le moteur de vue EJS
app.set('view engine', 'ejs');

// Je précise que j'utilise le dossier 'public' qui les fichiers statics
app.use(express.static('public'));


// API ROUTE pour la page racine : localhost:3004
app.get('/', (req,  res) => {
    res.write("<h1> Bienvenue chez MayGourmet </h1>");
    res.end();
});

// API ROUTE pour la page d'accueil : localhost:3004/api/accueil
app.get('/api/accueil', (req, res) => {

    // Logique de traitement pour la page d'accueil
    console.log("Je passe dans /api/accueil");

    res.render('accueil');

    // type d'encodage du texte retourné eb réponse
    //res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Réponse envoyée au client
    //res.write("<p> Je suis à la l'accueil</p>");

    // Terminer la réponse
    //res.end();
});

// API ROUTE pour la page équipe : localhost:3004/api/equipe
app.get('/api/equipe', (req, res) => {

    // Logique de traitement pour la page équipe
    console.log("Je passe dans  /api/equipe");

    res.render('equipe');

    // Réponse envoyée au client
    //res.write("<p> Je suis dans la page equipe</p>");

    // Terminer la réponse
    //res.end()
})

// API ROUTE pour la page plats du jour : localhost:3004/api/plats
app.get('/api/plats', (req, res) => {

    // Logique de traitement pour la page plats
    console.log("Je passe dans la partie /api/plats");

    res.render('plats');

    // Réponse envoyée au client
    //res.write("<p> Je visite les plats du jours </p>");

    // Terminer la réponse
    //res.end()
});


// API ROUTE pour la page contact : localhost:3004/api/contact
app.get('/api/contact', (req, res) => {

    // Logique de traitement pour la page contact
    console.log("Je passe dans la partie /api/contact");

    res.render('contact');

    // Réponse envoyée au client
    //res.write("<p> Je suis dans les contact</p>");

    // Terminer la réponse
    //res.end()
});






module.exports = app;