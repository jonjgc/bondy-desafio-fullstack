import gql from 'graphql-tag'
import { DocumentNode } from 'graphql' 

const mutation: DocumentNode = gql`
  type Mutation {
    mutationTest(test: Boolean): Boolean
    login(email: String!, password: String!): User
  }
`
export default mutation