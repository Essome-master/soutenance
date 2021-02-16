const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('POSTER', {
    ID_VISITEURS: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'VISITEURS',
        key: 'ID_VISITEURS'
      }
    },
    ID_COMMENTAIRES: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'COMMENTAIRES',
        key: 'ID_COMMENTAIRES'
      }
    }
  }, {
    sequelize,
    tableName: 'POSTER',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_VISITEURS" },
          { name: "ID_COMMENTAIRES" },
        ]
      },
      {
        name: "I_FK_POSTER_VISITEURS",
        using: "BTREE",
        fields: [
          { name: "ID_VISITEURS" },
        ]
      },
      {
        name: "I_FK_POSTER_COMMENTAIRES",
        using: "BTREE",
        fields: [
          { name: "ID_COMMENTAIRES" },
        ]
      },
    ]
  });
};
