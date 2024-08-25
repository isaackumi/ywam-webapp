// const express = require('express');
// const path = require('path');
// const router = express.Router();
// const multer = require('multer');
// const fs = require('fs-extra')
// const Post = require('../models/postModel');
// const Comment = require('../models/commentModel');
// const Event = require('../models/eventModel');
// const PageVisit = require('../models/pageVisitModel');
//
//
// const upload = multer({
//   dest: 'uploads/'
// })
//
//
//
// router.post("/post", async (req, res) => {
//   const data = req.body;
//   //console.log(data);
//   //console.log(req.files.blogimage)
//   let file_to_be_uploaded = req.files.blogimage;
//   console.log();
//
//   // req.files.blogimage.mv(path.join('/home/hilltop/www/hilltop-Node/public/img/uploads/') + Date.now() + file_to_be_uploaded.name.replace(/\s+/g, ''), function(err) {
//   //   if (err)
//   //     return res.status(500).send(err);
//   //
//   // });
//
//   // fstream = fs.createWriteStream(__dirname + '/public/img/uploads/' + filename);
//   // var dirname = path.join( 'uploads/' + filename);
//   // file.pipe(fstream);
//
//   var post = new Post({
//     title: data.title,
//     subtitle: data.subtitle,
//     category: data.category,
//     message: data.message,
//     photo: Date.now() + file_to_be_uploaded.name.replace(/\s+/g, '')
//   });
//
//   post.save()
//     .then(data => res.redirect('/admin'))
//     .catch(err => console.error('Post error', err))
//
// });
//
//
//
//
//
// router.get('/single-post/:id', async (req, res) => {
//   // res.render('blog',{data})
//   const comment = await Comment.find().sort({createdAt:-1}).limit(3);
//   const count = await Comment.find().countDocuments();
//   const newEvent = await Event.find({}).sort({
//     createdAt: -1
//   }).limit(1);
//
//   //console.log(comment)
//   await Post.findById(req.params.id).limit(4)
//     .sort({
//       createdAt: -1
//     })
//     .exec()
//     .then(data => res.render('single-post', {
//       data: data,
//       comment: comment,
//       count: count,
//       newEvent: newEvent,
//       title: 'Single-Post',
//       layout: false
//     }))
//     .catch(err => console.log('Error occured - single-post'))
//
//
//
// });
//
//
//
// router.get('/blog', async (req, res) => {
//   // res.render('blog',{data})
//
//
//   // Page visit
//   const currentYear = new Date().getFullYear();
//   // Months starts from zero
//   const currentMonth = new Date().getMonth();
//   const timeQuery = String(currentMonth)+'-'+String(currentYear);
//   const pageVisit = await PageVisit.findOne({timeOfYear:timeQuery, typeOfData:'blogVisit'});
//   //console.log(pageVisit);
//   if (pageVisit !== null) {
//     pageVisit.number++
//     pageVisit.save()
//   } else {
//   var page = new PageVisit({timeOfYear:timeQuery, typeOfData:'blogVisit', number:1})
//   page.save()
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   }
//   const newEvent = await Event.find({}).sort({
//     createdAt: -1
//   }).limit(1);
//
//   await Post.find({$where: "this.message.length > 40"})
//     .sort({
//       createdAt: -1
//     }).limit(10)
//     .exec()
//     .then(data => res.render('blog', {
//       data,
//       newEvent,
//       title: 'Blog',
//       layout: false
//     }))
//     .catch(err => console.log('Error occured'))
//
//
//
// });
//
// router.get('/', async (req, res) => {
//
//   const newEvent = await Event.find({}).sort({
//     createdAt: -1
//   }).limit(1);
//
// // Page visit
// const currentYear = new Date().getFullYear();
// // Months starts from zero
// const currentMonth = new Date().getMonth();
// const timeQuery = String(currentMonth)+'-'+String(currentYear);
// const pageVisit = await PageVisit.findOne({timeOfYear:timeQuery, typeOfData:'pageVisit'});
// //console.log(pageVisit);
// if (pageVisit !== null) {
//   pageVisit.number++
//   pageVisit.save()
// } else {
// var page = new PageVisit({timeOfYear:timeQuery, typeOfData:'pageVisit', number:1})
// page.save()
// .then(data => console.log(data))
// .catch(err => console.log(err))
// }
//
//
//   await Post.find().limit(4)
//     .exec()
//     .then(data => res.render('home', {
//       data,
//       newEvent,
//       title: 'Home',
//       layout: false
//     }))
//     .catch(err => console.log('Error occured'))
//
//
//
// });
//
//
// router.get('/admin', async (req, res) => {
//   const data = await Post.find().sort({
//     createdAt: -1
//   })
//   const count = await Post.find().countDocuments();
//
//   // Page visit
//   const currentYear = new Date().getFullYear();
//   // Months starts from zero
//   const currentMonth = new Date().getMonth();
//   const timeQuery = String(currentMonth)+'-'+String(currentYear);
//   const visitors = await PageVisit.find({timeOfYear:timeQuery})
//   const clickThrough = await PageVisit.findOne({typeOfData:'clickThrough'})
//   const blogVisit = await PageVisit.findOne({typeOfData:'blogVisit'})
//   const pagevisit = await PageVisit.findOne({typeOfData:'pageVisit'})
//
//
//   //console.log(pagevisit);
//
//   res.render('dashboard/index', {
//     data: data,
//     title: 'Admin',
//     count:count,
//     pageCount: visitors,
//     blogVisit:blogVisit,
//     clickThrough:clickThrough,
//     pagevisit:pagevisit,
//     layout: false
//   })
//
//
//
// });
//
//
// router.get('/delete/:id', async (req, res) => {
//   const id = req.params.id
//
//   await Post.deleteOne({
//       _id: id
//     })
//     .exec()
//     .then(data => res.redirect('/admin'))
//     .catch(err => res.render('dashboard/index', {
//       error: err,
//       layout: false
//     }))
//
//
// });
//
//
//
// router.get('/update/:id', async (req, res) => {
//   const id = req.params.id
//   const single = await Post.findById(req.params.id)
//   //console.log(single)
//   res.render('dashboard/update', {
//     id: id,
//     single: single,
//     layout: false
//   });
// });
//
//
//
// router.post('/update', async (req, res) => {
//   //res.json(req.body)
//   const id = req.body.id
//   //console.log(id);
//
//   await Post.updateOne({_id:id},{$set:{
//     title:req.body.title,
//     subtitle:req.body.subtitle,
//     category:req.body.category,
//     message: req.body.message,
//     photo: req.body.photo
//   }})
//   .exec()
//   .then( data => res.redirect('/admin'))
//   .catch(err => console.log(err))
//
// })
//
//
//
//
//
//
// module.exports = router;
