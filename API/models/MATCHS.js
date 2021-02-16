const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MATCHS', {
    ID_MATCHS: {
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
    },
    ID_BUTS: {
      type: DataTypes.STRING(128),
      allowNull: true,
      references: {
        model: 'BUTS',
        key: 'ID_BUTS'
      }
    },
    'EQUIPE_CONCERNÉES': {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    HEURE_DE_DEBUT: {
      type: DataTypes.TIME,
      allowNull: false
    },
    HEURE_DE_FIN: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MATCHS',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_MATCHS" },
        ]
      },
      {
        name: "I_FK_MATCHS_EQUIPES",
        using: "BTREE",
        fields: [
          { name: "ID_EQUIPES" },
        ]
      },
      {
        name: "I_FK_MATCHS_BUTS",
        using: "BTREE",
        fields: [
          { name: "ID_BUTS" },
        ]
      },
    ]
  });
};
