const Category = require("../model/Category");
class CategoryController {
  constructor(){}
  createCategories = async (req, res) => {
    let { Name } = req.body;

    Category.findOne({ Name }).then((c) => {
      if (c) {
        return res.json({ msg: 'Ya existe esta categoría!!!' });
      } else {
        let newCat = new Category({
          Name
        })

        newCat.save().then((nc) => {
          res.json(nc);
        }).catch(error => res.json(error));
      }
    });
  }

  getCategories = async (req, res) => {
    let categories = [];

    Category.find().then((cat) => {
      cat.forEach(ct => {
        categories.push(ct);
      });
      res.json(categories);
    });

  }
}


module.exports = new CategoryController();