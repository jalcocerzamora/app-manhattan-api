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
    await queryInterface.bulkInsert('Categories',
      [
        // 1
        { title: 'Entradas', sort: 2, createdAt: new Date(), updatedAt: new Date() },
        // 2
        { title: 'Bebidas', sort: 6, createdAt: new Date(), updatedAt: new Date() },
        // 3
        { title: 'Sushis Clasicos', sort: 3, createdAt: new Date(), updatedAt: new Date() },
        // 4
        { title: 'Sushis de la Casa', sort: 4, createdAt: new Date(), updatedAt: new Date() },
        // 5
        { title: 'Hamburguesas', sort: 5, createdAt: new Date(), updatedAt: new Date() },
        // 6
        { title: 'Combos', sort: 1, createdAt: new Date(), updatedAt: new Date() },
        // 7
        { title: 'Otros', sort: 7, createdAt: new Date(), updatedAt: new Date() },
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
