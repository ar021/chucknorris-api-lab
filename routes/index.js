var express = require("express");
var router = express.Router();
const request = require("request");
const rootURL = "https://api.chucknorris.io/jokes/";

/* GET home page. */
router.get("/", function (req, res, next) {
  const category = req.query.category;
  console.log(category);
  request(
    `${rootURL}random?category=${category}`,
    function (err, response, body) {
      const jokesData = JSON.parse(body);
      const jokeCat = jokesData.category;
      console.log(jokeCat);
      const joke = jokesData.value;
      console.log(joke);
      res.render("index", { jokesData, joke });
    }
  );
});

module.exports = router;
