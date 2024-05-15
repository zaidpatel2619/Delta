const express = require("express");
const router = express.Router();
const User = require("../models/user");
const asyncWrap = require("../utils/asyncWrap");
const passport = require("passport");
const { saveUrl } = require("../middlewares");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", asyncWrap(async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const regUser = await User.register(newUser, password);
        console.log(regUser);
        req.login(regUser, (err) => {
            if (err) {
                next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",
    saveUrl,
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    asyncWrap(async (req, res) => {
        req.flash("success", "Welcome to Wanderlust! You are now logged in!");
        let url = res.locals.redirectUrl || "/listings";
        res.redirect(url);
    })
);

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/listings");
    })
})

module.exports = router;
