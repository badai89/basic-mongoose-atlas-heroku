const express = require('express');
const router = express.Router();
const app = express();

const { addUser, getUser } = require('../controller/user');

app.get("/", (req, res, next) => res.send("Still practice!"));

router.post("/userpost", addUser);
router.get("/user", getUser);

module.exports = router;