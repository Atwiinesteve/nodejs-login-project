// Importing Modules
const express = require('express');




// Importing Custome Routes
const { homeRoute, createUser, loginUser } = require('../controllers/route_managers.js');



// Route Setup.
const router = express.Router();




// Home Route.
router.get('/', homeRoute);


// Create User Route.
router.post('/create', createUser);


// Login User Route.
router.post('/login', loginUser);




// Exporting Routes.
module.exports = router;