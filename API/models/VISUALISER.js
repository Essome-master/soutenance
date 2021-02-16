const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VISUALISER', {
    ID_VISITEURS: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'VISITEURS',
        key: 'ID_VISITEURS'
      }
    },
    ID_MATCHS: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MATCHS',
        key: 'ID_MATCHS'
      }
    }
  }, {
    sequelize,
    tableName: 'VISUALISER',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_VISITEURS" },
          { name: "ID_MATCHS" },
        ]
      },
      {
        name: "I_FK_VISUALISER_VISITEURS",
        using: "BTREE",
        fields: [
          { name: "ID_VISITEURS" },
        ]
      },
      {
        name: "I_FK_VISUALISER_MATCH",
        using: "BTREE",
        fields: [
          { name: "ID_MATCHS" },
        ]
      },
    ]
  });
};
