const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/school.controller");

/* GET programming languages. */
router.get("/enrollment", schoolController.get);

module.exports = router;
