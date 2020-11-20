'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',
    [
      {
        avatar: null, 
        firstname: 'Jonatan', lastname: 'Alcocer Zamora', username: 'jalcocer', password: '12345', email: 'jalcocerzamora@gmail.com', 
        role: 'developer', createdAt: new Date(), updatedAt: new Date()
      },
      {
        avatar: null, 
        firstname: 'RESTAURANTE MANHATTAN', lastname: '', username: 'manhattan', password: 'manhattan-prod', email: 'jalcocerzamora@gmail.com',
        role: 'public', createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
