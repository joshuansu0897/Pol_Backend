'use strict'
const Politico = require('./politico')

const resolvers = {
  Query: {
    getAllPoliticos: async () => {
      return Politico.findAll()
    },
    getPolitico: async (_, args) => {
      const { id } = args
      return await Politico.findOne({ where: { id } })
    }
  },
  Mutation: {
    addPolitico: async (_, args, context) => {

      if (context.user === null) {
        return null
      }

      return await Politico.create(args.politico)
    },
    editPolitico: async (_, args, context) => {
      const { id } = args

      if (context.user === null) {
        return null
      }

      await Politico.update(args.politico, { where: { id } })
      return await Politico.findOne({ where: { id } })
    }
  }
}

module.exports = resolvers