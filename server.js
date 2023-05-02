const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

app.get('/paths', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening at http://localhost:${PORT}'));
  });

