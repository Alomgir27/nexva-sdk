# Publishing Guide for nexva-react

## Prerequisites

1. Create an npm account at https://www.npmjs.com/signup
2. Login to npm in your terminal:
```bash
npm login
```

## Build and Test Locally

### 1. Build the package
```bash
cd nexva-react
npm install
npm run build
```

### 2. Test locally with npm link
```bash
# In nexva-react directory
npm link

# In your test Next.js project
npm link nexva-react
```

### 3. Test the package
Create a test Next.js app and try importing:
```tsx
import { NexvaChatNext } from 'nexva-react';
```

## Publishing to NPM

### 1. Update version in package.json
```json
{
  "version": "1.0.0"  // Update this
}
```

### 2. Build the package
```bash
npm run build
```

### 3. Publish to npm
```bash
npm publish --access public
```

## After Publishing

Users can install with:
```bash
npm install nexva-react
```

## Updating the Package

1. Make changes to src files
2. Update version in package.json (follow semver)
3. Build: `npm run build`
4. Publish: `npm publish`

## Version Guidelines (Semver)

- **Patch** (1.0.x): Bug fixes
- **Minor** (1.x.0): New features (backward compatible)
- **Major** (x.0.0): Breaking changes

Example:
```bash
npm version patch  # 1.0.0 → 1.0.1
npm version minor  # 1.0.1 → 1.1.0
npm version major  # 1.1.0 → 2.0.0
npm publish
```

## Testing Before Publish

Use `npm pack` to create a tarball and test installation:
```bash
npm pack
# This creates nexva-react-1.0.0.tgz

# In another project
npm install /path/to/nexva-react-1.0.0.tgz
```

