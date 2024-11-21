// Modules

const names = require("../3-modules/names.js");
const { helloUser, welcomeUser } = require("./function.js");
const data = require('../3-modules/array.js');

helloUser(names.johnton);
helloUser(names.brick);
welcomeUser(data.array[0]);
welcomeUser(`i am ${data.userData.age} years old`)



