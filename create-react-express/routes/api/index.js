const router = require("express").Router();

const queryRoutes = require("./query");

// Query Routes
router.use("/query", queryRoutes);

module.exports = router;
