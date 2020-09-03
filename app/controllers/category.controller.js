// const db = require("../models/index").;
// const Category = db.categories;
// const Op = db.Sequelize.Op;

const Category = require('../db/models').db.Category;

// Category.sync({ alter: true });

module.exports = {

  async create(req, res) {

    try {
      const category = await Category.create(
        {
          title: req.body.title
        }
      );
      res.status(201).send(category)
    }
    catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async findAll(req, res) {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    try {
      const categoryCollection = await Category.findAll( { where: condition, order: [ ['sort', 'ASC'] ] } );
      console.log(categoryCollection)
      res.status(201).send(categoryCollection);
    }
    catch (e) {
      console.log(e);
      res.status(500).send(
        {
          message: err.message || "Some error occurred while retrieving customers." 
        }
      );
    }
  },

  async findOne(req, res) {
    const id = req.params.id;

    Category.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Category with id=" + id
        });
      });
  },

  // async getAllPostsOfUser(req, res) {
  //   try {
  //     const userCollection = await User.find({
  //       id: req.params.userId
  //     });

  //     if (userCollection) {
  //       const postCollection = await Post.find({
  //         userId: req.params.userId
  //       })

  //       res.status(201).send(postCollection);
  //     }
  //     else {
  //       re.status(404).send("User Not Found")
  //     }
  //   }
  //   catch (e) {
  //     console.log(e);
  //     res.status(500).send(e);
  //   }
  // },
}