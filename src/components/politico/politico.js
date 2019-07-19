const services = require('../../services')
const Sequelize = require('sequelize')

const Politico = services.db.define('Politico', {
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
  FechaNacimiento: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

services.db.sync({force: true})

module.exports = Politico