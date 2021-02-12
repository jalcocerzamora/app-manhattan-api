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
        category_id: 1, image: null, name: 'Hot Chiles', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 2
        category_id: 1, image: null, name: 'Dedos', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 3
        category_id: 1, image: null, name: 'Papas', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 4
        category_id: 1, image: null, name: 'Boneless', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 5
        category_id: 1, image: null, name: 'Alitas', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 6
        category_id: 1, image: null, name: 'Arosshito', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // BEBIDAS 2
      { // 7
        category_id: 2, image: null, name: 'Té', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 8
        category_id: 2, image: null, name: 'Uvola', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 9
        category_id: 2, image: null, name: 'Liminada', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 10
        category_id: 2, image: null, name: 'Frappuchino', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      { // 11
        category_id: 2, image: null, name: 'Refresco', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // SUSHI CLASICO 3
      { // 12
        category_id: 3, image: null, name: 'Sushi', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // SUSHI DE LA CASA 4
      { // 13
        category_id: 4, image: null, name: 'Sushi', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // HAMBURGUESAS 5
      { // 14
        category_id: 5, image: null, name: 'Hamburguesa', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // HAMBURGUESAS 6
      { // 15
        category_id: 6, image: null, name: 'Combos', status: 1, online: 1,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // // OTROS 7
      { // 16
        category_id: 7, image: null, name: 'Otros', status: 1, online: 1,
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
