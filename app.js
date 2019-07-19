const app = require('express')()
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')

const schema = require('./src/components/graphql').schema

app.use(bodyParser.json())
app.use(require('./src/middleware').jwt)

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  }),
)

module.exports = app