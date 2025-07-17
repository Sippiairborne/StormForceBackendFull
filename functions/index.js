const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const claimsRoutes = require("./routes/claims");
const stripeController = require("./controllers/stripeController");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/claims", claimsRoutes);
app.use("/api/stripe", stripeController);

// Export Firebase Function
exports.api = functions.https.onRequest(app);

