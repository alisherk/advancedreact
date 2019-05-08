const User = require('../models/User');

module.exports.signup = (req, res, next) => {
    //see if a user with the given email exists 
     const email = req.body.email; 
     const password = req.body.password;
    //if a user with email exists, return err
     User.findOne({ email: email }, (err, existingUser) => {
         if (err) throw err; 
         console.log(existingUser)
     })
    //if a user with email does not exist, create and save user record
}