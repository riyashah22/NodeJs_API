const express = require('express');
const dotEnv = require('dotenv');

// Load env file
dotEnv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`);
});