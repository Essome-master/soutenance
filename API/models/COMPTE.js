const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMPTE', {
    ID_COMPTE: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    ID_PERSONNE: {
      type: DataTypes.STRING(128),
      allowNull: false,
      references: {
        model: 'UTILISATEURS',
        key: 'id_personne'
      }
    },
    INFO_PROPRIETAIRE: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    DATE_CREATION: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    PHOTO: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'COMPTE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_COMPTE" },
        ]
      },
      {
        name: "I_FK_COMPTE_UTILISATEURS",
        using: "BTREE",
        fields: [
          { name: "ID_PERSONNE" },
        ]
      },
    ]
  });
};
