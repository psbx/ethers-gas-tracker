# ethers-gas-tracker

TypeScript utilities for formatting Ethereum gas prices and estimating transaction costs using `ethers` v6.

## Features
- Normalise gas price responses into gwei strings.
- Estimate total wei cost for simple transfers at a given gas limit.
- Includes lightweight Vitest coverage without requiring a live provider.

## Usage
```bash
npm install
echo "42" | node dist/example.js
```

## Development
```bash
npm install
npm test
```
