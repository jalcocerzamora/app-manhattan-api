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
    await queryInterface.bulkInsert('Products', [

      // ENTRADAS 1
      { // 1
        categoryId: 1, image: null, name: 'Hot Chiles', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 2
        categoryId: 1, image: null, name: 'Dedos', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 3
        categoryId: 1, image: null, name: 'Papas', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 4
        categoryId: 1, image: null, name: 'Boneless', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 5
        categoryId: 1, image: null, name: 'Alitas', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 6
        categoryId: 1, image: null, name: 'Arosshito', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // BEBIDAS 2
      { // 7
        categoryId: 2, image: null, name: 'Té', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 8
        categoryId: 2, image: null, name: 'Uvola', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 9
        categoryId: 2, image: null, name: 'Liminada', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 10
        categoryId: 2, image: null, name: 'Frappuchino', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 11
        categoryId: 2, image: null, name: 'Refresco', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // SUSHI CLASICO 3
      { // 12
        categoryId: 3, image: null, name: 'Sushi', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // SUSHI DE LA CASA 4
      { // 13
        categoryId: 4, image: null, name: 'Sushi', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // HAMBURGUESAS 5
      { // 14
        categoryId: 5, image: null, name: 'Hamburguesa', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // HAMBURGUESAS 6
      { // 15
        categoryId: 6, image: null, name: 'Combos', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // OTROS 7
      { // 16
        categoryId: 7, image: null, name: 'Otros', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
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
