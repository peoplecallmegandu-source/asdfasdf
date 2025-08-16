/* Simple Express server to serve static site and accept form submissions */
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Simulated endpoints
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body || {};
  if (!email || !/\S+@\S+\.\S+/.test(email)) return res.status(400).json({ success: false, message: 'Invalid email' });
  // In production: save to DB or send to provider
  console.log('New subscriber:', email);
  return res.json({ success: true });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ success: false, message: 'Missing fields' });
  // In production: send an email/ save to DB
  console.log('Contact form:', { name, email, message });
  return res.json({ success: true });
});

// Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
