const express = require('express');
const {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getProductsOfAdmin,
  createProductReview,
  getTopProducts,
  getReviewOfAdmin,
} = require('../controllers/productController.js');
const { adminMiddleware, protect } = require('../middleware/authMiddleware.js');

const router = express.Router();

//same meaning
// router.route("/").get(getProducts)  === router.get("/" , getProducts)
router
  .route("/")
  .get(getProducts)
  .post(protect, adminMiddleware, createProduct);
router.route("/myreviews").get(protect , adminMiddleware , getReviewOfAdmin )
router.route("/myproducts").get(protect, getProductsOfAdmin);
router.route("/:id/reviews").post(protect, createProductReview);
router.get('/top', getTopProducts)
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, adminMiddleware, deleteProduct)
  .put(protect, adminMiddleware, updateProduct);

  module.exports = router;
