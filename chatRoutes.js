import express from "express";
const router = express.Router();

// Simple GET test
router.get("/", (req, res) => {
  res.json({ message: "Chat API working" });
});

// (Optional) store chat history here later

export default router;
