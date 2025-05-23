const UsrType = require('../model/UserType');
class UserTypeController{
  constructor() {
    
  }

  getUserTypes = async (req, res) => {
      let usrTypes = [];
  
      UsrType.find().then((ut) => {
        ut.forEach(t => {
          usrTypes.push(t);
        });
        res.json(usrTypes);
      });
  
    }
}

module.exports = new UserTypeController();