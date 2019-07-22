'use static'
const { makeExecutableSchema } = require("graphql-tools")

const politico = require('../politico')
const partido = require('../partido')
const cargo = require('../cargo')

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
  politico.schema,
  partido.schema,
  cargo.schema
]

// merge resolvers
const resolvers = {
  Query: {
    ...politico.resolver.Query,
    ...partido.resolver.Query,
    ...cargo.resolver.Query,
  },
  Mutation: {
    ...politico.resolver.Mutation,
    ...partido.resolver.Mutation,
    ...cargo.resolver.Mutation,
  }
}

// connect schemas with resolvers and make executable schema
const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema