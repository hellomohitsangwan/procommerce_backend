const mongoose = require('mongoose');


const scrapedProductSchema = new mongoose.Schema({
    name: String,
    productUrl: String,
    totalReviews: Number,
    rating: Number,
    discountedPrice: Number,
    website: String,
});

const ScrapedProduct = mongoose.model('scrapedProductSchema', scrapedProductSchema);

export default ScrapedProduct;
