const express = require("express");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

// To access request.body in POST requests
app.use(express.json());

// Enable cors
app.use(cors());

// Routes
const categoryRoutes = require('./routes/category-routes');
app.use('/', categoryRoutes);

const guidesRoutes = require('./routes/guides-routes');
app.use('/', guidesRoutes);

// Listening
app.listen(PORT, () => {
    console.log("Server running on port "
        + PORT)
});