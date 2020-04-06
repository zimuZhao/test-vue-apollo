import { makeExecutableSchema } from 'graphql-tools'
import faker from 'faker'

const typeDefs = [
  `
  type User {
    city: String
    name: String
    email: String
    phone: String
  }

  type Query {
    curUser: User
  }

  schema {
    query: Query
  }
`]

const resolvers = {
  Query: {
    curUser (root, args, context) {
      return {
        city: faker.address.city(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumberFormat()
      }
    }
  }
}

const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default jsSchema
