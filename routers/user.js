const express = require("express");
const router = express.Router();

const { handleUserSignup } = require("../controllers/signup");
const { handleUserLogin } = require("../controllers/login");
const { restrictAdminSignup } = require("../middlewares/unauth");
const { handleUserLogout } = require("../controllers/logout.js");

router.post("/signup", restrictAdminSignup, handleUserSignup);

router.post("/login", handleUserLogin);

router.post("/logout", handleUserLogout);

module.exports = router;
