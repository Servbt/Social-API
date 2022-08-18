const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomUsers } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await Thought.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Create empty array to hold the Users
  const Users = [];

  // Loop 20 times -- add students to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const userGen = getRandomUsers(20);

    const userName = getRandomName();
    const email = fullName.split(' ')[0];
    const thoughts = fullName.split(' ')[0];
    const friends = `${userGen}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    Users.push({
      userName,
      email,
      thoughts,
      friends,
    });
  }

  // Add students to the collection and await the results
  await Student.collection.insertMany(students);

  // Add courses to the collection and await the results
  await User.collection.insertOne({
    Users: [...Users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(U);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
