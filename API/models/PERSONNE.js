const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PERSONNE', {
    ID_PERSONNE: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
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
    }
  }, {
    sequelize,
    tableName: 'PERSONNE',
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
    ]
  });
};
