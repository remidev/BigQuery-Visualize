const router = require("express").Router();
const query = require("../scripts/biqQuery");

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