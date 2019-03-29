const router = require("express").Router();

const query = require("../../scripts/biqQuery");

router.get("/", query);

module.exports = router;
