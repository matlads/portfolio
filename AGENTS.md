# Agent Guidelines for Portfolio Project

This document provides guidelines for AI agents working on this React + Vite portfolio project. It includes build commands, code style conventions, and project-specific patterns.

## Overview

- **Framework**: React 19 with Vite
- **Language**: JavaScript (ES modules) with JSX
- **Linting**: ESLint with React plugins
- **Formatting**: No Prettier configured (rely on ESLint)
- **Testing**: No test framework configured currently
- **Pre-commit hooks**: Basic git hooks for whitespace, YAML, large files
- **Deployment**: GitHub Pages via `gh-pages`

## Project Commands

### Development
```bash
npm run dev          # Start development server (Vite)
```

### Building
```bash
npm run build        # Build for production (outputs to `dist/`)
npm run preview      # Preview production build locally
```

### Linting
```bash
npm run lint         # Run ESLint on all .js and .jsx files
npm run lint -- --fix # Fix auto-fixable issues
```

**Note**: The lint command uses zero warnings tolerance (`--max-warnings 0`). All lint errors must be fixed before committing.

**ESLint Version**: ESLint is pinned to version 8 (^8.0.0) because the configuration uses the legacy `.eslintrc.cjs` format. The `react-refresh/only-export-components` rule is currently commented out due to plugin compatibility.

### Deployment
```bash
npm run predeploy    # Runs `npm run build`
npm run deploy       # Deploys `dist/` to GitHub Pages via gh-pages
```

### Single File Linting
```bash
npx eslint path/to/file.jsx --ext .js,.jsx
```

## Code Style Guidelines

### Imports
- Use ES module `import` syntax.
- Group imports: React first, then external libraries, then internal modules, then CSS.
- Example from `src/App.jsx`:
  ```jsx
  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  ```

### Naming Conventions
- **Components**: PascalCase (e.g., `App`, `MyComponent`)
- **Functions/Variables**: camelCase (e.g., `handleClick`, `userCount`)
- **Constants**: UPPER_SNAKE_CASE if truly constant (not enforced)
- **Files**: kebab-case for non-component files, PascalCase for component files (`.jsx`)

### React Components
- Use function components (no class components).
- Use React hooks (`useState`, `useEffect`, etc.) as needed.
- Export default component at bottom of file.
- Use JSX fragments (`<>...</>`) for multiple root elements.

### Error Handling
- No specific error handling patterns observed. Use standard `try/catch` for async operations.

### ESLint Rules
The `.eslintrc.cjs` extends:
- `eslint:recommended`
- `plugin:react/recommended`
- `plugin:react/jsx-runtime` (for React 17+ JSX transform)
- `plugin:react-hooks/recommended`

Specific rules:
- `react-refresh/only-export-components`: Warns if non-component exports are present in files that could be hot‑reloaded. (Currently commented out in `.eslintrc.cjs` due to ESLint version compatibility)

### Formatting
- Indentation: 2 spaces (inferred from source files).
- Semicolons: Yes (ESLint recommended).
- Quotes: Single quotes (observed in imports).
- JSX props: Use double quotes for strings (`className="logo"`).
- Line length: No explicit limit.

## Testing

**No test framework is currently configured.** To add tests, consider:

1. **Vitest** (integrates with Vite) – recommended for new tests.
2. **React Testing Library** for component testing.

If tests are added, update this section with commands like:
```bash
npm test             # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

## Pre‑commit Hooks

The `.pre-commit-config.yaml` runs these hooks on `git commit`:

1. `trailing-whitespace` – removes trailing whitespace.
2. `end-of-file-fixer` – ensures files end with a newline.
3. `check-yaml` – validates YAML files.
4. `check-added-large-files` – prevents accidentally committing large files.

**Note**: Hooks run automatically; ensure your changes pass them.

## Editor Configuration

No `.editorconfig` or `.prettierrc` present. Align with ESLint rules.

Recommended VS Code settings (`.vscode/settings.json`):
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ],
  "files.eol": "\n"
}
```

## Deployment Notes

- The project is configured for GitHub Pages with base path `/portfolio/` (see `vite.config.js`).
- The `homepage` field in `package.json` points to `https://matlads.github.io/portfolio/`.
- Deployment is triggered via `npm run deploy` (builds and pushes to `gh-pages` branch).

## Workflow for Agents

1. **Before making changes**: Run `npm run lint` to ensure no existing issues.
2. **After changes**: Verify linting passes and pre‑commit hooks succeed.
3. **If adding new dependencies**: Update `package.json` and run `npm install`.
4. **If modifying build configuration**: Test with `npm run build` and `npm run preview`.
5. **If adding tests**: Configure test framework and update this guide.

## Missing Conventions

- No TypeScript (pure JavaScript).
- No state‑management library (React state only).
- No CSS framework (plain CSS + CSS modules).
- No internationalization setup.
- No Cursor rules (`.cursorrules` or `.cursor/` directory).
- No GitHub Copilot instructions (`.github/copilot-instructions.md`).

## Contributing

Follow the existing patterns in `src/App.jsx` and `src/main.jsx`. Keep components small, focused, and reusable where appropriate.

---

*Last updated: April 2026*
*This file is intended for AI agents working on the repository.*
