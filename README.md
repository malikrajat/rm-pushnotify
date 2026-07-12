
# PushNotification Library 

<p align="left">
  <img src="https://img.shields.io/npm/v/rm-pushnotify.svg" alt="npm version">
  <img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/Standalone-supported-success" alt="Standalone API">
  <img src="https://img.shields.io/badge/SSR-compatible-success" alt="SSR compatible">
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="Strict TS">
  <img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
  <img src="https://img.shields.io/badge/Side%20Effects-none-blue" alt="No side effects">
  <img src="https://img.shields.io/badge/Linting-enabled-success" alt="Linting">
  <img src="https://img.shields.io/badge/Tests-covered-blue" alt="Tests">
  <img src="https://img.shields.io/badge/Coverage-90%25-success" alt="Coverage">
  <img src="https://img.shields.io/badge/A11y-WCAG%202.1-blue" alt="Accessibility compliant">
  <img src="https://img.shields.io/badge/Maintained-yes-success" alt="Maintained">
  <img src="https://img.shields.io/bundlephobia/minzip/rm-pushnotify" alt="minzipped size">
  <img src="https://img.shields.io/badge/Dependencies-none-success" alt="No dependencies">
  <img src="https://img.shields.io/npm/dw/rm-pushnotify" alt="weekly downloads">
  <img src="https://img.shields.io/badge/SemVer-compliant-blue" alt="SemVer">
  <img src="https://img.shields.io/npm/dt/rm-pushnotify" alt="total downloads">
  <img src="https://img.shields.io/npm/last-update/rm-pushnotify" alt="Last update">
  <img src="https://img.shields.io/github/issues/malikrajat/rm-pushnotify" alt="Open issues">
  <img src="https://img.shields.io/github/stars/malikrajat/rm-pushnotify" alt="GitHub stars">
</p>


## See It In Action

<div align="center">

  <img src="https://github.com/malikrajat/rm-pushnotify/blob/main/assets/demo.png" alt="rm-pushnotify Demo" width="800"/>

  <br/>

  <img src="https://github.com/malikrajat/rm-pushnotify/blob/main/assets/demo-1.png" alt="rm-pushnotify Demo" width="800"/>



</div>

---

<p align="left">

The **PushNotification Library** is a lightweight, easy-to-use JavaScript library that simplifies the process of managing browser notifications and service workers. Whether you're a beginner or an experienced developer, this library makes it straightforward to integrate notifications into your web application.

</div>

---

## Live Demo & Playground

<div align="center">

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/github-akypnfq5" target="_blank">
        <img src="https://img.shields.io/badge/StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="#usage">
        <img src="https://img.shields.io/badge/Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <br/>
      <a href="https://www.npmjs.com/package/rm-pushnotify" target="_blank">
        <img src="https://img.shields.io/badge/npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <br/>
      <a href="https://github.com/malikrajat/rm-pushnotify" target="_blank">
        <img src="https://img.shields.io/badge/GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>

---

## Features

- **Singleton Design Pattern**: Ensures only one instance of the library is created.
- **Service Worker Management**: Register, unregister, and update service workers effortlessly.
- **Easy Notification Display**: Customize notifications with titles, icons, and more.
- **Cross-Browser Compatibility**: Works with modern browsers supporting Service Workers and Notifications API.
- **Lightweight**: Minimal setup and fast performance.

---

## Installation

Install the library via npm or yarn:

```bash
  npm install rm-pushnotify
  # or
  yarn add rm-pushnotify
```

---

<div id="#usage"></div>

## Usage Guide

### Before you start

Notifications and service workers are browser-only APIs. Call this library from a user action (for example, a button click), not during server-side rendering or application startup. Production sites must use HTTPS; `localhost` is treated as a secure context for local development.

The service worker must be served from the same origin at `/sw.js`. The supplied worker is available after installation at `node_modules/rm-pushnotify/dist/sw.js`.

### Add the service worker to your app

The package already includes a ready-to-use service worker. For the normal setup, **copy the included file**; you do not need to write a new `sw.js` file.

Most Angular and React projects already have a `public` directory. If it exists, only run the copy command; do **not** create it again.

| Project | Destination | Served URL |
| --- | --- | --- |
| Angular (current CLI) | `public/sw.js` | `/sw.js` |
| React (Vite/Create React App) | `public/sw.js` | `/sw.js` |
| Vanilla JavaScript | Web-server root as `sw.js` | `/sw.js` |

