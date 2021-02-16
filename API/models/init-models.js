var DataTypes = require("sequelize").DataTypes;
var _ADMINISTRATEUR = require("./ADMINISTRATEUR");
var _BUTS = require("./BUTS");
var _COMMENTAIRES = require("./COMMENTAIRES");
var _COMMENTER = require("./COMMENTER");
var _COMPTE = require("./COMPTE");
var _EQUIPES = require("./EQUIPES");
var _MATCHS = require("./MATCHS");
var _PARTICIPANTS = require("./PARTICIPANTS");
var _PERSONNE = require("./PERSONNE");
var _POSTER = require("./POSTER");
var _UTILISATEURS = require("./UTILISATEURS");
var _VISITEURS = require("./VISITEURS");
var _VISUALISER = require("./VISUALISER");

function initModels(sequelize) {
  var ADMINISTRATEUR = _ADMINISTRATEUR(sequelize, DataTypes);
  var BUTS = _BUTS(sequelize, DataTypes);
  var COMMENTAIRES = _COMMENTAIRES(sequelize, DataTypes);
  var COMMENTER = _COMMENTER(sequelize, DataTypes);
  var COMPTE = _COMPTE(sequelize, DataTypes);
  var EQUIPES = _EQUIPES(sequelize, DataTypes);
  var MATCHS = _MATCHS(sequelize, DataTypes);
  var PARTICIPANTS = _PARTICIPANTS(sequelize, DataTypes);
  var PERSONNE = _PERSONNE(sequelize, DataTypes);
  var POSTER = _POSTER(sequelize, DataTypes);
  var UTILISATEURS = _UTILISATEURS(sequelize, DataTypes);
  var VISITEURS = _VISITEURS(sequelize, DataTypes);
  var VISUALISER = _VISUALISER(sequelize, DataTypes);

  COMMENTAIRES.belongsToMany(MATCHS, { through: COMMENTER, foreignKey: "ID_COMMENTAIRES", otherKey: "ID_MATCHS" });
  MATCHS.belongsToMany(COMMENTAIRES, { through: COMMENTER, foreignKey: "ID_MATCHS", otherKey: "ID_COMMENTAIRES" });
  VISITEURS.belongsToMany(COMMENTAIRES, { through: POSTER, foreignKey: "ID_VISITEURS", otherKey: "ID_COMMENTAIRES" });
  COMMENTAIRES.belongsToMany(VISITEURS, { through: POSTER, foreignKey: "ID_COMMENTAIRES", otherKey: "ID_VISITEURS" });
  VISITEURS.belongsToMany(MATCHS, { through: VISUALISER, foreignKey: "ID_VISITEURS", otherKey: "ID_MATCHS" });
  MATCHS.belongsToMany(VISITEURS, { through: VISUALISER, foreignKey: "ID_MATCHS", otherKey: "ID_VISITEURS" });
  ADMINISTRATEUR.belongsTo(PERSONNE, { as: "ID_PERSONNE_PERSONNE", foreignKey: "ID_PERSONNE"});
  PERSONNE.hasOne(ADMINISTRATEUR, { as: "ADMINISTRATEUR", foreignKey: "ID_PERSONNE"});
  ADMINISTRATEUR.belongsTo(MATCHS, { as: "ID_MATCHS_MATCH", foreignKey: "ID_MATCHS"});
  MATCHS.hasMany(ADMINISTRATEUR, { as: "ADMINISTRATEURs", foreignKey: "ID_MATCHS"});
  ADMINISTRATEUR.belongsTo(COMPTE, { as: "ID_COMPTE_COMPTE", foreignKey: "ID_COMPTE"});
  COMPTE.hasMany(ADMINISTRATEUR, { as: "ADMINISTRATEURs", foreignKey: "ID_COMPTE"});
  ADMINISTRATEUR.belongsTo(EQUIPES, { as: "ID_EQUIPES_EQUIPE", foreignKey: "ID_EQUIPES"});
  EQUIPES.hasMany(ADMINISTRATEUR, { as: "ADMINISTRATEURs", foreignKey: "ID_EQUIPES"});
  COMMENTER.belongsTo(COMMENTAIRES, { as: "ID_COMMENTAIRES_COMMENTAIRE", foreignKey: "ID_COMMENTAIRES"});
  COMMENTAIRES.hasMany(COMMENTER, { as: "COMMENTERs", foreignKey: "ID_COMMENTAIRES"});
  COMMENTER.belongsTo(MATCHS, { as: "ID_MATCHS_MATCH", foreignKey: "ID_MATCHS"});
  MATCHS.hasMany(COMMENTER, { as: "COMMENTERs", foreignKey: "ID_MATCHS"});
  COMPTE.belongsTo(UTILISATEURS, { as: "ID_PERSONNE_UTILISATEUR", foreignKey: "ID_PERSONNE"});
  UTILISATEURS.hasMany(COMPTE, { as: "COMPTEs", foreignKey: "ID_PERSONNE"});
  EQUIPES.belongsTo(PARTICIPANTS, { as: "ID_PERSONNE_PARTICIPANT", foreignKey: "ID_PERSONNE"});
  PARTICIPANTS.hasMany(EQUIPES, { as: "EQUIPEs", foreignKey: "ID_PERSONNE"});
  MATCHS.belongsTo(EQUIPES, { as: "ID_EQUIPES_EQUIPE", foreignKey: "ID_EQUIPES"});
  EQUIPES.hasMany(MATCHS, { as: "MATCHes", foreignKey: "ID_EQUIPES"});
  MATCHS.belongsTo(BUTS, { as: "ID_BUTS_BUT", foreignKey: "ID_BUTS"});
  BUTS.hasMany(MATCHS, { as: "MATCHes", foreignKey: "ID_BUTS"});
  PARTICIPANTS.belongsTo(PERSONNE, { as: "ID_PERSONNE_PERSONNE", foreignKey: "ID_PERSONNE"});
  PERSONNE.hasOne(PARTICIPANTS, { as: "PARTICIPANT", foreignKey: "ID_PERSONNE"});
  PARTICIPANTS.belongsTo(BUTS, { as: "ID_BUTS_BUT", foreignKey: "ID_BUTS"});
  BUTS.hasMany(PARTICIPANTS, { as: "PARTICIPANTs", foreignKey: "ID_BUTS"});
  POSTER.belongsTo(VISITEURS, { as: "ID_VISITEURS_VISITEUR", foreignKey: "ID_VISITEURS"});
  VISITEURS.hasMany(POSTER, { as: "POSTERs", foreignKey: "ID_VISITEURS"});
  POSTER.belongsTo(COMMENTAIRES, { as: "ID_COMMENTAIRES_COMMENTAIRE", foreignKey: "ID_COMMENTAIRES"});
  COMMENTAIRES.hasMany(POSTER, { as: "POSTERs", foreignKey: "ID_COMMENTAIRES"});
  UTILISATEURS.belongsTo(PERSONNE, { as: "id_personne_PERSONNE", foreignKey: "id_personne"});
  PERSONNE.hasOne(UTILISATEURS, { as: "UTILISATEUR", foreignKey: "id_personne"});
  VISITEURS.belongsTo(EQUIPES, { as: "ID_EQUIPES_EQUIPE", foreignKey: "ID_EQUIPES"});
  EQUIPES.hasMany(VISITEURS, { as: "VISITEURs", foreignKey: "ID_EQUIPES"});
  VISUALISER.belongsTo(VISITEURS, { as: "ID_VISITEURS_VISITEUR", foreignKey: "ID_VISITEURS"});
  VISITEURS.hasMany(VISUALISER, { as: "VISUALISERs", foreignKey: "ID_VISITEURS"});
  VISUALISER.belongsTo(MATCHS, { as: "ID_MATCHS_MATCH", foreignKey: "ID_MATCHS"});
  MATCHS.hasMany(VISUALISER, { as: "VISUALISERs", foreignKey: "ID_MATCHS"});

  return {
    ADMINISTRATEUR,
    BUTS,
    COMMENTAIRES,
    COMMENTER,
    COMPTE,
    EQUIPES,
    MATCHS,
    PARTICIPANTS,
    PERSONNE,
    POSTER,
    UTILISATEURS,
    VISITEURS,
    VISUALISER,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
