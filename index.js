const express = require('express');
const router = express.Router();

// Default route (homepage)
router.get('/', (req, res) => {
  res.send('Welcome to the DevOps Activity App 🚀');
});

module.exports = router;
