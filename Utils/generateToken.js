var jwt = require('jsonwebtoken');
function generateToken(users) {
    var token = jwt.sign({email:users, id: users._id },process.env.JWT_KEY)
    return token;
}
module.exports.generateToken = generateToken;