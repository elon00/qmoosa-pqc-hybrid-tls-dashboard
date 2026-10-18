import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '..', 'public', 'index.html');

test('Dashboard: HTML Static Invariants and Security Guardrails', () => {
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Verify Named Group & Codepoint
  assert.ok(html.includes('X25519MLKEM768'), 'Must display named group X25519MLKEM768');
  assert.ok(html.includes('0x11ec'), 'Must display IETF group codepoint 0x11ec');

  // Verify Exact Wire Sizes
  assert.ok(html.includes('1,216 B'), 'ClientKeyShare total size (1,216 B)');
  assert.ok(html.includes('1,120 B'), 'ServerKeyShare total size (1,120 B)');
  assert.ok(html.includes('64 B'), 'Combined shared secret size (64 B)');

  // Verify Component Algorithms
  assert.ok(html.includes('X25519'), 'Must mention classical X25519');
  assert.ok(html.includes('ML-KEM-768'), 'Must mention NIST FIPS 203 ML-KEM-768');
  assert.ok(html.includes('AES-256-GCM'), 'Must mention AES-256-GCM record layer');

  // Verify Harvest Now, Decrypt Later (HNDL) Threat Mitigation
  assert.ok(html.includes('Harvest Now, Decrypt Later'), 'Must document HNDL threat mitigation');
  assert.ok(html.includes("Shor's Algorithm"), "Must reference Shor's Algorithm breaking classical ECDH");

  // Verify Production Certification Lock
  assert.ok(
    html.includes('DEPLOYMENT: LOCKED (0/1,000 CERTIFIED)'),
    'Must display persistent mainnet deployment lock badge'
  );

  // Verify Zero Cloud Spend Guardrail
  assert.ok(html.includes('ZERO GAS & ZERO CLOUD SPEND'), 'Must display zero spend invariant');
});
