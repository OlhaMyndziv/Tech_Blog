const { User } = require('../models');

const userData = [{
        username: 'Olha',
        password: 'olha'

    },
    {
        username: 'Myndziv',
        password: 'myndziv'
    },
    {
        username: 'Vova',
        password: 'vova'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;