// Importing Modules
const express = require('express');




// Importing Custome Routes
const { homeRoute, createUser } = require('../controllers/route_managers.js');



// Route Setup.
const router = express.Router();




// Home Route.
router.get('/', homeRoute);


// Create User Route.
router.post('/create', createUser)




// Exporting Routes.
module.exports = router;