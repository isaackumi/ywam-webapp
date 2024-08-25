const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');





router.post('/event', async function(req, res) {
  const data = req.body;
  //console.log(data)

  var event = new Event({
    name: data.event_name,
    description: data.description,
    date: data.date,
    time: data.time

  });
  await event.save()
    .then(function(result) {
      //console.log(result);
      //return res.send(result);
      res.render('dashboard/event', {
        layout: false
      })
    }).catch(function(err) {
      console.log(err);
    });

});


router.get('/event', async () => {
  await Event.find()
    .sort({
      createdAt: -1
    })
    .exec()
    .then(data => console.log(data))
    .catch(err => console.error(`Error getting events : ${err}`))
});


module.exports = router;
