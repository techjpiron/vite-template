/* eslint-env node */
module.exports = {
  "*.{js,ts,jsx,tsx}": ["eslint --max-warnings=0", "prettier --write"],
  "*.{html,md,css,json}": ["prettier --write"],
}
