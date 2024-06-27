const express = require("express");
const router = express.Router();
const URL = require("../models/urlModel.js");
const asyncHandler = require("../utils/asyncHandler.js");

router.get("/signup", (req, res) => {
  res.render("signup", { admin: true });
});

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await URL.find({});
    res.render("home", { name: req.user.name, data });
  })
);

module.exports = router;
