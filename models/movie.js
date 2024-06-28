const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    releaseDate: String,
    genre: String,
    cast: [String],
    description: String
});

module.exports = mongoose.model('Movie', movieSchema);
