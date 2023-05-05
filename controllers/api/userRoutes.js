const router = require('express').Router();
const { User } = require('../../models');


// Login
router.post('/login', async (req, res) => {
  console.log("HERE");
  try {
    console.log("HERE");
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log("HERE!!!!!!");
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    console.log("HERE:)");
    const validPassword = await dbUserData.checkPassword(req.body.password);
    console.log("HERE!!!!!!?????");
    if (!validPassword) {
      console.log("here " + req.body.password);
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