**Windows Command Prompt**

```cmd
copy node_modules\rm-pushnotify\dist\sw.js public\sw.js
```

**Windows PowerShell**

```powershell
Copy-Item node_modules\rm-pushnotify\dist\sw.js public\sw.js
```

**Linux/macOS**

```bash
cp node_modules/rm-pushnotify/dist/sw.js public/sw.js
```

If your project has no `public` directory, create it first:

```bash
mkdir -p public
```

On Windows Command Prompt, use `mkdir public`. Older Angular projects may instead require adding `public/sw.js` to the `assets` section of `angular.json`, with output `/`.

#### If the copy command fails

`Access denied` or `Permission denied` means your user account cannot write to the target folder. Confirm that `public/` is inside your project, close any program locking `sw.js`, and use an account/editor that has permission to edit the project. Do not copy the worker outside the project or register it from another domain.

You can then use the manual fallback below; it does not change the required file location.

#### No-command fallback: copy the file manually

If you cannot use terminal commands, you can copy the file with your file manager or IDE:

1. Open your project's `node_modules/rm-pushnotify/dist` folder.
2. Copy the file named `sw.js`.
3. Open your app's existing `public` folder. Create a `public` folder in the project root only if it does not exist.
4. Paste the file there and confirm its name is exactly `sw.js`, not `sw.js.txt`.
5. Start or restart the development server, then open `http://localhost:<port>/sw.js` in a browser. You should see the JavaScript file, not an HTML 404 page.

For a plain JavaScript site without a `public` folder, put `sw.js` beside the site's `index.html` or wherever your web server's document root is configured. The final URL must still be `/sw.js`.

> **Tip:** Do not place the worker in `src/`, `assets/`, or a nested folder unless your build/server configuration exposes it at `/sw.js`. A service worker can only control pages within its registered scope.

### Quick integration checklist

1. Install the package: `npm install rm-pushnotify`.
2. Put the included `sw.js` at your deployed app root (`/sw.js`) using either the copy command or the manual fallback above.
3. Create one instance: `const pushNotification = new PushNotification('/sw.js');`.
4. From a button click, request permission, register the worker, then show a notification.
5. In production, serve the app over HTTPS.

### Import the Library

```javascript
import PushNotification from 'rm-pushnotify';
```

### Initialize the PushNotification Instance

```javascript
const pushNotification = new PushNotification('/sw.js');
```

### Request Notification Permission

```javascript
// Call this from a click/tap handler so the browser can display its prompt.
await pushNotification.requestPermission();
```

When the browser asks, choose **Allow** to continue. If you choose **Block**, the library rejects with `Permission not granted for Notification`. You can reset a blocked decision from the browser's site settings, then try again.

#### When no permission popup appears

This can be normal browser behavior. Browsers control notification prompts and may show a quiet prompt, a notification/bell icon, or a site-permission indicator in the address bar instead of a large popup. The library cannot force a browser to show a popup.

First, make sure `requestPermission()` is called directly from a click or tap handler. Then check the current permission state:

```javascript
console.log(Notification.permission);
// "default" = no decision yet
// "granted" = notifications are allowed
// "denied" = notifications are blocked
```

If the browser shows an address-bar icon, click it and choose **Allow** for notifications. If no icon is visible or the request was previously blocked, update the site's permission using the browser controls:

- **Chrome / Edge:** click the site-controls icon or padlock to the left of the address bar, open site permissions/settings, and set **Notifications** to **Allow**. Some versions use quiet notification prompts, which intentionally appear as a smaller address-bar indicator.
- **Firefox:** click the notification/permissions icon in the address bar. You can also click the padlock, open site information, then set **Send Notifications** to **Allow**. Firefox may leave the request as an address-bar icon until the user interacts with the page.
- **Safari on macOS:** open **Safari > Settings > Websites > Notifications**, find the site, and select **Allow**. Also check the macOS notification settings for the website.

After changing a permission, reload the page and click the application's notification button again. Browser menus change over time, so use the official browser guides for the current steps: [Firefox](https://support.mozilla.org/en-US/kb/push-notifications-firefox) and [Safari](https://support.apple.com/guide/safari/customize-website-notifications-sfri40734/mac).

