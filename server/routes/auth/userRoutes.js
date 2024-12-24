const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../../controllers/auth/userController");

//Register to the system
router.post("/", registerUser);

router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
