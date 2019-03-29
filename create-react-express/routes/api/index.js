const router = require("express").Router();

const queryRoutes = require("./query");

router.use("/query", queryRoutes);

module.exports = router;
