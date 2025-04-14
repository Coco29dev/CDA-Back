const express = require('express');
const cors = require('cors');
const blagueRoute = require('./routes/v1/blagueRoute');
const sequelize = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/blagues');


sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronisée');
}).catch((error) => {
  console.error('Echec synchronisation database', error);
});


module.exports = app;