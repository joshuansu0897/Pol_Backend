'use strict'
const services = require('../../services')
const Sequelize = require('sequelize')

const Cargo = services.db.define('Cargo', {
  Id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Detalles: {
    type: Sequelize.TEXT,
    allowNull: false
  },
})

services.db.sync()

module.exports = Cargo