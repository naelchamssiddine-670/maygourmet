-- Créer la base de données
CREATE DATABASE maygourmet;
-- Afficher les bases de données existantes
SHOW DATABASES;


CREATE TABLE equipe (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, -- Identifiant unique de l'équipe
    nom VARCHAR(155) NOT NULL, -- Nom de l'équipe
    prenom VARCHAR(155) NOT NULL, -- Prénom de l'équipe
    mail VARCHAR(100) NOT NULL UNIQUE, -- Adresse e-mail de l'équipe l'adresse mail doit exister une fois dans la table equipe
    telephone VARCHAR(100) NOT NULL, -- Numéro de téléphone de l'équipe
    poste VARCHAR(80) NOT NULL, -- Poste occupé dans l'équipe
    adress_postale VARCHAR(250), -- Adresse postale de l'équipe
    presentation VARCHAR(255), -- Brève présentation de l'équipe
    date_recrutement DATE-- Date de recrutement de l'équipe    
);

-- Afficher les tables de la base de données
SHOW TABLES;

-- Ajouter un membre dans l'équipe
INSERT INTO equipe (nom, prenom, mail, telephone, poste, adress_postale, presentation, date_recrutement)
VALUES ("ZANFARANE","HAMZA","zanfaranehamza@gmail.com","0639123456","Gérant","4 rue de la mosquée 97600 Mamoudzou","Passionné de cuisine traditionnelle et moderne.", "2023-10-01");

INSERT INTO equipe (nom, prenom, mail, telephone, poste, adress_postale, presentation, date_recrutement)
VALUES ("MOHAMED","ISSA","mohamedissa@gmail.com","0639123456","chef cuisinier","45 rue maweni 97640 sada","Expert en cuisine locale et internationale.", "2023-11-15");

INSERT INTO equipe (nom, prenom, mail, telephone, poste, adress_postale, presentation, date_recrutement)
VALUES ("ALI","FATIMA","alifatima@gamil.com","0639123456","Responsable des commandes","12 avenue de la plage 97600 Mamoudzou","Organisée et efficace dans la gestion des approvisionnements.", "2024-01-20");

INSERT INTO equipe (nom, prenom, mail, telephone, poste, adress_postale, presentation, date_recrutement) VALUES ("ABDULLAHI","YOUSSOUF","abdullahi@gmail.com","0639123456","Serveur","78 boulevard de la mer 97600 Mamoudzou","Aimable et attentif au service des clients.", "2024-03-10");

INSERT INTO equipe (nom, prenom, mail, telephone, poste, adress_postale, presentation, date_recrutement)
VALUES ("HASSANI","AICHA","hassani@gmail.com","0639123456","Responsable marketing","23 rue des fleurs 97600 Mamoudzou","Créative et passionnée par la promotion de la cuisine.", "2024-05-05");

CREATE TABLE fournisseur (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    prenom VARCHAR(155) NOT NULL,
    mail VARCHAR(100), -- ce champ est facultatif
    telephone VARCHAR(100) NOT NULL,
    adress_postale VARCHAR(255),
    presentation_produit VARCHAR(255)
);

INSERT INTO fournisseur (nom, prenom, mail, telephone, adress_postale, presentation_produit)
VALUES ("IBRAHIM","HAMZA","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97600 Mamoudzou","Viande de beouf, viande de mouton et viande de chevre.");

INSERT INTO fournisseur (nom, prenom, mail, telephone, adress_postale, presentation_produit)
VALUES
("IBRAHIM","HAMZA","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97600 Mamoudzou","nkassa."),
("IBRAHIM","HAMZA","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97600 Mamoudzou","landra."),
("","ahmed","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97665","viande de poulet, dinde, canard");