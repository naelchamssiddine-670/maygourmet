document.addEventListener("DOMContentLoaded", function () {

    // Récupération du modal
    var modal = document.getElementById("myModal");

    // Bouton "Ajouter"
    var btn = document.getElementById("myBtn");

    // Bouton fermer
    var span = document.getElementsByClassName("close")[0];

    // Vérification (évite les erreurs)
    if (btn) {
        btn.onclick = function () {
            modal.style.display = "block";
        };
    }

    if (span) {
        span.onclick = function () {
            modal.style.display = "none";
        };
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

/**
 * Fonction pour SUPPRIMER un membre
 */
function supprimer(id) {
    if (confirm("Tu veux vraiment supprimer ?")) {

        fetch("/api/equipe/" + id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            alert("Supprimé !");
            location.reload(); // recharge la page
        })
        .catch(err => console.error(err));
    }
}

/**
 * Fonction appelée quand on clique sur "Modifier"
 */
function modifier(id, nom, prenom, mail, telephone, poste, adresse, presentation, date) {

    // 1. Ouvrir le modal
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    // 2. Remplir les champs avec les données existantes
    document.getElementById("nommembreEquipe").value = nom;
    document.getElementById("prenommembreEquipe").value = prenom;
    document.getElementById("mailmembreEquipe").value = mail;
    document.getElementById("telephonemembreEquipe").value = telephone;
    document.getElementById("postemembre").value = poste;
    document.getElementById("adress_postalemembre").value = adresse;
    document.getElementById("presentation").value = presentation;
    document.getElementById("date_recrutement").value = date;

    // 3. Récupérer le formulaire
    const form = document.querySelector("form");

    // 4. Remplacer le comportement du formulaire
    form.onsubmit = function (event) {
        event.preventDefault(); // empêche le rechargement

        // 5. Récupérer les valeurs modifiées
        const data = {
            nom: document.getElementById("nommembreEquipe").value,
            prenom: document.getElementById("prenommembreEquipe").value,
            mail: document.getElementById("mailmembreEquipe").value,
            telephone: document.getElementById("telephonemembreEquipe").value,
            poste: document.getElementById("postemembre").value,
            adress_postale: document.getElementById("adress_postalemembre").value,
            presentation: document.getElementById("presentation").value,
            date_recrutement: document.getElementById("date_recrutement").value
        };

        // 6. Envoyer les données au serveur (PUT)
        fetch("/api/equipe/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(() => {
            alert("✅ Membre modifié !");
            location.reload(); // recharge la page
        })
        .catch(error => console.error("erreur :",error));
    };
}