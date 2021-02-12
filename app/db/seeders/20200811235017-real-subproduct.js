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
    await queryInterface.bulkInsert('Subproducts', [

      // ENTRADAS
      {
        product_id: 1, image: 'entradas/hot-chiles.jpg', name: 'Hot Chiles (2pz)', price: 35,
        description: 'Chiles caribes empanizados rellenos de philadelphia tapico y queso chester.', 
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 2, image: null, name: 'Dedos de Queso (3pz)', price: 40,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 3, image: null, name: 'Papas a la Francesa', price: 35,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 3, image: null, name: 'Papas Gajo', price: 55,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 4, image: null, name: 'Boneless BBQ', price: 75,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 4, image: null, name: 'Boneless Bufalo', price: 75,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 5, image: null, name: 'Alitas BBQ (10pz)', price: 75,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 5, image: null, name: 'Alitas Bufalo (10pz)', price: 75,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 6, image: null, name: 'Arosshito Pollo', price: 65,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 6, image: null, name: 'Arosshito Res', price: 65,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 6, image: null, name: 'Arosshito Mix+Camaron', price: 65,
        description: null, createdAt: new Date(), updatedAt: new Date()
      },

      // BEBIDAS
      {
        product_id: 7, image: 'bebidas/te.jpg', name: 'Te', price: 15,
        description: '1/2 lt', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 7, image: 'bebidas/te.jpg', name: 'Te', price: 25,
        description: '1 lt', createdAt: new Date(), updatedAt: new Date()
      },

      {
        product_id: 8, image: 'bebidas/uvola.jpg', name: 'Uvola', price: 20,
        description: '1/2 lt', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 8, image: 'bebidas/uvola.jpg', name: 'Uvola', price: 25,
        description: '1 lt', createdAt: new Date(), updatedAt: new Date()
      },

      {
        product_id: 9, image: null, name: 'Liminada Natural', price: 20,
        description: '1/2 lt', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 9, image: null, name: 'Liminada Natural', price: 25,
        description: '1 lt', createdAt: new Date(), updatedAt: new Date()
      },

      {
        product_id: 9, image: null, name: 'Liminada Mineral', price: 25,
        description: '1/2 lt', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 9, image: null, name: 'Liminada Mineral', price: 35,
        description: '1 lt', createdAt: new Date(), updatedAt: new Date()
      },

      {
        product_id: 10, image: null, name: 'Frappuchino Oreo', price: 48,
        description: 'Chico', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 10, image: null, name: 'Frappuchino Oreo', price: 58,
        description: 'Grande', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 10, image: 'bebidas/frappe-moka.jpg', name: 'Frappuchino Moka', price: 48,
        description: 'Chico', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 10, image: 'bebidas/frappe-moka.jpg', name: 'Frappuchino Moka', price: 58,
        description: 'Grande', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 10, image: null, name: 'Frappuchino Mazapan', price: 48,
        description: 'Chico', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 10, image: null, name: 'Frappuchino Mazapan', price: 58,
        description: 'Grande', createdAt: new Date(), updatedAt: new Date()
      },

      {
        product_id: 11, image: null, name: 'Pepsi', price: 12,
        description: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 11, image: null, name: 'Naranja', price: 12,
        description: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 11, image: null, name: 'Toronja', price: 12,
        description: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 11, image: null, name: '7UP', price: 12,
        description: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 11, image: null, name: 'Manzana', price: 12,
        description: '', createdAt: new Date(), updatedAt: new Date()
      },

      // SUSHI CLASICOS 12
      {
        product_id: 12, image: 'sushis/clasicos/california.png', name: 'California', price: 65,
        description: 'por dentro: philadelphia, aguacate, pepino y surimi por fuera: ajaonjoli rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 12, image: 'sushis/clasicos/bombazo.png', name: 'Bombazo', price: 70,
        description: 'por dentro philadelphia, aguacate, pepino y surimi rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 12, image: 'sushis/clasicos/tres-quesos.png', name: '3Quesos', price: 75,
        description: 'por dentro philadelphia, aguacate, pepino y surimi y camaron por fuera queso americano y chesster rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 12, image: 'sushis/clasicos/cielo-mar-y-tierra.png', name: 'Cielo Mar y Tierra', price: 75,
        description: 'por dentro philadelphia, aguacate, pollo, res y camaron, rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 12, image: 'sushis/clasicos/guamuchilito.png', name: 'Guamuchilito', price: 79,
        description: 'por dentro philadelphia, aguacate, pepino y surimi por fuera toping de cangrejo con camaron, aguacate y salsa de anguila rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 12, image: 'sushis/clasicos/sushi-ball.png', name: 'Shushi Ball', price: 65,
        description: 'bola de arroz empanizada, rellena de aguacate, pepino, philadelphia y surimi',
        createdAt: new Date(), updatedAt: new Date()
      },

      // SUSHI DE LA CASA 13
      {
        product_id: 13, image: null, name: 'Cordon Blue', price: 79,
        description: 'por dentro philadelphia, aguacate, pepino,  pollo, tocino y queso chesster por fuera toping de tampico rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/culiacancito.jpg', name: 'Culiacancito', price: 95,
        description: 'por dentro philadelphia, pepino, y kanikama empanizado, por fuera aguacate toping de tampico, camaron empanizado y salsa de anguila rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: null, name: 'Del Chef', price: 85,
        description: 'por dentro philadelphia, aguacate, pepino y surimi por fuera toping spicy de cangrejo rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: null, name: 'Ebi Roll', price: 95,
        description: 'por dentro philadelphia, aguacate, pepino y surimi forrado de firutara de kanikama por fuera toping  de camaron y philadelphia rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: null, name: 'Harlem', price: 79,
        description: 'por dentro philadelphia, aguacate, pollo y tocino por fuera gratinado con chile caribe rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/houston.jpg', name: 'Houston Roll', price: 85,
        description: 'por dentro philadelphia, aguacate, pepino, res, pollo y tocino, por fuera toping de tampico, aguacate y anguila rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/kany.jpg', name: 'KANY ROLL', price: 95,
        description: 'por dentro philadelphia, aguacate, pepino y kanikama empanizado por gratinado spicy camaron y tocino rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/mochilito.jpg', name: 'MOCHILITOS', price: 95,
        description: 'por dentro philadelphia, aguacate, pepino, res, pollo y camaron por fuera gratinado spicy con tocino y serrano rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/manhattan.jpg', name: 'MANHATTAN ROLL', price: 79,
        description: 'por dentro philadelphia, aguacate, res y camaron, gratinado con tocino rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/mt-roll.jpg', name: 'MT.', price: 79,
        description: 'por dentro philadelphia, aguacate, res y tocino, gratinado con serrano natural, rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/nevo-roll.jpg', name: 'NEVO ROLL', price: 95,
        description: 'por dentro philadelphia, aguacate, pepino y cangrejo empanizado por fuera toping de cangrejo  camaron y serrano, aguacate y salsa de anguila rollo empanizado',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: null, name: 'NEVADO ROLL', price: 95,
        description: 'por dentro philadelphia, aguacate, pepino y cangrejo por fuera ensalada de zanahoria camaron, kanicama y cebollin rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/plancha-especial.jpg', name: 'PLANCHA ESPECIAL', price: 79,
        description: 'cama de arroz empanizada, philadelphia pollo res, camaron gratinada aguacate y salsa de anguila',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 13, image: 'sushis/casa/super-chesster.jpg', name: 'SUPER CHESTER', price: 89,
        description: 'por dentro philadelphia, aguacate, pepino, surimi, camaron por fuera gratinado con res y chile caribe rollo natural',
        createdAt: new Date(), updatedAt: new Date()
      },

      // HAMBURGUESAS 14
      {
        product_id: 14, image: 'hamburguesas/clasica.png', name: 'CLASICA', price: 70,
        description: 'carne de res, crujiente tocino, queso americano, tomate cebolla, lechuga y aguacate, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/brooklin.png', name: 'BROOKLYN', price: 85,
        description: 'carne de res,costra de queso, aros de cebolla, mermelada de chile poblano, tomate, lechuga y aguacate, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/campirana.png', name: 'CAMPIRANA', price: 85,
        description: 'carne de res,queso de cabra, pimientos, cebolla,  champiñon salteados, queso chester, mermelada de chile poblano, tomate, cebolla,  lechuga y aguacate, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/rosevelt.png', name: 'ROSEVELT', price: 85,
        description: 'carne de res, salsa de quesos, cebolla caramelizada, papas en paja, tomate, lechuga y aguacate, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/tery-burgers.png', name: 'TERY BURGER', price: 85,
        description: 'carne de res, piña, queso chester,salsa teriyaky, tomate cebolla, lechuga y aguacate, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/texas.png', name: 'TEXAS', price: 85,
        description: 'carne de res, crujiente tocino, costra de queso, aros de cebolla, salsa bbq, tomate, lechuga y aguacate, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/crazy-cheese-burgers.jpg', name: 'CRAZY CHEESE BURGER', price: 85,
        description: 'carne de res, costra de queso, queso crema, salsa de queso, tomate, cebolla, lechuga, aguate y dedo de queso, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/jalapeño-burgers.png', name: 'JALAPEÑO BURGER', price: 99,
        description: 'carne de res, crujiente tocino, queso americano, aderezo de chipotle, chiles jalapeños, tomate, cebolla, lechuga , aguacate y jalapeño tatemado relleno de queso chester envuelto en tocino acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: null, name: 'TROPY BURGER', price: 99,
        description: 'carne de res,queso crema,piña, mermelada de piña, camarones envueltos en tocino, tomate cebolla, lechuga y aguacate, acompañada de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 14, image: 'hamburguesas/boneless-burgers.png', name: 'BONELES BURGER', price: 85,
        description: 'pollo frito bañados en salsa bbq o bufalo, tomate, cebolla, lechuga y agacate, acompaña de papas ala francesa',
        createdAt: new Date(), updatedAt: new Date()
      },

      // COMBOS 15
      {
        product_id: 15, image: 'combos/paquete-llenes-1.jpg', name: 'PAQUETE  LLENES 1', price: 139,
        description: '1 bombazo + 1 pz de hot chile + 1/2 orden de boneles +  litro de te',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 15, image: null, name: 'PAQUETE LLENES 2', price: 129,
        description: '1 california + 1/2 arshito de pollo + 2 dedos de queso + litro de te',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 15, image: null, name: 'PAQUETE LLENES 3', price: 139,
        description: '1 bombazo + 1 pz de hot chile + 1/2 orden de alitas +  litro de te',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 15, image: null, name: 'Combo Arroshito', price: 149,
        description: '2 arosshitos de pollo + litro de te',
        createdAt: new Date(), updatedAt: new Date()
      },

      // OTROS 15
      {
        product_id: 16, image: null, name: 'Toping De Tampico', price: 20,
        description: '',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 16, image: null, name: 'Toping De Camaron', price: 20,
        description: '',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 16, image: null, name: 'Gratinado Adicional', price: 15,
        description: '',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        product_id: 16, image: null, name: 'Anguila', price: 5,
        description: '',
        createdAt: new Date(), updatedAt: new Date()
      },
    ])
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
