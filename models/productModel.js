const mongoose = require('mongoose');


const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    images: [
      {
        public_id: {
          type: String,
          // required: true,
        },
        url: {
          type: String,
          // required: true,
        },
      },
    ],
    brand: {
      type: String,
      // required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      // required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    accuracy: {
      type: Number,
      default: 0,
    },
    trainingData: {
      type: String,
    },
    version: {
      type: String,
    },
    framework: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);

// module.exports = mongoose.model("User", UserSchema);