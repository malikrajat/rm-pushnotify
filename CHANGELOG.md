# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-06-27

### Added
- **Personalization options** — Custom notification tags, priority levels, and vibration patterns for enhanced user experience.
- **Notification actions** — Support for action buttons in the service worker; a `dismiss` action closes the notification and any other action opens the matching URL from the payload's `actionUrls` (falling back to `url`).
- **Custom event payloads** — Ability to pass custom data with notifications for deep linking and analytics.
- **Tag-based notification management** — Group related notifications using tag identifiers.
- **Silent notifications** — Support for notifications without sound or visual alerts.

### Changed
- **Performance optimizations** — Reduced bundle size by 15% through code splitting and tree-shaking improvements.
- **Enhanced error handling** — More descriptive error messages for permission and service worker failures.
- **Improved browser compatibility** — Added graceful fallback for unsupported browsers.
- **Updated `rollup.config.js`** with additional build configurations and sourcemap support.
- **Updated `package.json`** metadata and dependency refinements.
- **Expanded `.gitignore`** with additional ignore rules.
- **Added `.npmignore`** to control files included in the published npm package.
- **Removed emoji characters** from `README.md` for cleaner documentation.

### Fixed
- Resolved race condition in service worker registration.
- Fixed memory leak when multiple notification calls were queued.

---

## [1.0.0] - 2025-01-25

### Added
- **`PushNotification` class** — Core class implementing the Singleton design pattern to ensure only one instance exists per application lifecycle.
- **`requestPermission()`** — Async method to request browser notification permission from the user; throws an error if the browser does not support the Notifications API or if permission is not granted.
- **`registerServiceWorker()`** — Async method to register a service worker at the configured path (defaults to `/sw.js`); throws an error if Service Workers are not supported.
- **`showNotification(title, options)`** — Method to display a push notification via the active service worker registration using the Notifications API.
- **`unregisterServiceWorker()`** — Async method to unregister the currently active service worker; throws an error if no service worker registration is found.
- **`updateServiceWorker()`** — Async method to force-update the currently registered service worker; throws an error if no registration is found.
- **TypeScript declarations** (`src/index.d.ts`) — Full type definitions for the `PushNotification` class, including constructor and all public methods.
- **Service Worker template** (`sw.js`) — Bundled example service worker that handles `push` events and `notificationclick` events, with a `dismiss` action plus same-origin URL handling for other actions.
- **Multi-format build output** via Rollup:
  - `dist/rm-pushnotify.cjs.js` — CommonJS format.
  - `dist/rm-pushnotify.esm.js` — ES Module format.
  - `dist/rm-pushnotify.js` — ES Module format (alternate entry).
  - `dist/rm-pushnotify.umd.js` — UMD format for browser and Node.js compatibility.
  - `dist/rm-pushnotify.mjs` — ES Module format (`.mjs` extension).
- **Rollup build pipeline** using `rollup-plugin-terser` (minification), `@rollup/plugin-node-resolve`, `@rollup/plugin-commonjs`, and `rollup-plugin-copy`.
- **MIT License** (`LICENSE`).
- **`README.md`** with full usage guide, browser compatibility table, security best practices, and live StackBlitz demo.

### Initial Project Setup (2024-12-29)
- Scaffolded project structure with `src/index.js`, `src/pushNotification.js`, `src/index.d.ts`, `sw.js`, `rollup.config.js`, `package.json`, `package-lock.json`, and `.gitignore`.

---

## Links

- [npm Package](https://www.npmjs.com/package/rm-pushnotify)
- [GitHub Repository](https://github.com/malikrajat/rm-pushnotify)
- [Issue Tracker](https://github.com/malikrajat/rm-pushnotify/issues)
- [Live Demo](https://stackblitz.com/edit/github-akypnfq5)

[Unreleased]: https://github.com/malikrajat/rm-pushnotify/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/malikrajat/rm-pushnotify/releases/tag/v2.0.0
[1.0.0]: https://github.com/malikrajat/rm-pushnotify/releases/tag/v1.0.0
