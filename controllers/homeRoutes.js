// get reqs
const router = require('express').Router();
const User = require('../models/User');
const Schedule = require('../models/Schedule');
const withAuth = require('../utils/auth');



// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  // Find the logged in user based on the session ID
  const userData = await User.findByPk(req.session.userId, {
    attributes: { exclude: ['password'] },
  });

  console.log(userData);
  const user = userData.get({ plain: true });

  // //  Find scheduled exercises
  // const scheduleData = await Schedule.findByPk(req.session.scheduleId, {
  //   include: [
  //     {
  //       model: Schedule,
  //       attributes: ['title'],
  //     },
  //   ],
  // });

  // console.log(scheduleData);
  // const schedule = scheduleData.get({ plain: true });

  // get Muscle Wiki API data 
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
    exercises: workoutData,
  });
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