// Importing Modules
const express = require('express');
const cors = require('cors');



// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;




// Server Initialization
app.listen(PORT, () => { console.log(`Server Application Running on http://localhost:${PORT}`); });