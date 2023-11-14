const typeDefs = `
  type Book {
    bookId: ID
    authors: String[]
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    books: [Book]!
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
