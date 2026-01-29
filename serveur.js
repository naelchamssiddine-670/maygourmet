// J'ai crée un serveur HTTP simple
const http = require('http');

const app = require('./app');


const numeroPort = 3004;

app.set('port', numeroPort);
 
// Crée un serveur qui répond avec "Bonjour, May Gourmet!"
const server = http.createServer(app);

server.listen(numeroPort, () => {
  console.log(`Le serveur  de MayGourmet est à l'écoute en cours d'exécution sur le port ${numeroPort}`);
});