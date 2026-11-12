import { evaluate } from 'mathjs';

export function utilityCommand(command, args) {
  if (command === 'calc') {
    const expression = args.join(' ').trim();
    if (!expression || expression.length > 100) return 'Use .calc 12*(4+3).';
    try {
      const value = evaluate(expression);
      if (typeof value !== 'number' || !Number.isFinite(value)) {
        return 'Please enter a valid arithmetic expression.';
      }
      return `🧮 ${expression} = ${value}`;
    } catch {
      return 'Could not calculate that. Check the expression.';
    }
  }

  if (command === 'joke') return 'Why do programmers prefer dark mode? Because light attracts bugs. 🐛';
  if (command === 'ping') return '🏓 Pong! Ebubehub Bot is responding.';
  if (command === 'help' || command === 'menu') return menuText();
  if (command === 'define') {
    return args.length
      ? `Word: ${args.join(' ')}\\nDictionary lookup is not connected yet.`
      : 'Use .define word';
  }
  if (command === 'translate') {
    return 'Translation is not connected yet. Use .translate followed by text and target language.';
  }
  if (command === 'tagall') {
    return 'Group tagging is not enabled in this starter. Do not use mass mentions without group consent.';
  }
  if (command === 'sticker') {
    return 'Sticker conversion is not enabled yet. This starter currently handles text messages only.';
  }
  return null;
}

export function menuText() {
  return `🤖 *EBUBEHUB ULTIMATE BOT*

🎮 *GAMES*
.tictoe – Start Tic-Tac-Toe
.move 1-9 – Make a move
.quiz – Tech trivia
.answer B – Submit answer
.guess 1-5 – Number guessing
.rps rock/paper/scissors
.lb – Leaderboard

🛠️ *UTILITIES*
.calc 12*(4+3) – Calculator
.joke – Tech joke
.ping – Bot status
.define word – Dictionary placeholder
.translate – Translation placeholder
.sticker – Not enabled yet
.tagall – Not enabled
.help – Show this menu

Built with 💜 by Ebubehub`;
}
