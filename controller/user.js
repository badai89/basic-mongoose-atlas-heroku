const User = require("../model/user");

module.exports = {
  addUser: (req, res) => {
    const newUser = new user(req.body);
    newUser.save((error, result) => {
      if (error) {
        res.status(400).send({
          message: "user failed to created",
          error
        });
      } else {
        res.status(200).send({
          message: "user created",
          result
        });
      }
    });
  },
  getUser: (req, res) => {
    console.log("masuk");
    
    User
      .find()
      .populate("addresses")
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error));
  }
};
