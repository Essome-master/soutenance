const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VISITEURS', {
    ID_VISITEURS: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    ID_EQUIPES: {
      type: DataTypes.STRING(128),
      allowNull: false,
      references: {
        model: 'EQUIPES',
        key: 'ID_EQUIPES'
      }
    }
  }, {
    sequelize,
    tableName: 'VISITEURS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_VISITEURS" },
        ]
      },
      {
        name: "I_FK_VISITEURS_EQUIPES",
        using: "BTREE",
        fields: [
          { name: "ID_EQUIPES" },
        ]
      },
    ]
  });
};
