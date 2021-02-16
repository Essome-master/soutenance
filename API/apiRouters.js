// imports

let express = require('express');
let userCTRL = require('./routes/userCTRL');

//router

exports.router = (function(){
    let apiRouter = express.Router();

    apiRouter.route('/users/register/').post(userCTRL.register);
    apiRouter.route('/users/login/').post(userCTRL.login);

    return apiRouter;
})();