// get reqs
const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');

    // Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  // try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      //include: [{ model: Project }],
    });
    console.log(userData);
    const user = userData.get({ plain: true });


const response = await fetch('https://musclewiki.p.rapidapi.com/exercises', {
  headers: {
    'X-RapidAPI-Key': '067ed42315msh5fbe5b9898134e4p129ad5jsn352fe37e50c4',
		'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
  }
});
const workoutData = await response.json();

console.log(workoutData);
    res.render('homepage', {
      user,
      logged_in: true,
      exercises: workoutData
    });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });  


module.exports = router;