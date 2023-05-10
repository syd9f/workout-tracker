const router = require('express').Router();
const { Schedule } = require('../../models');

// router.post('/schedule', (req, res) => {

// });

router.post('/', async (req, res) => {
    // try {
    const dbSchedData = await Schedule.create({
    title: req.body.title,
    });

    req.session.save(() => {
    req.session.loggedIn = true;

    res.status(200).json(dbSchedData);
    });
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});

module.exports = router;