const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie_schema')

router.get('/movies/:movieID', (req, res, next) => {
  let id = req.params.movieID

  Movie.findOne({'_id': id})
    .then(movie => {
      res.render('movie_detail', {movie})
    })
    .catch(error => {
      console.log(error)
    })
  });


module.exports = router;