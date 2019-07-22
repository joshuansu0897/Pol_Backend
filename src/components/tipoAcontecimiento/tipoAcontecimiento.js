'use strict'
const services = require('../../services')
const Sequelize = require('sequelize')

const TipoAcontecimiento = services.db.define('TipoAcontecimiento', {
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

module.exports = TipoAcontecimiento