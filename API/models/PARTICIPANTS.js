const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PARTICIPANTS', {
    ID_PERSONNE: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PERSONNE',
        key: 'ID_PERSONNE'
      }
    },
    ID_BUTS: {
      type: DataTypes.STRING(128),
      allowNull: false,
      references: {
        model: 'BUTS',
        key: 'ID_BUTS'
      }
    },
    NOMBRE_DE_BUTS: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'PARTICIPANTS',
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
        name: "I_FK_PARTICIPANTS_BUTS",
        using: "BTREE",
        fields: [
          { name: "ID_BUTS" },
        ]
      },
    ]
  });
};
