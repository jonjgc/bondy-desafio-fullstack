import gql from 'graphql-tag'

export default gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Query {
    queryTest: Boolean
  }
`
