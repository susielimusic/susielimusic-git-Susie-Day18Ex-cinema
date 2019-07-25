require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const app = express();

const Movie= require('./models/movie_schema.js');
const movies = require('./bin/seeds');

const index = require('./routes/index');
app.use('/', index);
const movieroute = require('./routes/movies');
app.use('/', movieroute);


app.get('/movies', (req, res, next) => {
  Movie.find().then((films) => {
    debugger
       console.log(films)
      res.render('movies', {films})  
     })
     .catch( err => {
      console.log(err)
     })
  });

const app_name = require('./package.json').name;
//const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


mongoose.connect('mongodb://localhost/movieApp')
.then(() => {
  console.log('Connected to Mongo!');
  Movie.find().then(movies=> console.log(movies))
  // return Movie.insertMany(movies)
  //     .then((result) => {
  //       result.forEach(movie => {
  //         console.log(movie.title)
  //       })
      })
    //   .then(()=>{
    //     mongoose.connection.close();
    //   console.log("conexion cerrada");
    //   return;
    // })
// })

app.listen(3000)
// module.exports = app;