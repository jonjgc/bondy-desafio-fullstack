import gql from 'graphql-tag'
import { DocumentNode } from 'graphql' 

const query: DocumentNode = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Query {
    queryTest: Boolean
  }
`

export default query