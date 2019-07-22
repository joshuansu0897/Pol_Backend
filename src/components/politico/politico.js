'use strict'
module.exports = (sequelize, DataTypes) => {
  const Politico = sequelize.define('Politico', {
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
    FechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })

  Politico.associate = (models) => {
    // Politico.hasMany(models.User, { as: 'employes' })
  }

  return Politico
}