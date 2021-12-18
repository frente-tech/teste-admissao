const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { errorMiddleware } = require('./middlewares');

const startServer = require('./bin');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // Publish React app
  // run `npm run build` at client folder
  // before deploy and commit the result;

  app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
}

app.use('/login', routes.login);

app.use(errorMiddleware);

startServer(app);
