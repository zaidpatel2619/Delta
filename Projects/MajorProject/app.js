const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Listing = require("./models/listing");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log('Connected to DB');
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

// SETTINGS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

//ROOT
app.get("/", (req, res) => {
    res.render('listing/home.ejs');
});

// HOME
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });
});

// CREATE NEW LISTING
app.get("/listings/new", (req, res) => {
    res.render('listing/new.ejs');
});

// API FOR NEW LISTING
app.post("/listings", async (req, res) => {
let { listing } = req.body;
const newListing = new Listing(listing);
await newListing.save();
res.redirect("/listings");
});

// VIEW LISTING
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/show.ejs", { listing });
});

// EDIT LISTING
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/edit.ejs", { listing });
});

// API FOR EDIT LISTING 
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
});

// DELETE LISTING API
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});
