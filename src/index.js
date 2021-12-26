require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const { errorMiddleware } = require('./middlewares');

const startServer = require('./bin');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  // run `npm run build` at `./client` folder
  // commit and deploy the result `./client/public` folder;

  app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
}

app.use('/auth', routes.auth);

app.use(errorMiddleware);

startServer(app);
