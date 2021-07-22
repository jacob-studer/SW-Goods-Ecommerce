const { Item, User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    user: async (parent, { email, password }, context) => {
      const user = await User.findOne({_id:context.user._id})
      return user
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {user, token};
    },
    saveItem: async (parent, {itemdata}, context) => {
      //mongo specfic database queries
      const user = await User.findOneAndUpdate(
        {_id:context.user._id},
        {$push:{saveditems:itemdata}},
        {new:true}
      );
      return user;
    },
    removeItem: async (parent, { bookId }, context) => {
      const user = await User.findOneAndUpdate(
        {_id:context.user._id},
        {$pull:{saveditems:{itemId}}},
        {new:true}
      );
      return user;
    },
  },
};

module.exports = resolvers;
