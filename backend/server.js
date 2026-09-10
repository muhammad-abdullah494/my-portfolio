const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// 🔧 EDIT 1: Import the AI waiter
const aiRouter = require('./routes/ai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Chrome DevTools automatic request handler
// This prevents the browser from showing a 404 for this Chrome-specific file.
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(204).end();
});

// Root route
app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; padding: 24px;">
      <h1>Muhammad Abdullah Portfolio API</h1>
      <p>Backend server is running successfully.</p>
      <p>Health check: <a href="/api/health">/api/health</a></p>
    </div>
  `);
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Portfolio backend is running'
  });
});

// 🔧 EDIT 2: Replace placeholder with the real AI router
app.use('/api/ai', aiRouter);

// 404 handler for unknown API routes
app.use((req, res) => {
  res.status(404).json({
    
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Local development vs Vercel production
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel
module.exports = app;;