# __NAME__

[![Tests](https://img.shields.io/github/actions/workflow/status/artkrsk/__SLUG__/test.yml?style=flat-square&logo=githubactions&logoColor=white&label=tests)](https://github.com/artkrsk/__SLUG__/actions/workflows/test.yml)
[![WordPress](https://img.shields.io/badge/WordPress-6.0+-21759b?style=flat-square&logo=wordpress&logoColor=white)](https://wordpress.org)
[![PHP](https://img.shields.io/badge/PHP-8.0+-777bb4?style=flat-square&logo=php&logoColor=white)](https://www.php.net)
<!-- Once live on wp.org, add the self-updating listing badges:
[![Version](https://img.shields.io/wordpress/plugin/v/__SLUG__?style=flat-square)](https://wordpress.org/plugins/__SLUG__/)
[![Installs](https://img.shields.io/wordpress/plugin/installs/__SLUG__?style=flat-square)](https://wordpress.org/plugins/__SLUG__/)
[![Rating](https://img.shields.io/wordpress/plugin/rating/__SLUG__?style=flat-square)](https://wordpress.org/plugins/__SLUG__/reviews/)
And the Codecov badge once coverage upload is enabled. -->

__NAME__ — part of the free plugin collection at [artemsemkin.com/plugins/__SLUG__/](https://artemsemkin.com/plugins/__SLUG__/).

## Install

From [WordPress.org](https://wordpress.org/plugins/__SLUG__/), or grab the zip from [Releases](https://github.com/artkrsk/__SLUG__/releases).

Requires WordPress 6.0+, PHP 8.0+, and [Elementor](https://wordpress.org/plugins/elementor/).

## Development

```bash
git clone https://github.com/artkrsk/__SLUG__.git
cd __SLUG__
pnpm install && composer install
cp .env.example .env   # set DEV_TARGET to your Local site's plugin dir
```

| Command | What |
|---|---|
| `pnpm dev` | browser harness (Vite playground) |
| `pnpm dev:plugin` | watch-compile + mirror the plugin to `DEV_TARGET` |
| `pnpm build` | release build into `dist/` |
| `pnpm test` / `pnpm test:coverage` | Vitest |
| `pnpm release <patch\|minor\|major>` | bump, stamp, validate changelog, commit, tag |

Everything else (lint, typecheck, phpstan, phpcs, knip, fallow, blueprint, doctor) runs via `pnpm exec` — see the [tooling docs](https://github.com/artkrsk/wp-plugin-tooling).

## Release

Hand-write the readme.txt changelog entry, `pnpm release patch`, push the tag. CI validates and ships.

## License

GPL-3.0-or-later.
