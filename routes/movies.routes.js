// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie");
});

router.get("/movies", (req, res) => {
  res.render("movies/movies");
});

router.post("/movies/create", (req, res) => {
  console.log(req.body);
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: [],
  })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
