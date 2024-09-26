const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const auth = require("../middleware/auth");

// Add to Cart
router.post("/cart", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      const newCart = new Cart({
        user: req.user._id,
        products: [
          { product: req.body.productId, quantity: req.body.quantity },
        ],
      });
      await newCart.save();
      return res.status(201).send(newCart);
    }
    cart.products.push({
      product: req.body.productId,
      quantity: req.body.quantity,
    });
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
});

// View Cart
router.get("/cart", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "products.product"
    );
    if (!cart) {
      return res.status(404).send("Cart is empty");
    }
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Remove from Cart
router.delete("/cart/:productId", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      return res.status(404).send("Cart not found");
    }
    cart.products = cart.products.filter(
      (item) => item.product.toString() !== req.params.productId
    );
    await cart.save();
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
