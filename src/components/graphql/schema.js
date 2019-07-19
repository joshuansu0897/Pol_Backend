const { makeExecutableSchema } = require("graphql-tools")

const politico = require('../politico')

// root query and mutation
const rootQuery = `
  type Query {
    _ : Boolean
  }
  type Mutation {
    _ : Boolean
  }
`

// merge schemas
const typeDefs = [
  rootQuery,
  politico.schema
]

// merge resolvers
const resolvers = Object.assign(
  politico.resolver
)

// connect schemas and resolvers and make executable schema
const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
