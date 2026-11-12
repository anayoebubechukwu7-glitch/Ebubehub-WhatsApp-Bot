const games = new Map();

function boardText(board) {
  return board.map((v, i) => v || String(i + 1)).reduce((s, v, i) => s + v + (i % 3 === 2 ? '\\n' : ' | '), '');
}
function winner(b) {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a,c,d] of lines) if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  return b.every(Boolean) ? 'draw' : null;
}
export function startTicTacToe(user) {
  games.set(user, { board: Array(9).fill(''), turn: 'X' });
  return 'Tic-Tac-Toe started! You are X. Send .move 1-9.\n' + boardText(games.get(user).board);
}
export function moveTicTacToe(user, n) {
  const game = games.get(user);
  if (!game) return 'No active game. Send .tictoe to start.';
  const i = Number(n) - 1;
  if (!Number.isInteger(i) || i < 0 || i > 8) return 'Choose a square from 1 to 9.';
  if (game.board[i]) return 'That square is occupied. Choose another.';
  game.board[i] = game.turn;
  const result = winner(game.board);
  const display = boardText(game.board);
  if (result) {
    games.delete(user);
    return result === 'draw' ? `Draw!\n${display}` : `${result} wins!\n${display}`;
  }
  game.turn = game.turn === 'X' ? 'O' : 'X';
  return `${display}\n${game.turn}'s turn. Send .move 1-9.`;
}
