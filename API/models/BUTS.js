const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BUTS', {
    ID_BUTS: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    NOM_BUTEURS: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    MINUTE: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'BUTS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_BUTS" },
        ]
      },
    ]
  });
};
