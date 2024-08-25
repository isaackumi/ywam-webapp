const express = require('express');
const router = express.Router();
const Message = require('../models/messageModel');

router.post('/contactMessage', async function(req, res) {
  const data = req.body;
  //console.log(data);
  var message = new Message({
    fullname: data.fullname,
    email: data.email,
    message: data.message,
    phone: data.phone

  });

  await message.save()
    .then(function(result) {

      res.redirect('/contact')
    }).catch(function(err) {
      res.redirect('/contact')
    });

});





router.get('/post/:id', async (req, res) => {
  const post = await Comment.findById(req.params.id)
  res.render('single-post', {
    post
  })
});


module.exports = router;
