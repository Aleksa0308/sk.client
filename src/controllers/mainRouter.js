/**
 * Required External Modules and Interfaces
 */
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Router Definition
 */
const mainRouter = express.Router();

/**
 * Controller Definitions
 */

mainRouter.get('/register', (req, res) => {
    res.render('pages/registration.ejs');
});

mainRouter.get('/reset-password', (req, res) => {
    res.render('pages/changepass.ejs');
});

mainRouter.get('/profile', (req, res) => {
    res.render('pages/editprofile.ejs');
});

module.exports = mainRouter;