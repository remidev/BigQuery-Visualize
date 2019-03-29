const query = require("../scripts/biqQuery");

<<<<<<< HEAD
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
=======
router.get("/api/all", function(req, res) {
  console.log("hello");
  var x = "Hello";
  query().then(function(result) {
    res.json(result);
  });
  // res.json({ value: x });
});

module.exports = router;
router.post("api/grab",function(req,res){
  
})
>>>>>>> 67b972cb6c6c24861cbe06394e0217eb12e78ee2
