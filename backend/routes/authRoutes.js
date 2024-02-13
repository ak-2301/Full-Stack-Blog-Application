const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
} = require("../controllers/authController");

const router = express.Router();

//register user 
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

//logout user 
router.get("/logout", logOutUser);

module.exports = router;
