// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// Creates Express App
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Creates listener
app.listen(PORT, function() {
    console.log(`App is listening on Port ${PORT}`);
})