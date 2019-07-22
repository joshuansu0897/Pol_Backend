'use strict'
module.exports = (sequelize, DataTypes) => {
  const Partido = sequelize.define('Partido', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Alias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Detalles: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    FechaFundacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })

  Partido.associate = (models) => {
    // Partido.hasMany(models.User, { as: 'employes' })
  }

  return Partido
}