 function supprimer(id) { // Fonction pour supprimer un membre de l'équipe
    const routeComplete = '/api/equipe/' + id;
    fetch( // Effectuer une requête DELETE à l'URL spécifiée
        routeComplete, {method: "DELETE"}
    ).then // Traiter la réponse de la requête fetch
        ((response) => response.json()
    ).then( //response.json() est utilisé pour extraire les données JSON de la réponse de la requête fetch.
        (donne) => window.location.href = donnee.routeAccueil
    ).catch( // Gestion des erreurs
        (erreur) => console.log(erreur)
    )
};
