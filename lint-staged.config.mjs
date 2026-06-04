const config = {
  '*.{js,jsx,ts,tsx,mjs,cjs}': ['prettier --write', 'eslint --fix'],
  '*.{json,md,yml,yaml,css,scss}': ['prettier --write'],
  '*.{ts,tsx}': () => 'vitest related --run',
}

export default config
