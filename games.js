import { startTicTacToe, moveTicTacToe } from '../games/tictactoe.js';
import { addWin, leaderboard } from '../games/state.js';

export function gameCommand(user, command, args) {
  if (command === 'tictoe') return startTicTacToe(user);
  if (command === 'move') return moveTicTacToe(user, args[0]);
  if (command === 'lb') {
    const rows = leaderboard();
    return rows.length ? '🏆 EBUBEHUB LEADERBOARD\\n' + rows.map(([u,s],i) => `${i+1}. ${u}: ${s} pts`).join('\\n') : 'No scores yet. Play a game first!';
  }
  if (command === 'guess') {
    const n = Number(args[0]);
    if (!Number.isInteger(n) || n < 1 || n > 5) return 'Guess a number from 1 to 5: .guess 3';
    const answer = Math.floor(Math.random() * 5) + 1;
    if (n === answer) { addWin(user); return `🎉 Correct! It was ${answer}. +1 point.`; }
    return `Not quite! The number was ${answer}. Try again with .guess 1-5.`;
  }
  if (command === 'rps') {
    const choice = (args[0] || '').toLowerCase();
    if (!['rock','paper','scissors'].includes(choice)) return 'Use .rps rock, .rps paper, or .rps scissors.';
    const bot = ['rock','paper','scissors'][Math.floor(Math.random()*3)];
    const win = choice === bot ? 'Tie!' :
      ((choice === 'rock' && bot === 'scissors') || (choice === 'paper' && bot === 'rock') || (choice === 'scissors' && bot === 'paper')) ? 'You win! +1 point.' : 'Bot wins this round.';
    if (win.startsWith('You win')) addWin(user);
    return `You: ${choice}\\nBot: ${bot}\\n${win}`;
  }
  if (command === 'quiz') return '🧠 Tech Quiz: Which language runs natively in web browsers?\\nA) Python  B) JavaScript  C) C++  D) Java\\nReply .answer B';
  if (command === 'answer') return args[0]?.toUpperCase() === 'B' ? (addWin(user), 'Correct! JavaScript runs natively in browsers. +1 point.') : 'Not quite. The answer is B) JavaScript.';
  return null;
}
