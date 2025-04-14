const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const blagueRoute = require('./routes/v1/blagueRoute');
const sequelize = require('./config/database');

const app = express();

app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/blagues', blagueRoute);


sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronisée');
}).catch((error) => {
  console.error('Echec synchronisation database', error);
});


module.exports = app;