const express = require('express');
const router = express.Router();
const Comment = require('../models/commentModel');






// post comment working
router.post('/comment', async function(req, res) {
  const data = req.body;
  //console.log(data);
  var post = new Comment({
    name: data.name,
    email: data.email,
    message: data.message

  });

  await post.save()
    .then(function(result) {
      //console.log(result);
      //return res.send(result);
      res.redirect('/single-post/:id')
    }).catch(function(err) {
      console.log(err);
    });

});





router.get('/post/:id', async (req, res) => {
  const post = await Comment.findById(req.params.id)
  res.render('single-post', {
    post
  })
});


module.exports = router;
