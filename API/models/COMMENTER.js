const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMMENTER', {
    ID_COMMENTAIRES: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'COMMENTAIRES',
        key: 'ID_COMMENTAIRES'
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
    tableName: 'COMMENTER',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_COMMENTAIRES" },
          { name: "ID_MATCHS" },
        ]
      },
      {
        name: "I_FK_COMMENTER_COMMENTAIRES",
        using: "BTREE",
        fields: [
          { name: "ID_COMMENTAIRES" },
        ]
      },
      {
        name: "I_FK_COMMENTER_MATCHS",
        using: "BTREE",
        fields: [
          { name: "ID_MATCHS" },
        ]
      },
    ]
  });
};
