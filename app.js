const express = require('express');
// J'importe le pilote Mysql2 utilisé interroger la BDD MySQL2
const mysql2 = require("mysql2");

//j'importe le piloteur express-myconnection utilisé pour se connecter à la BDD
const myConnection = require('express-myconnection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

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

    // 1. Je me connecte à la BBD grâce à la méthode getConnection()
    req.getConnection((erreur,connection) => {
        if(erreur) { // Je vérifie s'il y a une erreur lors de la connexion à la BDD

            console.log(erreur);
        } else {
            connection.query("SELECT * FROM equipe", [], (err,
                resultatEquipe) => {
                    if (err) {
                        console.log("Erreur dans la requête SQL SELECT", err);
                    } else {
                        console.log("Mon equipe : ", resultatEquipe);

                        res.render("equipe", {resultatEquipe});
                    }
                }
            );
        }
    });


    // Réponse envoyée au client
    //res.write("<p> Je suis dans la page equipe</p>");

    // Terminer la réponse
    //res.end()
})


// API ROUTE pour la page à propos : localhost:3004/api/a-propos
app.delete('/api/equipe/:id', (req, res) => {
    const idMembreEquipe = req.params.id;
    const queryDelete = "DELETE FROM equipe WHERE id = ?";

    // Je me connecte à la base de données pour exécuter la requête SQL de suppression
    req.getConnection((erreur, connection) => {
        if (erreur) { // Je vérifie s'il y a une erreur lors de la connexion à la BDD
            console.log("Erreur suppression equipe : ", erreur);
            return res.status(500).send("Erreur de connexion à la base de données");
        }
        // Si la connexion est réussie, j'exécute la requête SQL de suppression
        connection.query(queryDelete, [idMembreEquipe], (err, resultat) => {
            if (err) {
                console.log("Erreur suppression equipe : ", err);
                return res.status(500).send("Erreur lors de la suppression du membre");
            }
            console.log("Bravo! Le membre est supprimé avec succès !");
            //res.status(200).redirect('/api/accueil');
            res.status(200).json({ routeAccueil: "/api/accueil"});
        });
    });
});

app.put('/api/equipe/:id', (req, res) => {
    const idMembreEquipe = req.params.id;
    const nomMembreEquipe = req.body.nom;
    const prenomMembreEquipe = req.body.prenom;
    const mailMembreEquipe = req.body.mail;
    const telephoneMembreEquipe = req.body.telephone;
    const posteMembreEquipe = req.body.poste;
    const adressPostaleMembreEquipe = req.body.adress_postale;
    const presentationMembreEquipe = req.body.presentation;
    const dateRecrutementMembreEquipe = req.body.date_recrutement;

    const queryUpdate = "UPDATE equipe SET nom = ?, prenom = ?, mail = ?, telephone = ?, poste = ?, adress_postale = ?, presentation = ?, date_recrutement = ? WHERE id = ?";

    req.getConnection((erreur, connection) => {
        if (erreur) {
            console.log("Erreur modification membre equipe : ", erreur);
            return res.status(500).send("Erreur de connexion à la base de données");
        }
        connection.query(queryUpdate, [nomMembreEquipe, prenomMembreEquipe, mailMembreEquipe, telephoneMembreEquipe, posteMembreEquipe, adressPostaleMembreEquipe, presentationMembreEquipe, dateRecrutementMembreEquipe, idMembreEquipe], (err, resultat) => {
            if (err) {
                console.log("Erreur modification membre equipe : ", err);
                return res.status(500).send("Erreur lors de la modification du membre");
            }
            console.log("Bravo! Le membre est modifié avec succès !");
            res.status(200).json({ routeAccueil: "/api/accueil"});
        });
    });
    


});

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

