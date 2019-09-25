const Address = require("../model/address");
const User = require("../model/user");

module.exports = {
  addAddress: async (req, res) => {
    const address = await Address.create({
      address: req.body.address
    });

    const user = await User.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { addresses: address._id } }
    );
    res.status(200).send({
      message: "created new address success",
      address,
      user
    });
  },
  getAddress: (req, res) => {
    user
      .find()
      .then(result => {
        res.send(result);
      })
      .catch(error => console.log(error));
  }
};
