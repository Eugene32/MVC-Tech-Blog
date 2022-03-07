const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const helmet = require("helmet"); //added to secure express app

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config(); //Added so that secret key will not be visible for accessing
app.use(helmet()); //invoke helmet function for security

const sess = {
  secret: process.env.secret, //secret key will refer to .env file.
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


// Informs Express.js to use the handlebars template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port localhost:${PORT}`));
});