/** 
 * API pour ajouter un membre d'équipe.
 * Le membre sera inséré dans la table équipe.
*/
app.post("/api/equipe", (req, res) => {
    console.log("Corps de la requête : ", req.body);
    const nommembreEquipe = req.body.nom;
    const prenommembreEquipe = req.body.prenom;
    const mailmembreEquipe = req.body.mail;
    const telephonemembreEquipe = req.body.telephone;
    const postemembreEquipe = req.body.poste;
    const adress_postalemembreEquipe = req.body.adress_postale;
    const presentation_membreEquipe = req.body.presentation;
    const date_recrutement_membreEquipe = req.body.date_recrutement;

    const requeteSQL = "INSERT INTO equipe (nom, prenom, mail, telephone, poste, adress_postale, presentation, date_recrutement) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const ordreChamps = [nommembreEquipe, prenommembreEquipe, mailmembreEquipe, telephonemembreEquipe, postemembreEquipe, adress_postalemembreEquipe, presentation_membreEquipe, date_recrutement_membreEquipe];

    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log("Erreur de connexion à la base de données : ", erreur);
            return res.status(500).json({ error: "Erreur connexion BDD" });
        } else {
            connection.query(requeteSQL, ordreChamps, (err) => {
                if(err) {
                    console.log("Erreur d'ajout de membre d'équipe : ", err);
                    return res.status(500).json({ error: "Erreur ajout membre équipe" });
                } else {
                    console.log("Membre d'équipe ajouté avec succès !");
                    return res.redirect('/api/accueil');
                }
            });
        }
    });
});
                
/*J'ajoute un fournisseur dans la table fournisseur de la BDD MySQL. Pour cela j'utilise 
la méthode POST */
app.post('/api/fournisseur', (req, res) => {
    console.log("Corps de la requête : ", req.body);
    const nomFournisseur = req.body.nomFournisseur;
    const responsableFournisseur = req.body.responsableFournisseur;
    const emailFournisseur = req.body.emailFournisseur;
    const telephoneFournisseur = req.body.telephoneFournisseur;
    const adresseFournisseur = req.body.adresseFournisseur;
    const presentationFournisseur = req.body.presentationFournisseur;

    const requeteSQL = "INSERT INTO fournisseur (nom, responsable, mail, telephone, adress_postale, presentation_fournisseur) VALUES (?, ?, ?, ?, ?, ?)";

    const ordreChamps = [nomFournisseur, responsableFournisseur, emailFournisseur, telephoneFournisseur, adresseFournisseur, presentationFournisseur];

    //je me connecte à la base de données pour exécuter la requete SQL d'insertion
    req.getConnection((erreur, connection) => {
    if(erreur) {
        console.log("Erreur de connexion à la base de données : ", erreur);
        return res.status(500).json({ error: "Erreur connexion BDD" });
    } else {
        connection.query(requeteSQL, ordreChamps, (err, nouveauFournisseur) => {
            connection.release();
            if(err) {
                console.log("Erreur d'ajout de fournisseur : ", err);
                return res.status(500).json({ error: "Erreur ajout fournisseur" });
            } else {
                console.log("Fournisseur ajouté avec succès !");
                return res.redirect('/accueil');
            }
        });
    }
});


    //req.getConnection((erreur, connection) => {
  //      if(erreur) {
  //          console.log("Erreur de connexion à la base de données : ", erreur);
   //     } else {
   //         connection.query(requeteSQL, ordreChamps, (err, nouveauFournisseur) => {
//            if(err) {
   //                 console.log("Erreur d'ajout de fournisseur : ", err);
    //            } else {
   //                 console.log("Fournisseur ajouté avec succès !");
    //                res.status(300).json('/accueil');
   //             }
   //         });
   //     }
   // });


    //console.log(req.body.nomFournisseur);
    //console.log(req.body.responsableFournisseur);
    //console.log(req.body.emailFournisseur);
    //console.log(req.body.telephoneFournisseur);
    //console.log(req.body.adresseFournisseur);
    //console.log(req.body.presentationFournisseur);
});

// API ROUTE vas faire en sorte que lorsque je visite localhost:3004/api/fournisseur, je puisse voir la page fournisseur.ejs
app.get('/api/fournisseur', (req, res) => {
    res.render('fournisseur');
});

module.exports = app;