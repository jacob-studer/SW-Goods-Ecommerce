const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {user, token};
    },
  },
};

module.exports = resolvers;
