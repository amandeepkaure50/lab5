var express = require('express');
var router = express.Router();

// link to the account model for CRUD operations
var Account = require('../models/account');

// auth check
function isLoggedIn(req, res, next) {
   if (req.isAuthenticated()) {
      return next(); // user is logged, so call the next function
   }
  else{
     res.redirect('/'); // not logged in so redirect to home
  }


   /* GET users listing. */
   router.get('/', isLoggedIn, function(req, res, next) {
      if (err) {
         console.log(err);
         res.end(err);
      }
	   else {
      res.render('/users', {
         users: Username,
         title: 'Users',
          user: req.user
     });
        }
    }); 
});
module.exports = router;
