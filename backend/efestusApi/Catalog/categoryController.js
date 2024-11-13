const Category = require("../model/Category");

const createCategories = async (req,res) => {
  const {Name} = req.body;

  Category.findOne({Name}).then((c)=>{
    if(c){
      return res.json({msg:'Ya existe esta categoría!!!'});
    }else{
      let newCat = new Category({
        Name
      })

      newCat.save().then((nc)=>{
        res.json(nc);
      }).catch(error=>res.json(error));
    }
  });
}

const getCategories = async (req,res) =>{
  let categories = [];
  
}

module.exports = [createCategories];