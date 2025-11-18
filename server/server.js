// server.js (root of server folder)
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");
const paymentRoutes = require("./routes/payment");
const authRoutes = require("./routes/auth"); // if you create auth routes (recommended)

connectDB();

const app = express();

// Stripe webhook must read raw body, keep it exact path below
app.use((req, res, next) => {
  if (req.originalUrl === "/api/payment/stripe/webhook") {
    express.raw({ type: "application/json" })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});

// CORS + JSON
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes (mount paths)
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "ZAMANA Backend API Running",
    version: "1.0.0",
    time: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("✔ Server running on port:", PORT));
