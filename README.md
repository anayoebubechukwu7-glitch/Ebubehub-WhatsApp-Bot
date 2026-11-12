# Ebubehub WhatsApp Bot

A Node.js starter for the official WhatsApp Cloud API. All source files are kept in the repository root, so you can upload them one by one from an Android phone.

## Included commands

- `.help` / `.menu`
- `.tictoe` and `.move 1-9`
- `.quiz` and `.answer B`
- `.guess 1-5`
- `.rps rock|paper|scissors`
- `.lb`
- `.calc 12*(4+3)`
- `.joke`
- `.ping`

`.define` and `.translate` are placeholders. Sticker conversion and group tagging are not enabled. Scores are kept in memory and reset when the server restarts.

## Requirements

- Node.js 18 or newer
- A hosting service that supports a persistent Node.js web server
- WhatsApp Cloud API credentials from Meta

## Run locally

1. Install Node.js.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and fill in your own values.
4. Run `npm start`.

Never upload `.env` or share your WhatsApp access token. Keep credentials private.

## Webhook

Set the callback URL to `https://YOUR-HOST/webhook`, use the same `VERIFY_TOKEN` value in your hosting environment and Meta webhook settings, and subscribe to the `messages` webhook field.

Use the official WhatsApp Cloud API. Account setup and business eligibility requirements must be followed; ask a parent or guardian to help with any account that requires an adult.
