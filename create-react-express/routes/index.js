const query = require("../scripts/biqQuery");

// query().then(function(res) {
//   console.log(res);
// });

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    console.log("hello");
    query().then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/give", function(req, res) {
    console.log("red.body: ", req.body);
    console.log("red.body.source: ", req.body.source);
  });
};
