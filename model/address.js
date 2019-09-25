var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    address: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
