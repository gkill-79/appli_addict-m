

const express = require('express');
const app = express();
const port = process.env.PORT || 3090;
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const flash = require('connect-flash');

// Import des routes
const routes = require('./routes/index');

// Configuration de la base de données
const db = require('./database/index');

// Configuration de Passport
require('./config/passport.config')(passport);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Configuration des vues
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Utilisation des routes
app.use('/', routes);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});










