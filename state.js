// Demo scores are stored in memory and reset when the server restarts.
export const scores = new Map();

export function addWin(user, points = 1) {
  scores.set(user, (scores.get(user) || 0) + points);
}

export function leaderboard() {
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
}
