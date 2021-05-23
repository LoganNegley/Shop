const bcrypt = require("bcryptjs");

const users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "test",
    email: "test@test.com",
    password: bcrypt.hashSync("123456", 10),
    // isAdmin:false     false by default
  },

  {
    name: "testUser",
    email: "testUser@testUser.com",
    password: bcrypt.hashSync("123456", 10),
    // isAdmin:false    fasle by default
  },
];

module.exports = users;
