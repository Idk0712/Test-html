// Récupérer le formulaire et l'élément de bouton
const form = document.querySelector('form');
const button = document.querySelector('button');

// Ajouter un écouteur d'événements au bouton
button.addEventListener('click', () => {
  // Récupérer les données du formulaire
  const data = new FormData(form);

  // Configurer l'URL du webhook et les options de la requête
  const url = 'https://example.com/webhook';
  const options = {
    method: 'POST',
    body: data,
  };

  // Envoyer la requête au webhook
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données au webhook.');
      }
      console.log('Les données ont été envoyées avec succès au webhook.');
    })
    .catch(error => {
      console.error(error);
    });
});
