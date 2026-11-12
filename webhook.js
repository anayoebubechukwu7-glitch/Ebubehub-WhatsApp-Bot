import { sendText } from './whatsapp.js';
import { gameCommand } from './commands/games.js';
import { utilityCommand } from './commands/utilities.js';

export async function handleIncoming(payload) {
  const entries = payload.entry || [];
  for (const entry of entries) {
    for (const change of (entry.changes || [])) {
      const messages = change.value?.messages || [];
      for (const message of messages) {
        if (message.type !== 'text') continue;
        const from = message.from;
        const text = message.text?.body?.trim() || '';
        if (!text.startsWith('.')) continue;
        const [rawCommand, ...args] = text.slice(1).split(/\\s+/);
        const command = rawCommand.toLowerCase();
        const reply = gameCommand(from, command, args) ?? utilityCommand(command, args, text);
        if (reply) await sendText(from, reply);
      }
    }
  }
}