### Register the Service Worker

```javascript
const registration = await pushNotification.registerServiceWorker();
```

### Show Notifications

```javascript
await pushNotification.showNotification('Hello, World!', {
    body: 'This is a test notification!',
    icon: '/path-to-icon/icon.png',
});
```

### Notification action buttons

Yes. Pass an `actions` array to `showNotification()`. Each action has an internal `action` ID and the button text shown to the user. The included `sw.js` closes a `dismiss` action and opens a URL for every other action.

```javascript
await pushNotification.showNotification('New order received', {
  body: 'Order #1024 is ready to review.',
  actions: [
    { action: 'view-order', title: 'View order' },
    { action: 'dismiss', title: 'Dismiss' },
  ],
  data: {
    url: '/orders/1024',
    actionUrls: {
      'view-order': '/orders/1024',
    },
  },
});
```

For push messages sent by your server, send the equivalent JSON payload to the included worker:

```json
{
  "title": "New order received",
  "body": "Order #1024 is ready to review.",
  "url": "/orders/1024",
  "actions": [
    { "action": "view-order", "title": "View order" },
    { "action": "dismiss", "title": "Dismiss" }
  ],
  "actionUrls": {
    "view-order": "/orders/1024"
  }
}
```

May be some time type error . you can pass any like this 

```ts
await this.pushNotification.showNotification('New order received', {
  "title": "New order received",
  "body": "Order #1024 is ready to review.",
  "url": "/orders/1024",
  "actions": [
    { "action": "view-order", "title": "View order" },
    { "action": "dismiss", "title": "Dismiss" }
  ],
  "actionUrls": {
    "view-order": "/orders/1024"
  }
} as any);
 ```

Action buttons are not supported consistently by every browser, operating system, or notification surface. Always make the notification body click useful too: the included worker opens `url` when the notification itself is clicked. Check the [MDN action compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Notification/actions#browser_compatibility) before relying on actions for a critical workflow.

### Security: notification content and payloads

Notification titles and bodies are rendered by the browser/operating system as native text. HTML in `title` or `body` is not inserted into your page DOM, and JavaScript in those fields is not executed. For example, `<img src=x onerror=alert(1)>` is displayed as text, not run as code.

Still, treat every server push payload as untrusted input:

- Do not use `eval()`, `Function()`, or `innerHTML` with notification payload values in your application.
- Do not put passwords, access tokens, one-time codes, full financial details, or other sensitive data in a notification. Notifications can be visible on lock screens and device notification history.
- Send push messages only from an authenticated, authorized server. Keep VAPID private keys and push-subscription endpoints on the server; never expose private keys in browser code.
- Validate payload shape, sizes, and values on the server before sending. Use stable internal IDs (for example, an order ID) rather than sensitive content whenever possible.
- The included `sw.js` permits only same-origin click URLs and falls back to `/` for invalid or external URLs. Keep this rule unless opening external sites is an explicit, reviewed product requirement.

Web Push payloads are encrypted between the application server and push service/browser, but encryption does not make notification text private once it is shown on a user's device. See the [Push API security overview](https://www.w3.org/TR/push-api/#privacy-and-security-considerations).

### Update the service worker

Force the browser to fetch and apply the newest `/sw.js` you deployed. Use this after publishing a changed worker so returning visitors pick it up without a full reload.

```javascript
await pushNotification.updateServiceWorker();
```

This rejects with `There is no active Service Worker registered.` if no worker has been registered yet, so call `registerServiceWorker()` first.

### Unregister the service worker

Remove the active service worker registration (for example, when a user signs out or opts out of notifications).

```javascript
await pushNotification.unregisterServiceWorker();
```

This rejects with `There is no active Service Worker registered.` when nothing is currently registered.

> **Note on the Singleton:** `new PushNotification('/sw.js')` always returns the same shared instance, so calling it again with a different path does not create a second worker. Initialize once and reuse the reference.

### Framework examples

The API is identical in Angular, React, Vue, and plain JavaScript. Only the event-handler syntax changes.

**Angular**

Replace `src/app/app.component.ts` in a standalone Angular app with this complete example. The notification work runs only after the user clicks the button.

```typescript
import { Component } from '@angular/core';
import PushNotification from 'rm-pushnotify';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <h1>rm-pushnotify Angular test</h1>
      <button type="button" (click)="testNotification()">
        Enable and test notification
      </button>
      <p>{{ status }}</p>
    </main>
  `,
})
export class AppComponent {
  status = 'Ready';

