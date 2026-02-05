module.exports = {
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "bash -c 'pnpm typecheck'",
  ],
  "*.{json,md,css}": ["prettier --write"],
};
