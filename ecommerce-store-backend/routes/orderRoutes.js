const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const auth = require("../middleware/auth");

// Create a new order (Authenticated users only)
router.post("/orders", auth, async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      user: req.user._id, // Link the order to the authenticated user
    });
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all orders (consider restricting to admin later)
router.get("/orders", auth, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single order by ID (Authenticated users only)
router.get("/orders/:id", auth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("products.product");
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an order by ID (Authenticated users only)
router.patch("/orders/:id", auth, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an order by ID (Authenticated users only)
router.delete("/orders/:id", auth, async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send();
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
