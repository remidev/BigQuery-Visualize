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
};
