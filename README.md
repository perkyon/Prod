# Prod

## Modern Furniture Workshop Site

Original design: https://www.figma.com/design/WRlIkVmgrPstu3rUV6B1we/Modern-Furniture-Workshop-Site

## Running the code

```bash
npm install
npm run dev
```

## Tests
```bash
npm test
```

## Deployment (GitHub Pages)
Repo: https://github.com/perkyon/Prod
Site: https://perkyon.github.io/Prod/

### Workflow
GitHub Actions workflow `.github/workflows/deploy.yml` builds on push to `main` (or `master`) and publishes `build/` to Pages.

### First-time setup
1. Ensure Pages Source = GitHub Actions.
2. Push / merge to `main`.
3. Check Actions tab for deploy status.

### Local production preview
```bash
npm run build:gh
npm run preview
```

### Troubleshooting
- 404 assets: base path mismatch; rebuild with `npm run build:gh`.
- Caching: hard refresh (Cmd+Shift+R).
- Stale deploy: rerun workflow.

