const mongoose = require("mongoose");
const { MONGOOSE_DB, MONGOOSE_CONNECTION } = require("./variableEnvy");

const CONNECTION =
  MONGOOSE_CONNECTION || `mongodb://localhost:27017/${MONGOOSE_DB}`;

mongoose.connect(MONGOOSE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;

module.exports = db;
