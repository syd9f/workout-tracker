const router = require('express').Router();
const { Schedule } = require('../../models');

// GET whole schedule for homepage
router.get('/', async (req, res) => {
    try {
      const dbScheduleData = await Schedule.findAll({
        include: [
          {
            model: Schedule,
            attributes: ['title'],
          },
        ],
      });
  
      const schedule = dbScheduleData.map((schedule) =>
       schedule.get({ plain: true })
      );
  
      req.session.save(() => {
        req.session.scheduleId = dbScheduleData.id
  
        res.render('homepage', {
          schedule
        });
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
    // try {
    const dbScheduleData = await Schedule.create({
    title: req.body.title,
    });

    req.session.save(() => {
    req.session.loggedIn = true;

    res.status(200).json(dbScheduleData);
    });
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});

module.exports = router;