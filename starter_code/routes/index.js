const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie_schema')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
// router.get('/movies/:id', (req, res, next) => {
//   let movieId = req.params.id;
//   Movies.findOne({'_id': movieId})
//     .then(movie => {
//       // console.log('hello', movie)
//       // console.log('I\'m the title', movie.title )
//       res.render('movie-detail', { movie })
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   });

module.exports = router;