  async testNotification() {
    try {
      const pushNotification = new PushNotification('/sw.js');

      this.status = 'Requesting notification permission...';
      await pushNotification.requestPermission();

      this.status = 'Registering service worker...';
      await pushNotification.registerServiceWorker();

      await pushNotification.showNotification('Angular test successful', {
        body: 'rm-pushnotify is working in Angular.',
        icon: '/favicon.ico',
      });

      this.status = 'Notification displayed successfully.';
    } catch (error) {
      this.status = error instanceof Error ? error.message : 'Unable to show notification.';
      console.error(error);
    }
  }
}
```

For module-based Angular projects, put the button markup in `app.component.html`, remove `standalone: true` and the inline `template` from the decorator, then keep the `testNotification()` method unchanged.

**React**

Replace `src/App.jsx` with this complete example. The notification work runs only after the user clicks the button.

```jsx
import { useState } from 'react';
import PushNotification from 'rm-pushnotify';

export default function App() {
  const [status, setStatus] = useState('Ready');

  const testNotification = async () => {
    try {
      const pushNotification = new PushNotification('/sw.js');

      setStatus('Requesting notification permission...');
      await pushNotification.requestPermission();

      setStatus('Registering service worker...');
      await pushNotification.registerServiceWorker();

      await pushNotification.showNotification('React test successful', {
        body: 'rm-pushnotify is working in React.',
        icon: '/favicon.ico',
      });

      setStatus('Notification displayed successfully.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Unable to show notification.');
      console.error(error);
    }
  };

  return (
    <main>
      <h1>rm-pushnotify React test</h1>
      <button type="button" onClick={testNotification}>
        Enable and test notification
      </button>
      <p>{status}</p>
    </main>
  );
}
```

**Vanilla JavaScript**

```javascript
import PushNotification from 'rm-pushnotify';

document.querySelector('#test-notification').addEventListener('click', async () => {
  try {
    const pushNotification = new PushNotification('/sw.js');
    await pushNotification.requestPermission();
    await pushNotification.registerServiceWorker();
    await pushNotification.showNotification('JavaScript test successful', {
      body: 'rm-pushnotify is working.',
    });
  } catch (error) {
    console.error(error);
  }
});
```

### Optional: customize the service worker

Use the included `sw.js` for the standard setup. Only replace it with your own `sw.js` when you need custom push-payload or notification-click behavior. Your replacement must still be served from `/sw.js`.

```javascript
function getSafeUrl(value) {
    try {
        const url = new URL(value || '/', self.location.origin);
        return url.origin === self.location.origin ? url.href : `${self.location.origin}/`;
    } catch {
        return `${self.location.origin}/`;
    }
}

