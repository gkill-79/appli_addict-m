

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('HeidiSQL', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion OK !');
  })
  .catch((err) => {
    console.error('Erreur de connexion :', err);
  });

module.exports = sequelize;


















