document.addEventListener("DOMContentLoaded", function () {

    // Récupération du modal
    let modal = document.getElementById("myModal");

    // Bouton "Ajouter"
    let btn = document.getElementById("myBtn");

    // Bouton fermer
    let span = document.getElementsByClassName("close")[0];

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