'use strict'
const Cargo = require('./cargo')

const resolvers = {
  Query: {
    getAllCargos: async () => {
      return Cargo.findAll()
    },
    getCargo: async (_, args) => {
      const { id } = args
      return await Cargo.findOne({ where: { id } })
    }
  },
  Mutation: {
    addCargo: async (_, args, context) => {

      if (context.user === null) {
        return null
      }

      return await Cargo.create(args.cargo)
    },
    editCargo: async (_, args, context) => {
      const { id } = args

      if (context.user === null) {
        return null
      }

      await Cargo.update(args.cargo, { where: { id } })
      return await Cargo.findOne({ where: { id } })
    }
  }
}

module.exports = resolvers