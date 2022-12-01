const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        },
        users: async() => {
            const params = _id ? { _id} : {};
            return User.find(params);
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        login: async (parent, args) => {

        },
        saveBook: async (parent, args) => {

        },
        deleteBook: async (parent, args) => {

        }
    }
}