const express = require('express');
const router = express.Router();
// const PageVisit = require('../models/pageVisitModel');

router.get('/',(req, res) => {
    res.render('site-under-construction',{layout:false});
});

// router.get('/',(req, res) => {
//     res.render('index',{layout:false});
// });

router.get('/about',(req, res) => {
    res.render('about',{layout:false});
});

router.get('/media-team',(req, res) => {
    res.render('media-team',{layout:false});
});

router.get('/gallery',(req, res) => {
    res.render('gallery',{layout:false});
});

router.get('/contact',(req, res) => {
    res.render('contact',{layout:false});
});


//  our senior pastor
router.get('/senior-pastor',(req, res) => {
    res.render('founding-father',{layout:false});
});

//  our vission and mission
router.get('/vision-mission',(req, res) => {
    res.render('vision-mission',{layout:false});
});

router.get('/core-values',(req, res) => {
    res.render('core-values',{layout:false});
});

router.get('/daily-confession',(req, res) => {
    res.render('daily-confession',{layout:false});
});





// router.get('/admin-login',(req, res) => {
//     res.render('signin',{layout:false});
// });

// router.get('/admin-register',(req, res) => {
//     res.render('signup',{layout:false});
// });





module.exports=router
