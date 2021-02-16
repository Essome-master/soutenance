const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EQUIPES', {
    ID_EQUIPES: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    ID_PERSONNE: {
      type: DataTypes.STRING(128),
      allowNull: true,
      references: {
        model: 'PARTICIPANTS',
        key: 'ID_PERSONNE'
      }
    },
    NOM: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'EQUIPES',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_EQUIPES" },
        ]
      },
      {
        name: "I_FK_EQUIPES_PARTICIPANTS",
        using: "BTREE",
        fields: [
          { name: "ID_PERSONNE" },
        ]
      },
    ]
  });
};
