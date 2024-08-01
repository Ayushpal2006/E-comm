var userModel = require('../Models/user-model')
var jwt = require('jsonwebtoken');

async function isLoggedIn(req, res, next) {
    if(!req.cookie.token){
        req.flash('error', 'Please log in to view this page');
        return res.redirect('/');
    }

    let decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
    if(!decodedToken){
        req.flash('error', 'Token is invalid');
        return res.redirect('/');
    }
    let user = await userModel
    .findOne({email : decodedToken.email})
    .select('-passWord')


    req.user = user;
    next();


}

module.exports.isLoggedIn = isLoggedIn;