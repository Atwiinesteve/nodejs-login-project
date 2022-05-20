// Importing Modules
const express = require('express');
const cors = require('cors');



// Importing Configs.
require('dotenv').config();




// Importing Application Routes.
const mainRoutes = require('./routes/routes');



// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;




// Application Routes.
app.use('/', mainRoutes);



// Server Initialization
app.listen(PORT, () => { console.log(`Server Application Running on http://localhost:${PORT}`); });