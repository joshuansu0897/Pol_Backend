'use strict'
const Partido = require('./partido')

const resolvers = {
  Query: {
    getAllPartidos: async () => {
      return Partido.findAll()
    },
    getPartido: async (_, args) => {
      const { id } = args
      return await Partido.findOne({ where: { id } })
    }
  },
  Mutation: {
    addPartido: async (_, args, context) => {

      if (context.user === null) {
        return null
      }

      return await Partido.create(args.partido)
    },
    editPartido: async (_, args, context) => {
      const { id } = args

      if (context.user === null) {
        return null
      }

      await Partido.update(args.partido, { where: { id } })
      return await Partido.findOne({ where: { id } })
    }
  }
}

module.exports = resolvers