const express = require("express");
const router = express.Router( { mergeParams: true });
const Listing = require("../models/listing");
const Review = require("../models/review");
const asyncWrap = require("../utils/asyncWrap");
const { isLoggedIn, validateReview, isAuthor } = require("../middlewares.js");

//ADD REVIEWS 
router.post("/", isLoggedIn, validateReview, asyncWrap(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Added!");
    res.redirect(`/listings/${listing._id}`);
}));

//DELETE REVIEW
router.delete("/:reviewId", isLoggedIn, isAuthor, asyncWrap(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;