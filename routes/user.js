const express = require('express');
const router = express.Router();
const app = express();

const { addUser, getUser } = require('../controller/user');

router.post("/userpost", addUser);
router.get("/user", getUser);

module.exports = router;