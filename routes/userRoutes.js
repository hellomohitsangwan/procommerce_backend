const express = require('express');
const router = express.Router();


const {
  authUser,
  registerUser,
  getUserById,
  updateUser,
} = require('../controllers/userControllers.js');

const { adminMiddleware, protect } = require('../middleware/authMiddleware.js');


router.route("/").post(registerUser)
router.post("/login", authUser);
router
  .route("/:id")
  .get(protect, adminMiddleware, getUserById)
  .put(protect, adminMiddleware, updateUser);

  module.exports = router;