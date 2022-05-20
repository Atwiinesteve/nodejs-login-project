// Importing Modules
const express = require('express');




// Importing Custome Routes
const { homeRoute } = require('../controllers/route_managers');



// Route Setup.
const router = express.Router();




// Home Route.
router.get('/', homeRoute);




// Exporting Routes.
module.exports = router;