const db = require('../config/connection');
const { User, itemSchema } = require('../models');
const userSeeds = require('./Users.json');
const itemSeeds = require('./Item.json');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});

db.once('open', async () => {
  await itemSchema.deleteMany({});
  await itemSchema.create(itemSeeds);

  console.log('all done!');
  process.exit(0);
});


