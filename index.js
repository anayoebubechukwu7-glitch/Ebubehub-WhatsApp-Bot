import 'dotenv/config';
import express from 'express';
import { handleIncoming } from './webhook.js';

const app = express();
app.use(express.json());

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) return res.status(200).send(challenge);
  return res.sendStatus(403);
});

app.post('/webhook', async (req, res) => {
  // Acknowledge quickly; process the message after WhatsApp receives the 200.
  res.sendStatus(200);
  try { await handleIncoming(req.body); }
  catch (error) { console.error('Webhook processing error:', error); }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`Ebubehub Bot listening on ${port}`));
