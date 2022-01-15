/**
 * Required External Modules and Interfaces
 */
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Router Definition
 */
export const mainRouter = express.Router();

/**
 * Controller Definitions
 */

mainRouter.get('/register', (req, res) => {
    res.render('views/pages/registration.ejs');
});

mainRouter.get('/reset-password', (req, res) => {
    res.render('views/pages/changepass.ejs');
});

mainRouter.get('/profile', (req, res) => {
    res.render('views/pages/editprofile.ejs');
});