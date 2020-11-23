const db        = require("../db/models").db;
const Op        = require('../db/models').db.Sequelize.Op;
const Order     = db.orders;

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.quantity) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Order
  const order = {
      quantity: req.body.quantity,
      comments: req.body.comments,
      // productId: req.body.productId
  };

  // Save Order in the database
  Order.create(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order." + err.message
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  const quantity = req.query.quantity;
  var condition = quantity ? { quantity: { [Op.like]: `%${quantity}%` } } : null;

  Order.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    });
};

// Find a single Order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id
      });
    });
};

// Update a Order by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Order.update(req.body, {
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Order was updated successfully."
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error updating Order with id=" + id
  //     });
  //   });
};

// Delete a Order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  // Order.destroy({
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Order was deleted successfully!"
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Could not delete Order with id=" + id
  //     });
  //   });
};

// Delete all Orders from the database.
exports.deleteAll = (req, res) => {
  // Order.destroy({
  //     where: {},
  //     truncate: false
  //   })
  //     .then(nums => {
  //       res.send({ message: `${nums} Orders were deleted successfully!` });
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while removing all customers."
  //       });
  //     });
};

// Find all published Orders
exports.findAllPublished = (req, res) => {
  // Order.findAll({ where: { published: true } })
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