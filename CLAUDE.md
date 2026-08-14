# CLAUDE.md

Guidance for Claude Code working in **__NAME__**.

## What this is

__NAME__ (`__SLUG__`): <one paragraph — what the plugin does, its shape (engine + thin PHP shell / PHP-heavy / editor integration), and what it deliberately does NOT do.>

## Commands

Human scripts: `pnpm dev` (browser harness), `pnpm dev:plugin` (WP plugin loop, needs `DEV_TARGET` in `.env`), `pnpm build`, `pnpm test`, `pnpm test:coverage`, `pnpm release <spec>`.

Everything else via `pnpm exec`: `biome check --write .`, `tsc --noEmit`, `stylelint 'src/styles/**/*.scss'`, `vendor/bin/phpstan analyse --memory-limit=1G`, `vendor/bin/phpcs` / `vendor/bin/phpcbf`, `knip`, `fallow`, `arts-wp <cmd>`. Build/release/changelog/blueprint mechanics are documented in the tooling package — https://github.com/artkrsk/wp-plugin-tooling — not here.

`composer.json` is the single version/meta source; `arts-wp` stamps the plugin header, readme.txt, and package.json — never hand-edit stamped fields. `Requires Plugins` is the one hand-maintained header line.

Hooks: lefthook pre-commit (format + typecheck, auto-fixes re-staged) and pre-push (vitest, phpstan, phpcs). Advisory — CI is the authoritative gate (thin callers of artkrsk/wordpress-plugin-workflows).

## Config gotchas

- **`biome.json` is NOT JSONC — comments make it invalid.** Biome then falls back to its built-in defaults and silently reformats the whole tree (tabs, double quotes, semicolons), including files your `files.includes` was meant to protect. `biome check` does report the parse error, so read its output rather than tailing it. `knip.jsonc` and `.fallowrc.jsonc` *do* take comments; use them for per-entry reasoning.
- **Adopting a shared config means merging it, not replacing it.** Repo-specific entries hide in these files — a security `overrides` pin, a plugin-check ignore code, an extra workflow trigger. Diff the old file against the new one before deleting anything; CI will not tell you what you dropped.
- **Any dependency with an install script needs an explicit `allowBuilds` decision.** pnpm only warns locally but fails CI. Adding `@wordpress/env` is the usual trigger — see the commented entry in `pnpm-workspace.yaml`.

## Architecture

<filled in as the plugin grows: composition root, load pipeline, module map — one line each.>

## Frozen contracts (never rename after first release)

<namespace, text domain, public CSS classes/attributes, hook names, option keys.>

## Decided — don't reintroduce or "fix"

<decisions with rationale, added as they happen.>

## Gotchas

<hard-won, traced-to-source facts. Never answer third-party questions from training data — route Elementor internals to the elementor-backend/elementor-frontend agents, WP core to wordpress-internals, library docs to context7.>
