CREATE TABLE equipe (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, -- Identifiant unique de l'équipe
    nom VARCHAR(155) NOT NULL, -- Nom de l'équipe
    prenom VARCHAR(155) NOT NULL, -- Prénom de l'équipe
    mail VARCHAR(100) NOT NULL UNIQUE, -- Adresse e-mail de l'équipe
    telephone VARCHAR(100) NOT NULL, -- Numéro de téléphone de l'équipe
    poste VARCHAR(80) NOT NULL, -- Poste occupé dans l'équipe
    adress_postale VARCHAR(250), -- Adresse postale de l'équipe
    presentation VARCHAR(255), -- Brève présentation de l'équipe
    ville VARCHAR(100) NOT NULL,
    date_creation DATE NOT NULL
);