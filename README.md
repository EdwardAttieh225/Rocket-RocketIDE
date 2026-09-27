# Rocket & RocketIDE website

Published at https://ryaneid06.github.io/Rocket-RocketIDE/ using GitHub Pages.

Downloads are GitHub Release assets from the saved v3.0.0 release:
- RocketIDE 1.0.0: Windows x64 portable ZIP, including RocketIDE.exe and its runtime/debugger files.
- Rocket 3.0.0 SDK: Windows x64, Linux x64, Linux ARM64, and macOS Apple Silicon ARM64.

There are no Linux/macOS RocketIDE packages or Intel macOS SDK in this release. All downloads include real SHA-256 hashes in public/downloads.json and the release SHA256SUMS.txt. Rocket's compiler is named rocketc.exe on Windows and rocketc on POSIX systems.

Use Node.js 24 and npm. Run npm ci --legacy-peer-deps, npm run lint, and npm run build. The main branch deploys through .github/workflows/deploy.yml. Download URLs and display metadata live in src/data/rocketData.ts.

The SDK transfer workflow verifies native CI run 36304020122 at Rocket commit 1f6ba76f16f3246095d5d573c28d825d8b9367e3 before attaching its existing packages to the draft. Published downloads are independently fetched and hashed by the verification workflow.
