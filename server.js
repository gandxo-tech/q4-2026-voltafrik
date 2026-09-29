import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle demo newsletter / Netlify Forms fallback POST
app.post('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Inscription confirmée' });
});

// Serve static assets and index.html
app.use(express.static(__dirname));

// Fallback to index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`VoltAfrik app server running on http://${HOST}:${PORT}`);
});
