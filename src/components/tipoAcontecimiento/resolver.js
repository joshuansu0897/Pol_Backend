'use strict'
const TipoAcontecimiento = require('./tipoAcontecimiento')

const resolvers = {
  Query: {
    getAllTipoAcontecimientos: async () => {
      return TipoAcontecimiento.findAll()
    },
    getTipoAcontecimiento: async (_, args) => {
      const { id } = args
      return await TipoAcontecimiento.findOne({ where: { id } })
    }
  },
  Mutation: {
    addTipoAcontecimiento: async (_, args, context) => {

      if (context.user === null) {
        return null
      }

      return await TipoAcontecimiento.create(args.tipoAcontecimiento)
    },
    editTipoAcontecimiento: async (_, args, context) => {
      const { id } = args

      if (context.user === null) {
        return null
      }

      await TipoAcontecimiento.update(args.tipoAcontecimiento, { where: { id } })
      return await TipoAcontecimiento.findOne({ where: { id } })
    }
  }
}

module.exports = resolvers