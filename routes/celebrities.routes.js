// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity=require('../models/Celebrity.model')

router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

router.post("/celebrities/create",(req, res)=>{
Celebrity.create({
    name:req.body.name,
    occupation:req.body.occupation,
    catchPhrase:req.body.catchPhrase
})
.then((newCelebrity)=>{
console.log(newCelebrity)
res.send(newCelebrity)
})
.catch((err)=>{
res.send(err)
})
res.render('/celebrities')
})

module.exports = router;