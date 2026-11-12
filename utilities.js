export function utilityCommand(command, args, messageText = '') {
  if (command === 'calc') {
    const expression = args.join('').trim();
    // Deliberately support only basic arithmetic characters; never eval user input.
    if (!expression || !/^[0-9+\\-*/().% ]+$/.test(expression)) return 'Use .calc 12*(4+3). Only basic arithmetic is supported.';
    try {
      const tokens = expression.match(/\\d+(?:\\.\\d+)?|[()+*/%\\-]/g) || [];
      if (tokens.join('') !== expression.replace(/\\s/g, '')) return 'Invalid calculator expression.';
      const value = Function(`"use strict"; return (${expression})`)();
      if (!Number.isFinite(value)) return 'That calculation is not finite.';
      return `🧮 ${expression} = ${value}`;
    } catch { return 'Could not calculate that. Check the expression.'; }
  }
  if (command === 'joke') return 'Why do programmers prefer dark mode? Because light attracts bugs. 🐛';
  if (command === 'ping') return '🏓 Pong! Ebubehub Bot is responding.';
  if (command === 'help' || command === 'menu') return menuText();
  if (command === 'define') return args.length ? `Word: ${args.join(' ')}\\nDictionary lookup can be connected in the next version.` : 'Use .define word';
  if (command === 'translate') return 'Translation service can be connected in the next version. Use .translate followed by text and target language.';
  if (command === 'tagall') return 'Group tagging needs group-admin permissions and a group-aware integration. This starter keeps it disabled until that is configured.';
  if (command === 'sticker') return 'To create a sticker, reply to an image or short video with .sticker. Media processing is not enabled in this starter yet.';
  return null;
}

export function menuText() {
  return `🤖 *EBUBEHUB ULTIMATE BOT*\\n\\n🎮 *GAMES*\\n.tictoe – Start Tic-Tac-Toe\\n.move 1-9 – Make a move\\n.quiz – Tech trivia\\n.answer B – Submit answer\\n.guess 1-5 – Number guessing\\n.rps rock/paper/scissors\\n.lb – Leaderboard\\n\\n🛠️ *UTILITIES*\\n.calc 12*(4+3) – Calculator\\n.joke – Tech joke\\n.ping – Bot status\\n.define word – Word helper\\n.translate – Translation placeholder\\n.sticker – Sticker placeholder\\n.tagall – Group tagging (admin setup required)\\n.help – Show this menu\\n\\nBuilt with 💜 by Ebubehub`;
}
