const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");

//[GET] get All Orders
router.get("/getAll", locationController.getAllLocations);

//[GET] get by Type
router.get("/getByType", locationController.getLocationByType);

router.get("/getEmployee", locationController.getAllEmployee);

module.exports = router;
