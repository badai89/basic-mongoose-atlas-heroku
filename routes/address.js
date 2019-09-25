const express = require("express");
const router = express.Router();

const { addAddress } = require("../controller/address");

router.post("/addresspost", addAddress);

// router.get("/get", addAdress);
module.exports = router;

