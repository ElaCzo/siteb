const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Middleware pour activer CORS et la gestion des cookies.
app.use(cors({ origin: 'https://sitea.pro', credentials: true }));
app.use(cookieParser());

// Route pour servir votre page HTML supplémentaire
app.get('/', (req, res) => {
    res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval'");

    res.sendFile(__dirname + '/public/index.html');
  });

// Endpoint pour l'exemple.
app.get('/exemple-api', (req, res) => {
    // Définissez un cookie sur le site cible.
    res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval'");
    res.cookie('monCookie2', 'ValeurDuCookie2', { maxAge: 3600000, httpOnly: true });

    // Répondez avec un message.
    res.send('Réponse du site cible : La requête a été traitée avec succès.');
});

// Démarrer le serveur.
app.listen(port, () => {
    console.log(`Serveur du site cible écoutant sur le port ${port}`);
});
