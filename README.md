# Ebubehub Ultimate WhatsApp Bot

A free-to-start Node.js starter using the **official WhatsApp Cloud API**. It includes working text commands for Tic-Tac-Toe, number guessing, Rock-Paper-Scissors, a simple tech quiz, leaderboard, calculator, jokes and help menu.

## Requirements
- Node.js 20+
- A Meta developer app with WhatsApp Cloud API configured
- A public HTTPS webhook URL (for example, a Node hosting service)

## Run locally
1. Install Node.js on a computer or use a Node.js-capable cloud workspace.
2. Copy `.env.example` to `.env` and fill in the Meta values.
3. Run `npm install`.
4. Run `npm start`.
5. Expose port 3000 through a secure HTTPS tunnel for webhook testing.
6. In the Meta WhatsApp configuration, set the callback URL to `https://YOUR-HOST/webhook` and the verify token to the exact `VERIFY_TOKEN` value. Subscribe to the `messages` webhook field.

## Deploy
Deploy this repository as a Node.js web service on a host that supports persistent Node processes and HTTPS. Set the environment variables in the host dashboard; do not upload `.env` or paste tokens into source code. Set the start command to `npm start`.

## Commands
- `.help` / `.menu`
- `.tictoe`, then `.move 1` through `.move 9`
- `.quiz`, then `.answer B`
- `.guess 1` through `.guess 5`
- `.rps rock`, `.rps paper`, `.rps scissors`
- `.lb`
- `.calc 12*(4+3)`
- `.joke`, `.ping`, `.define word`, `.translate text`

## Important notes
- This is a starter, not a finished commercial bot. The leaderboard and game sessions are stored in memory and reset when the server restarts. Add a database for persistent scores.
- The sticker command currently replies with setup guidance; image/video download and sticker conversion still need to be implemented.
- Group tagging is deliberately disabled pending group-aware integration and admin checks.
- Tetris, 2048, Sonic and Geometry Dash are not included as playable WhatsApp chat games in this first starter. They need a browser game page or separate licensed game integration.
- Never commit `.env`. Rotate any token that is accidentally exposed.
- Use the official WhatsApp Cloud API and comply with Meta's messaging rules. Message templates and the 24-hour customer-service window may apply.
