const mongoose = require("mongoose");

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
    country: String
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;