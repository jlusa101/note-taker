// Required packages
const express = require('express');
const apiRoutes = require('./public/routes/apiRoutes');
const htmlRoutes = require('./public/routes/htmlRoutes');

// Constant PORT variable
const PORT = process.env.PORT || 3001;

// Instantiating a new Express server
const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

// Include public directory's content in the application
app.use(express.static('public'));

// Informing the server to use these directories for routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listening on the specified port and informing user
app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}!`);
});