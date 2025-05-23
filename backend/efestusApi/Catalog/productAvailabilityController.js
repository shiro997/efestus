const productAvailability = require('../model/ProductAvailability');
class ProductAvailabilityController{
  constructor() {
    
  }

  getProductAvailabilities = async (req, res) => {
      let productAvailabilities = [];
  
      productAvailability.find().then((pa) => {
        pa.forEach(p => {
          productAvailabilities.push(p);
        });
        res.json(productAvailabilities);
      });
  
    }
}

module.exports = new ProductAvailabilityController();