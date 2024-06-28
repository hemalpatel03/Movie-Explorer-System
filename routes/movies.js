const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Home Route - Display All Movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('index', { movies: movies });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Movie Detail Page
router.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render('movie', { movie: movie });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Search Route
router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.q;
        const movies = await Movie.find({ title: { $regex: searchQuery, $options: 'i' } });
        res.render('index', { movies: movies });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
