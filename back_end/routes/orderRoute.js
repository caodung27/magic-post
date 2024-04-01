const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

//[GET] get All Orders
router.get("/getAll", orderController.getAllOrders);

//[GET] get Orders by ID
router.get("/getByID", orderController.getOrderByID);

router.get("/getByLocation", orderController.getOrderByLocation);

//[GET] get Status Orders by ID
router.get("/getStatusByID", orderController.getStatusOrderByID);

//[GET] get Orders by Location
router.get("/getByReceivingLocation", orderController.getAllOrderByReceivingLocation);

router.get("/getByReceivingLocation1", orderController.getAllOrderByReceivingLocation1);

//[GET] get Orders by Status
router.get("/getByStatus", orderController.getAllOrderByStatus);

//[POST] create new Order
router.post("/createOrder", orderController.createNewOrder);

module.exports = router;
