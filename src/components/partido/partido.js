'use strict'
const services = require('../../services')
const Sequelize = require('sequelize')

const Partido = services.db.define('Partido', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Alias: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Detalles: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  FechaFundacion: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

services.db.sync()

module.exports = Partido