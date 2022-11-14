// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((celebritiesArr) => {
      res.render("celebrities/celebrities", { celebritiesArr });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/celebrities/create", (req, res) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
