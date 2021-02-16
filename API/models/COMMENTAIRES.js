const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMMENTAIRES', {
    ID_COMMENTAIRES: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    NOM_POSTEUR: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    PHOTO_POSTEUR: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    DATE_POST: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    TEXTE: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'COMMENTAIRES',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_COMMENTAIRES" },
        ]
      },
    ]
  });
};
