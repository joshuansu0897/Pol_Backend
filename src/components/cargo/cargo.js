'use strict'
module.exports = (sequelize, DataTypes) => {
  const Cargo = sequelize.define('Cargo', {
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

  Cargo.associate = (models) => {
    // Cargo.hasMany(models.User, { as: 'employes' })
  }

  return Cargo
}