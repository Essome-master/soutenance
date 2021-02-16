let jwt = require('jsonwebtoken');


const JWT_SIGN_SECRET ='1pKJHVIYU19k9t65687p8jftrcdukurs87657sY6BD8o98nuy7t6vtr087nopn';

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            id_personne:userData.id,
            isadmin: userData.isadmin
        },
        JWT_SIGN_SECRET
        ({
            expiresIn: '1h'
        }))
    }
}