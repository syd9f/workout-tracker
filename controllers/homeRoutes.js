// get reqs
const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  // Get all users, sorted by name
  const userData = await User.findAll({
    // attributes: { exclude: ['password'] },
    // order: [['name', 'ASC']],
  });

  // Serialize user data so templates can read it
  const users = userData.map((User) => User.get({ plain: true }));

  // Pass serialized data and session flag into template
    res.render('homepage', { 
      User, 
      logged_in: req.session.logged_in 
    });

    // Use withAuth middleware to prevent access to route
router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      //include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });

  // Pass serialized data into Handlebars.js template
  res.render('login', { users });
  
});

module.exports = router;