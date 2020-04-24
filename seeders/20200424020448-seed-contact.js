'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Yeison',
        lastname: 'Tapia',
        phone: '123456',
        email: 'y@mail.co',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
