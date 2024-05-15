const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const asyncWrap = require('../utils/asyncWrap');
const { isLoggedIn, isOwner, validateListing } = require("../middlewares.js");

// HOME
router.get("/", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });
});

// CREATE NEW LISTING
router.get("/new", isLoggedIn, (req, res) => {
    res.render('listing/new.ejs');
});

// API FOR NEW LISTING
router.post("/", validateListing, isLoggedIn, asyncWrap(async (req, res) => {
    let { listing } = req.body;
    const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
})
);

// VIEW LISTING
router.get("/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing doesn't exist!");
        res.redirect('/listings');
    }
    res.render("listing/show.ejs", { listing });
});

// EDIT LISTING
router.get("/:id/edit", isLoggedIn, async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing doesn't exist!");
        res.redirect('/listings');
    }
    res.render("listing/edit.ejs", { listing });
});

// API FOR EDIT LISTING 
router.put("/:id", isLoggedIn, isOwner, validateListing, async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
});

// DELETE LISTING API
router.delete("/:id", isLoggedIn, isOwner, async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
});

module.exports = router;
