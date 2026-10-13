// Standalone pricing test runner (Node ESM).
// Run with: npm run test:pricing

import { pricingTestCases, calculatePackageSubtotal } from './pricing.js';

let passed = 0;
let failed = 0;

console.log('\nPricing utility test cases\n' + '='.repeat(40));

for (const tc of pricingTestCases) {
  const result = calculatePackageSubtotal(tc.input);
  const ok = Math.abs(result.subtotal - tc.expected) < 0.001;
  if (ok) passed++;
  else failed++;

  const status = ok ? 'PASS' : 'FAIL';
  console.log(
    `[${status}] ${tc.name}\n        expected ${tc.expected}, got ${result.subtotal}`
  );
}

console.log('='.repeat(40));
console.log(`Total: ${passed + failed}  Passed: ${passed}  Failed: ${failed}\n`);

if (failed > 0) process.exit(1);
