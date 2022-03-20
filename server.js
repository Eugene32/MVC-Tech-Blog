const express = require('express');
const app = express();
const path = require('path');

const session = require('express-session');
const exphbs = require('express-handlebars');

// Initialize sequelize for databas
const sequelize = require('./config/connection');
// Initialize connection session.
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Routing is taken from controller sub-directory
const routes = require('./controllers');

// Imports helper function from utils directory
const helpers = require('./utils/helper');



//Added so that secret key will not be visible for accessing
require('dotenv').config(); 

// PORT number to be taken from .env file
const PORT = process.env.PORT;


const helmet = require("helmet"); //added to secure express app
app.use(helmet()); //invoke helmet function for security of express


// Session configuration
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

// Informs Express.js to use the handlebars as display engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Handlebars helpers
const hbs = exphbs.create({ helpers });

// Configure express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup the public sub-directory as always ready for accessing.
app.use(express.static(path.join(__dirname, 'public')));

// Express to use routes
app.use(routes);

// Start database and server to start listening at PORT (number @ .env file)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port localhost:${PORT}`));
});
