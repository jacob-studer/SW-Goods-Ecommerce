const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    saveditems: [Item]
    itemcount: Int
  }

  type Item {
    description: String!
    itemId: String!
    image: String
    link: String
    itemname: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input ItemInput {
    description: String!
    itemId: String!
    image: String
    link: String
    itemname: String!
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveItem(itemdata: itemInput!): User
    removeItem(itemId: ID!): User
  }
`;