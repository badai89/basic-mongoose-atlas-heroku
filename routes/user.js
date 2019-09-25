const express = require('express');
const router = express.Router();

const { addUser, getUser } = require('../controller/user');

router.post("/userpost", addUser);
router.get("/", getUser);

module.exports = router;