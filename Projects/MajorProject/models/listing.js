const mongoose = require("mongoose");
const Review = require("./review");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String, 
    image: {
        type: Object,
        default: {
            filename: 'name',
            url: "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-ZgHFNECLmQg",
        },
        set: (v) => v === " " ? { url: "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-ZgHFNECLmQg" } : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await (Review.deleteMany({ _id: { $in: listing.reviews }}))
    }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;