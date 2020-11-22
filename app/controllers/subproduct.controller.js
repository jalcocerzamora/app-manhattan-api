const db        = require("../db/models/index");
const Op        = require('../db/models').db.Sequelize.Op;
const Category  = db.Category;
const Product   = db.Product;
const Subproduct  = db.Subproduct;
// Suproduct.sync({ alter: true });

module.exports = {
  async create(req, res) {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    const item = {
      productId: req.body.productId,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    Subproduct.create(item)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Subproduct." + err.message
        });
      });
  },

  async findAll(req, res) {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Subproduct.findAll({ subQuery: false, where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      });
  },

  async finAllWithProductAndCategory(req, res) {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    let data = [];

    try {
      const categories_with_subproduct = (await Category.findAll(
        {
          raw: true,
          order: [['sort', 'ASC']],
          include: {
            // all: true
            model: Product, as: 'product',
          }
        }
      ));

      const JSON_categories_with_subproduct = JSON.stringify(categories_with_subproduct);

      const subproducts_products = await Subproduct.findAll(
        {
          raw: true,
          // where: {
          //   '$Instruments.size$': { [Op.ne]: 'small' }
          // },
          include: {
            model: Product,
            // where: {
            //   state: Sequelize.col('project.state')
            // },
            // required: true, //
            include: {
              model: Category
            }
          }
        });

      const categories = await Category.findAll({ raw: true, order: [['sort', 'ASC']] });
      const products = await Product.findAll({ raw: true });
      const subproducts = await Subproduct.findAll({ raw: true });

      data = categories.map(category => {
        let rObj = {};
        let ids = products.filter(i => i.categoryId === category.id).map(i => i.id);
        rObj.Category = category;
        rObj.Products = subproducts.filter(
          i => ids.includes(i.productId)
        );
        return rObj;
      });

      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving data."
      });
    }
  },

  async findOne(req, res) {
    const id = req.params.id;

    Subproduct.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Subproduct with id=" + id
        });
      });
  },

  async update(req, res) {
    const id = req.params.id;

    // Subproduct.update(req.body, {
    //   where: { id: id }
    // })
    //   .then(num => {
    //     if (num == 1) {
    //       res.send({
    //         message: "Subproduct was updated successfully."
    //       });
    //     } else {
    //       res.send({
    //         message: `Cannot update Subproduct with id=${id}. Maybe Subproduct was not found or req.body is empty!`
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message: "Error updating Subproduct with id=" + id
    //     });
    //   });
  },

  async delete(req, res) {
    const id = req.params.id;

    // Subproduct.destroy({
    //   where: { id: id }
    // })
    //   .then(num => {
    //     if (num == 1) {
    //       res.send({
    //         message: "Subproduct was deleted successfully!"
    //       });
    //     } else {
    //       res.send({
    //         message: `Cannot delete Subproduct with id=${id}. Maybe Subproduct was not found!`
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message: "Could not delete Subproduct with id=" + id
    //     });
    //   });
  },

  async deleteAll(req, res) {
    // Subproduct.destroy({
    //     where: {},
    //     truncate: false
    //   })
    //     .then(nums => {
    //       res.send({ message: `${nums} Products were deleted successfully!` });
    //     })
    //     .catch(err => {
    //       res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while removing all customers."
    //       });
    //     });
  },

  async findAllPublished(req, res) {
    // Subproduct.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving customers."
    //   });
    // });
  },
}