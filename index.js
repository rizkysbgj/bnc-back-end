require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const { errorHandlers, connectors } = require('./middlewares')
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`)
});

app.use(
  '/bnc-gateway', 
  connectors,
  routes,
  errorHandlers
);
