const express = require("express");

const router = express.Router();

//routes
router.get("/", (req, res) => {
  res.send("We are on user");
});

module.exports = router;
