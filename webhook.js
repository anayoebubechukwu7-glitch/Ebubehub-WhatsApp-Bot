import { sendText } from './whatsapp.js';
import { gameCommand } from './games.js';
import { utilityCommand } from './utilities.js';

export async function handleIncoming(payload) {
  for (const entry of payload.entry || []) {
    for (const change of entry.changes || []) {
      for (const message of change.value?.messages || []) {
        if (message.type !== 'text') continue;

        const from = message.from;
        const body = message.text?.body?.trim() || '';
        if (!body.startsWith('.')) continue;

        const [rawCommand, ...args] = body.slice(1).split(/\\s+/);
        const command = rawCommand.toLowerCase();
        const reply = gameCommand(from, command, args) ?? utilityCommand(command, args);
        if (reply) await sendText(from, reply);
      }
    }
  }
}
