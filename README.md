# QMOOSA Post-Quantum Hybrid TLS 1.3 Dashboard

Interactive Quantum-Safe Transport Security Dashboard implementing the **X25519MLKEM768** hybrid key exchange scheme (`0x11ec`) combining classical Curve25519 Diffie-Hellman with NIST FIPS 203 ML-KEM-768 lattice-based key encapsulation.

## Security Governance
- **Zero Cloud Spend Invariant**: $0.00 spent across all cloud and blockchain resources.
- **Production Lock Status**: Hard-locked at `0 / 1,000 CERTIFIED` (mainnet/public testnets locked).
- **HNDL Defense**: Defends against "Harvest Now, Decrypt Later" quantum adversary workflows.

## Verification
```bash
npm install
npm test
npm run lint
```
