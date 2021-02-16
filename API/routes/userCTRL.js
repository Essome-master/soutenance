// imports

let bcrypt = require('bcrypt');
let jwtUtils = require('../utils/jwt.utils');


//routes

module.exports ={
    register: function(req, res){

        let id_personne = req.body.id_personne;
        let nom = req.body.nom
        let prenom = req.body.prenom
        let adresse = req.body.adresse
        let password = req.body.password
        let isadmin= req.body.isadmin

        if(id_personne == null || nom == null|| prenom == null|| adresse == null|| password ==null|| isadmin == null){
            return res.status(400).json({'erreur': 'éléments manquants'});
        }

        models.UTILISATEURS.findOne({
            attributes:['email'],
            where: {email: email}
        })
        .then(function(userFound){
            if(!userFound) {

                bcrypt.hash(password, 5, function(err, bcryptedPassword){
                    let newUser = models.UTILISATEURS.create({
                        id_personne: id_personne,
                        nom: nom,
                        prenom: prenom,
                        adreese: adresse,
                        password: bcryptedPassword,
                        isadmin: 0
                    })
                    .then(function(newUser) {
                        return res.status(201).json({
                            'id_personne': newUser.id
                        })
                    })
                    .catch(function(err) {
                        return res.status(500).json({'erreur': 'cannot add user'});
                      })
                })

            }else{
                return res.status(409).json({'erreur': 'user exixte déjà'});
            }

        })
        .catch(function(err){
            return res.status(500).json({ 'erreur': 'incapable de verifier user'});
        })


    },
    login: function(req,res){
        // paramètres

        let email = req.body.email;
        let password = req.body.password;

        if(email == null || password == null){
            return res.status(400).json({'erreur': 'paramètres manquants'});
        }


        //verification des informations

        models.UTILISATEURS.findOne({
            attributes: ['email'],
            where: {email: email}
        })
        .then(function(userFOund){
            if(userFound) {
                bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
                    if(resBycrypt) {
                        return res.status(200).json({
                            'id_personne': userFound.id,
                            'token': jwtUtils.generateTokenforUser(userFound)
                            
                        });
                    }else {
                        return res.status(403).json({'eror': 'invalid password'});
                    }
                })
            }else {
                return res.status(404).json({ 'error': 'user not exist in DB'});
            }

        })
        .catch(function(err) {
            return res.status(500).json({'error': 'unable to verify user'});
        })

    },
}