// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");
const { route } = require("./celebrities.routes");

router.get("/movies/create", (req, res) => {
  Celebrity.find().then((celebrities) => {
    res.render("movies/new-movie", { celebrities });
  });
});

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.render("movies/movies", { movies });
  });
});

router.post("/movies/create", (req, res) => {
  console.log(req.body);
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