self.addEventListener('push', function (event) {
    const data = event.data ? event.data.json() : {};
    const options = {
        body: data.body || '',
        icon: 'icon.png',
        actions: data.actions || [],
        data: {
            url: data.url || '/',
            actionUrls: data.actionUrls || {},
        },
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function (event) {
    const action = event.action;
    const notificationData = event.notification.data || {};

    event.notification.close();

    if (action !== 'dismiss') {
        const actionUrls = notificationData.actionUrls || {};
        const url = getSafeUrl(actionUrls[action] || notificationData.url);
        event.waitUntil(clients.openWindow(url));
    }
});


```
---

## Compatibility

This library is framework-agnostic and works with Angular, React, Vue, and Vanilla JavaScript. It requires a browser that supports both service workers and notifications.

- Chrome, Edge, Firefox, and Safari have support for the core APIs in current releases.
- Notification options and permission behaviour can differ by browser and operating system; test the exact browsers and devices your users use.
- Internet Explorer is not supported.
- Web notifications and `ServiceWorkerRegistration.showNotification()` require a secure context (HTTPS, or `localhost` during development). See the [Notifications API compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API#browser_compatibility) and [showNotification compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#browser_compatibility) for current details.
- This package targets Node.js 18+ for development and building. It runs in the browser; it is not intended to send push messages from a Node.js server.

---

## Security Best Practices

- **HTTPS Only**: Always serve your application over HTTPS.
- **Update Regularly**: Keep your service worker updated to avoid vulnerabilities.
- **No Sensitive Data**: Avoid exposing sensitive data in your service worker.

---

## Keywords

- Push Notifications
- JavaScript Library
- Service Workers
- Browser Notifications
- Notifications API
- Web Development


---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history and updates.

---

### Latest Release

Check the [releases page](https://github.com/malikrajat/rm-pushnotify/releases) for the most recent version and updates.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use this library freely in commercial and personal projects.

### MIT License Summary

**You can:**
- Use commercially
- Modify the code
- Distribute
- Use privately

**You must:**
- Include the license and copyright notice

**You cannot:**
- Hold the author liable


---

## Browser Compatibility

### Supported Browsers

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| Chrome | 80+ | Full Support | Recommended browser |
| Firefox | 75+ | Full Support | Works perfectly |
| Safari | 13+ | Full Support | iOS and macOS |
| Edge | 80+ | Full Support | Chromium-based |
| Opera | 67+ | Full Support | Works well |
| Samsung Internet | 12+ | Full Support | Mobile support |

### Mobile Support

- iOS Safari 13+
- Chrome for Android 80+
- Samsung Internet
- All mobile browsers with modern JavaScript support

### Download Behavior by Platform

| Platform | Behavior |
|----------|----------|
| Desktop Chrome/Firefox/Edge | Direct download to Downloads folder |
| Desktop Safari | May prompt for download location |
| iOS Safari | Opens download manager |
| Android Chrome | Downloads to Downloads folder |
| Mobile Safari | Shows share sheet with save option |

### Not Supported

- Internet Explorer (all old versions)
- Very old mobile browsers (pre-2019)

---

## FAQ

<details>
  <summary><strong>What browsers are supported?</strong></summary>

  The library supports Chrome 80+, Firefox 75+, Safari 13+, Edge 80+, Opera 67+, and Samsung Internet 12+. Internet Explorer and very old mobile browsers (pre-2019) are not supported.
</details>

<details>
  <summary><strong>Do I need a service worker file?</strong></summary>

  Yes, you need to create a `sw.js` file at the root of your project with the push event listener. The library provides a basic template in the Usage Guide section above.
</details>

<details>
  <summary><strong>Is this library compatible with Angular/React/Vue?</strong></summary>

  Yes, the library is framework-agnostic and works with Angular, React, Vue.js, and Vanilla JavaScript.
</details>

<details>
  <summary><strong>Why am I not receiving notifications?</strong></summary>

  Common reasons include: (1) Not running on HTTPS (required for production), (2) Notification permission not granted, (3) Service worker not registered correctly, (4) Browser doesn't support the Notifications API.
</details>

<details>
  <summary><strong>Does this work in development mode?</strong></summary>

  Yes, the library works in both development and production. However, some browsers may restrict notifications on non-HTTPS origins (except localhost).
</details>

<details>
  <summary><strong>What is the bundle size?</strong></summary>

  The library is lightweight and tree-shakable. Check the bundle size badge at the top of this README or on the npm package page.
</details>

<details>
  <summary><strong>How do I customize notification appearance?</strong></summary>

  Pass an options object to `showNotification()` with properties like `body`, `icon`, `image`, `badge`, `vibrate`, `tag`, and more. The options are passed to the native browser notification API.
</details>

<details>
  <summary><strong>Does this library require any dependencies?</strong></summary>

  No, the library has zero dependencies. It is a standalone, self-contained solution.
</details>

<details>
  <summary><strong>Can I use this with Next.js or SSR frameworks?</strong></summary>

  Yes, the library is SSR-compatible. Make sure to initialize it only on the client side where the Notifications and Service Worker APIs are available.
</details>

<details>
  <summary><strong>How do I report a bug or request a feature?</strong></summary>

  Use the [issue tracker](https://github.com/malikrajat/rm-pushnotify/issues) on GitHub. Bug reports and feature requests are welcome.
</details>

---

## Statistics

[![npm downloads](https://img.shields.io/npm/dt/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify)
[![npm version](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify)
[![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-pushnotify.svg)](https://github.com/malikrajat/rm-pushnotify/issues)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-pushnotify.svg?style=social)](https://github.com/malikrajat/rm-pushnotify/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-pushnotify/blob/main/LICENSE)


---

## Support This Project

If **rm-pushnotify** has helped you build better Angular applications, please consider:

If this library has saved you development time and helped create amazing image sliders in your projects, **please consider giving it a star!** 

 **Why star this repo?**
- Help other developers discover this lightweight, optimized solution
- Support continued development and improvements
- Show appreciation for free, quality tools
- Boost visibility in the Angular community
- Increases visibility in the Angular community
- Supports ongoing development and maintenance
- Encourages more open-source contributions
- Helps other developers find quality tools

### Want More Quality Libraries?

This is just one of several useful libraries I've created. **[Explore my other Angular/React/JavaScript & web development libraries](https://github.com/malikrajat?tab=repositories)** that might solve your next challenge:

- **Utility libraries** for common development tasks
- **UI components** for better user experiences  
- **Performance tools** for optimization
- **Mobile-friendly solutions** for responsive apps

**Found them helpful?** A star on each repo you find useful helps tremendously! It takes just one click but means the world to open-source maintainers.

[![GitHub](https://img.shields.io/badge/View_All_Repositories-181717?logo=github)](https://github.com/malikrajat?tab=repositories)
[![GitHub followers](https://img.shields.io/github/followers/malikrajat?style=social)](https://github.com/malikrajat)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-pushnotify?style=social)](https://github.com/malikrajat/rm-pushnotify/stargazers)

---


## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | [Report Bug](https://github.com/malikrajat/rm-pushnotify/issues/new?template=bug_report.md) | Technical issues |
| Feature Requests | [Request Feature](https://github.com/malikrajat/rm-pushnotify/issues/new?template=feature_request.md) | New features |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-pushnotify/discussions) | General questions |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-pushnotify%20Support) | Direct support |

### Documentation

- [GitHub Repository](https://github.com/malikrajat/rm-pushnotify)
- [npm Package](https://www.npmjs.com/package/rm-pushnotify)
- [Live Demo](https://stackblitz.com/edit/github-akypnfq5)
- [Changelog](https://github.com/malikrajat/rm-pushnotify/blob/main/CHANGELOG.md)

### Community

- Star the repository to show support
- Watch for updates and new releases
- Share your use cases and feedback
- Contribute code or documentation

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-pushnotify)
- Star the repository for updates
- Watch for new releases


---

## Acknowledgments

This library was created to provide a simple, lightweight solution for your applications. Special thanks to the open source community for their feedback and contributions.

Special thanks to:
- **Contributors** - Thank you for making this library better
- **Community** - For feedback and feature requests


---

## Other Libraries

### UI Components

| Library                           | Description                                                              | npm Link                                                                                                        |
|-----------------------------------| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **rm-range-slider**               | Lightweight two-thumb range slider with tooltips and color customization | [![npm](https://img.shields.io/npm/v/rm-range-slider.svg)](https://www.npmjs.com/package/rm-range-slider)       |
| **rm-ng-range-slider**            | Angular-specific version of the dual range slider                        | [![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider) |
| **rm-carousel**                   | Simple, responsive carousel component                                    | [![npm](https://img.shields.io/npm/v/rm-carousel.svg)](https://www.npmjs.com/package/rm-carousel)               |
| **rm-image-slider**               | Minimal image slider with smooth transitions                             | [![npm](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)       |
| **rm-ng-star-rating**             | Configurable Angular star rating component with readonly mode            | [![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)   |
| **@codewithrajat/rm-ng-typeahead** | Angular autocomplete/typeahead component with search suggestions and keyboard navigation | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-typeahead) |
| **@codewithrajat/rm-ng-editor**                  | Rich text editor component for Angular applications with customizable toolbar support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-editor) |

---

### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-export-to-csv**                | Export JSON data to CSV with zero dependencies               | [![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)                               |
| **@codewithrajat/rm-ng-pdf-export**    | Image-based PDF export tool for Angular applications         | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export)       |
| **@codewithrajat/rm-ng-structure-pdf** | Generate structured PDFs for reports, invoices, or documents | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf) |
| **@codewithrajat/rm-ng-pdf-viewer** | Angular PDF viewer component with zoom, navigation, and document rendering support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-pdf-viewer) |

---

### Chrome Extension

| Library | Description | Link                                                                                                                                    |
|----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **quickocr** | Chrome extension that extracts text from images using OCR technology | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/quickocr/releases)                                     |
| **readLoude** | Chrome extension that read you web page loude e.g article etc. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/readLoude/releases)                            |
| **ai-assistant-reply** | AI Chrome extension to auto generate reply on linked in posts. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/ai-assistant-reply/releases) |

---

### VS Code Extension

| Library | Description | Link                                                                                                                                      |
|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **dead-css-cleaner** | VS Code extension for identifying and cleaning unused CSS styles | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/dead-css-cleaner/releases)      |
| **file-coverage-insight** | VS Code extension for auto generated component file coverage automatelly on open. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/file-coverage-insight/releases) |

---

### Desktop Applications - All Plateform

| Library | Description | Link                                                                                                                           |
|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| **deepwork** | Cross-platform productivity application for focus sessions and deep work tracking | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/deepwork/releases)          |
| **JsSandbox** | Cross-platform JavaScript playground and code execution environment | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/JsSandbox/releases) |

---

### Device Detection

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-device-detection**     | Detect device type, OS, and browser in Angular          | [![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)](https://www.npmjs.com/package/rm-ng-device-detection)         |

---

### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **rm-pushnotify** | Lightweight push-style toast notification utility | [![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify) |
| **@codewithrajat/rm-toast-notification** | Cross-platform toast and desktop notification library for web, Angular, and desktop applications | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-toast-notification) |


---

### Layout & Dynamic Rendering

| Library | Description | Link |
|----------|-------------|------|
| **rm-ng-dynamic-layout** | Dynamic layout rendering engine for Angular applications using JSON-driven UI configuration | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-dynamic-layout) |

---

### Developer Tools & Extensions

| Library | Description | Link                                                                                                                            |
|----------|-------------|---------------------------------------------------------------------------------------------------------------------------------|
| **rm-colorful-console-logger** | Structured and colorized console logging utility for developers | [![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger) |

---

### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **about-rajat** | Developer portfolio package for branding and quick personal info | [![npm](https://img.shields.io/npm/v/about-rajat.svg)](https://www.npmjs.com/package/about-rajat) |

---


### All Packages

Browse all my packages:
- [npm: @codewithrajat](https://www.npmjs.com/settings/codewithrajat/packages)
- [npm: rajatmalik](https://www.npmjs.com/settings/rajatmalik/packages)
- [GitHub: @malikrajat](https://github.com/malikrajat?tab=repositories)

---

## Author

**Rajat Malik**

Full-Stack Developer and Frontend Architect at Siemens with 14+ years building scalable enterprise platforms, specializing in micro-frontends, AI-native development, React, and Angular.  
Author of 10+ open-source libraries and 100+ technical articles, driving innovation through developer-friendly tools, performance optimization, and AI-assisted workflows.

### GET IN TOUCH

- Portfolio:  [rajatmalik.dev](https://rajatmalik.dev)
- Email:      [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn:   [errajatmalik](https://linkedin.com/in/errajatmalik)
- GitHub:     [@malikrajat](https://github.com/malikrajat)
- npm:        [rajatmalik](https://www.npmjs.com/~rajatmalik)

### SOCIAL PRESENCE
- Threads:    [Threads: rajatmalik](https://www.threads.net/@er.rajatmalik)
- Twitter/X:  [Twitter/X: rajatmalik](https://twitter.com/er_rajatmalik)
- BlueSky:    [BlueSky: rajatmalik](http://devrajat.bsky.social)

### CONTENT & WRITING

- Medium:    [Medium: rajatmalik]( https://medium.com/@codewithrajat)
- Dev.to:    [Dev.to: rajatmalik]( https://dev.to/codewithrajat)
- Substack:   [Substack: rajatmalik](https://codewithrajat.substack.com)
- Hashnode:   [Hashnode: rajatmalik](https://hashnode.com/@codeswithrajat)

---

<p align="center">
  <p align="center">Made with care and love by <a href="https://rajatmalik.dev">Rajat Malik</a> for the Angular community</p>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-pushnotify/stargazers">Star on GitHub</a> |
  <a href="https://www.npmjs.com/package/rm-pushnotify">View on npm</a> |
  <a href="https://github.com/malikrajat/rm-pushnotify/issues">Report Issue</a> 
</p>

<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev">Rajat Malik</a>
</p>
