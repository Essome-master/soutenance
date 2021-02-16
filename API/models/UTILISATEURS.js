const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UTILISATEURS', {
    id_personne: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PERSONNE',
        key: 'ID_PERSONNE'
      }
    },
    nom: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    adresse: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isadmin: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UTILISATEURS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_personne" },
        ]
      },
    ]
  });
};
