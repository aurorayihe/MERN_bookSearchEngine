const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID!
        authors: { String }
        description: String!
        bookId: String!
        image: String,
        link: String,
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Query {
        books: [Book]
        users(_id: String): [User]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        login(): User
        saveBook(_id: String!): User
        deleteBook(_id: String!): User
    }
`