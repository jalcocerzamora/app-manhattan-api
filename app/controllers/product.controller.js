// const db        = require("../models/index");
// const Product   = db.products;
// const Op        = db.Sequelize.Op;

const Product = require('../db/models').db.Product;

// Product.sync({ alter: true });

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Product
  const product = {
    name: req.body.name,
    description: req.body.description,
    categoryId: req.body.categoryId
  };

  // Save Product in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product." + err.message
      });
    });
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Post.findAll({
    attributes: {
      include: [
        [
          // Note the wrapping parentheses in the call below!
          sequelize.literal(
            `(
              SELECT COUNT(*)
              FROM reactions AS reaction
              WHERE
                reaction.postId = post.id
                AND
                reaction.type = "Laugh"
            )`
          ), 
          'laughReactionsCount'
        ]
      ]
    }
  });

  Product.findAll({ subQuery: false, where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving with id=" + id
      });
    });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Product.update(req.body, {
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Product was updated successfully."
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error updating Product with id=" + id
  //     });
  //   });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  // Product.destroy({
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Product was deleted successfully!"
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Could not delete Product with id=" + id
  //     });
  //   });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
  // Product.destroy({
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
};

// Find all published Products
exports.findAllPublished = (req, res) => {
  // Product.findAll({ where: { published: true } })
  // .then(data => {
  //   res.send(data);
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occurred while retrieving customers."
  //   });
  // });
};