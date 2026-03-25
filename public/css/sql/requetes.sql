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

CREATE TABLE fournisseur IF NOT EXISTS(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
    prenom VARCHAR(155) NOT NULL,
    mail VARCHAR(100), -- ce champ est facultatif
    telephone VARCHAR(100) NOT NULL,
    adress_postale VARCHAR(255),
    presentation_produit VARCHAR(255)
    -- J'associe la table fournisseur à la table produit en utilisant L'ID_PRODUIT
    -- L'ID_PRODUIT provient de la table produit
    id_produit INT NOT NULL,
    FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
);

-- Créer la table 'produit'
CREATE TABLE produit IF NOT EXISTS(
    id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    presentation VARCHAR(155),
    prix INT NOT NULL,
    origin VARCHAR(30) NOT NULL,
    categorie VARCHAR(30),
    disponibilite BOOLEAN DEFAULT False,
    type_culture VARCHAR(30)
    -- J'associe la table produit à la table fournisseur en utilisant les identifiants de chaque table
    FOREIGN KEY (id_fournisseur) REFERENCES fournisseur(id_fournisseur)
);

INSERT INTO fournisseur (nom, prenom, mail, telephone, adress_postale, presentation_produit)
VALUES ("IBRAHIM","HAMZA","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97600 Mamoudzou","Viande de beouf, viande de mouton et viande de chevre.");

INSERT INTO fournisseur (nom, prenom, mail, telephone, adress_postale, presentation_produit)
VALUES
("IBRAHIM","HAMZA","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97600 Mamoudzou","nkassa."),
("IBRAHIM","HAMZA","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97600 Mamoudzou","landra."),
("","ahmed","zanfaranehamza@gmail.com","0639123456","4 rue de la mosquée 97665","viande de poulet, dinde, canard");

CREATE TABLE fournisseur(
    id_fournisseur INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(155) NOT NULL,
   	responsable VARCHAR(155) not null,
   	mail VARCHAR(100) not null,
    telephone VARCHAR(100),
    adress_postale VARCHAR(255),
    presentation_fournisseur VARCHAR(255)
);


CREATE TABLE produit(
    id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    presentation VARCHAR(155),
    prix INT NOT NULL,
    origin VARCHAR(30) NOT NULL,
    categorie VARCHAR(30),
    disponibilite BOOLEAN DEFAULT False,
    type_culture VARCHAR(30),
    -- J'associe la table produit à la table fournisseur en utilisant les identifiants de chaque table
    id_fournisseur INT not null,
    FOREIGN KEY (id_fournisseur) REFERENCES fournisseur(id_fournisseur)
);

ALTER TABLE fournisseur drop id produit;
CHANGE id_fournisseur id_produit INT NOT null;
alter table fournisseur 
add FOREIGN KEY (id_produit) REFERENCES produit(id_produit)

-- Ajouter une ligne dans la table fournisseeur
INSERT INTO fournisseur (id_fournisseur , nom, responsable, mail, telephone, adress_postale, presentation_fournisseur )
values(1, "Kanga Passam", "Said Abdallah", "contact@kanfa.yt" , "0639123456","4 Rue Mhogoni 97605 Passamainty", "vente de fruit et légume local");                                                                                                                     )

-- 1. Créer la base
CREATE DATABASE IF NOT EXISTS maygourmet;
USE maygourmet;

-- 2. Créer la table produit (OBLIGATOIRE)
CREATE TABLE produit (
    id_produit INT AUTO_INCREMENT PRIMARY KEY
);

-- 3. Créer la table plats
CREATE TABLE plats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    categorie VARCHAR(50),
    prix DECIMAL(10,2) NOT NULL,
    disponibilite BOOLEAN DEFAULT TRUE,
    id_produit INT,
    FOREIGN KEY (id_produit) REFERENCES produit(id_produit)
);

-- 4. Ajouter image
ALTER TABLE plats ADD image VARCHAR(200);

-- 5. Insérer un produit (IMPORTANT)
INSERT INTO produit VALUES (1);

-- 6. Insérer les plats
INSERT INTO plats (nom, description, categorie, prix, disponibilite, id_produit)
VALUES 
('Poulet coco', 'Poulet au lait de coco et épices', 'plat', 12.50, TRUE, 1),
('Salade exotique', 'Salade fraîche avec fruits tropicaux', 'entrée', 8.00, TRUE, 1),
('Gâteau banane', 'Dessert maison à la banane', 'dessert', 5.50, FALSE, 1);
