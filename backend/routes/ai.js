const express = require('express');
const { answer } = require('../services/brain');

const router = express.Router();

// POST /api/ai/chat  { "message": "..." }  →  { reply, source }
router.post('/chat', async (req, res) => {
  const message = (req.body && req.body.message ? String(req.body.message) : '').trim();
  if (!message) {
    return res.status(400).json({ error: 'Please send a message.' });
  }
  const result = await answer(message);
  res.json(result);
});

module.exports = router;