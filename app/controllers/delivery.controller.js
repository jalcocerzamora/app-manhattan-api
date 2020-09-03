const db        = require("../models/index");
const Delivery  = db.deliveries;
const Op        = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.quantity) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const delivery = {
      quantity: req.body.quantity,
      comments: req.body.comments,
      // productId: req.body.productId
  };

  Delivery.create(delivery)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Delivery." + err.message
      });
    });
};

exports.findAll = (req, res) => {
  const quantity = req.query.quantity;
  var condition = quantity ? { quantity: { [Op.like]: `%${quantity}%` } } : null;

  Delivery.findAll({ where: condition })
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

exports.findOne = (req, res) => {
  const id = req.params.id;

  Delivery.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Delivery with id=" + id
      });
    });
};

// Update a Delivery by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  // Delivery.update(req.body, {
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Delivery was updated successfully."
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot update Delivery with id=${id}. Maybe Delivery was not found or req.body is empty!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error updating Delivery with id=" + id
  //     });
  //   });
};

// Delete a Delivery with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  // Delivery.destroy({
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Delivery was deleted successfully!"
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot delete Delivery with id=${id}. Maybe Delivery was not found!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Could not delete Delivery with id=" + id
  //     });
  //   });
};

// Delete all Deliveries from the database.
exports.deleteAll = (req, res) => {
  // Delivery.destroy({
  //     where: {},
  //     truncate: false
  //   })
  //     .then(nums => {
  //       res.send({ message: `${nums} Deliveries were deleted successfully!` });
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while removing all customers."
  //       });
  //     });
};

// Find all published Deliveries
exports.findAllPublished = (req, res) => {
  // Delivery.findAll({ where: { published: true } })
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