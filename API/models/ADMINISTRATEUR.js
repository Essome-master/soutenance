const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADMINISTRATEUR', {
    ID_PERSONNE: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PERSONNE',
        key: 'ID_PERSONNE'
      }
    },
    ID_MATCHS: {
      type: DataTypes.STRING(128),
      allowNull: false,
      references: {
        model: 'MATCHS',
        key: 'ID_MATCHS'
      }
    },
    ID_COMPTE: {
      type: DataTypes.STRING(128),
      allowNull: false,
      references: {
        model: 'COMPTE',
        key: 'ID_COMPTE'
      }
    },
    ID_EQUIPES: {
      type: DataTypes.STRING(128),
      allowNull: false,
      references: {
        model: 'EQUIPES',
        key: 'ID_EQUIPES'
      }
    },
    NOM: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    PRENOM: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    ADRESSE: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isadmin: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ADMINISTRATEUR',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_PERSONNE" },
        ]
      },
      {
        name: "I_FK_ADMINISTRATEUR_MATCHS",
        using: "BTREE",
        fields: [
          { name: "ID_MATCHS" },
        ]
      },
      {
        name: "I_FK_ADMINISTRATEUR_COMPTE",
        using: "BTREE",
        fields: [
          { name: "ID_COMPTE" },
        ]
      },
      {
        name: "I_FK_ADMINISTRATEUR_EQUIPES",
        using: "BTREE",
        fields: [
          { name: "ID_EQUIPES" },
        ]
      },
    ]
  });
};
