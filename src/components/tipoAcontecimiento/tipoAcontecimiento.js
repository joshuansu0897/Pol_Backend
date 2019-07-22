'use strict'
module.exports = (sequelize, DataTypes) => {
  const TipoAcontecimiento = sequelize.define('TipoAcontecimiento', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Detalles: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  })

  TipoAcontecimiento.associate = (models) => {
    // TipoAcontecimiento.hasMany(models.User, { as: 'employes' })
  }

  return TipoAcontecimiento
}