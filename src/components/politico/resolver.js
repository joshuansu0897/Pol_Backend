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
    addPolitico: async (_, args) => {
      console.log(args.politico)
      return await Politico.create(args.politico)
    },
    // editOrder: (_, args) => {
    //   const { id } = args
    //   return fetch(`${HTTP}://${HOST}:${PORT}/api/items/${id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify(args.item),
    //     headers: { 'Content-Type': 'application/json' },
    //   }).then(res => res.json())
    // },
    // deleteOrder: (_, args) => {
    //   const { id } = args
    //   return fetch(`${HTTP}://${HOST}:${PORT}/api/items/${id}`, {
    //     method: 'DELETE'
    //   }).then(res => res.json())
    // },
  }
}

module.exports = resolvers