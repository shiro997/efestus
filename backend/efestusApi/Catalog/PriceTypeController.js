const priceType = require('../model/PriceType');
class PriceTypeController {
  constructor() {
  }

  CreatePriceType = async (req, res) => {
    const { Name } = req.body;
    priceType.findOne({ Name }).then((pt) => {
      if (pt) {
        return res.json({ msg: 'Ya existe esta categoría de precio!!!' });
      } else {
        let newPt = new priceType({ Name });

        newPt.save().then((nc) => {
          res.json(nc);
        }).catch(error => res.json(error));
      }
    })
  }

  getPriceType = async (req, res) => {
    let priceTypes = [];

    priceType.find().then((pt) => {
      pt.forEach(p => {
        priceTypes.push(p);
      });
      res.json(priceTypes);
    });

  }
}

module.exports = new PriceTypeController();