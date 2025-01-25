
# 🚀 PushNotification Library 

[![npm version](https://img.shields.io/npm/v/colorful-console-logger.svg)](https://www.npmjs.com/package/colorful-console-logger)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

The **PushNotification Library** is a lightweight, easy-to-use JavaScript library that simplifies the process of managing browser notifications and service workers. Whether you're a beginner or an experienced developer, this library makes it straightforward to integrate notifications into your web application.

---

## ✨ Features

- 🎛️ **Singleton Design Pattern**: Ensures only one instance of the library is created.
- ⚙️ **Service Worker Management**: Register, unregister, and update service workers effortlessly.
- 🔔 **Easy Notification Display**: Customize notifications with titles, icons, and more.
- 🌐 **Cross-Browser Compatibility**: Works with modern browsers supporting Service Workers and Notifications API.
- 🪶 **Lightweight**: Minimal setup and fast performance.

---

## 📦 Installation

Install the library via npm or yarn:

```bash
  npm install rm-pushnotify
  # or
  yarn add rm-pushnotify
```

---

## Live DEMO

[See the implementation here](https://stackblitz.com/edit/github-akypnfq5)

---

## 📖 Usage Guide

### ➡️ Import the Library

```javascript
import PushNotification from 'rm-pushnotify';
```

### ➡️ Initialize the PushNotification Instance

```javascript
const pushNotification = new PushNotification('/sw.js');
```

### ➡️ Request Notification Permission

```javascript
await pushNotification.requestPermission();
```

### ➡️ Register the Service Worker

```javascript
const registration = await pushNotification.registerServiceWorker();
```

### ➡️ Show Notifications

```javascript
pushNotification.showNotification('Hello, World!', {
    body: 'This is a test notification!',
    icon: '/path-to-icon/icon.png',
});
```
### ➡️ Create a new file sw.js at root of project. Put below content 

```javascript
// src/sw.js
self.addEventListener('push', function (event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'icon.png',
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function (event) {
    const action = event.action;

    if (action === 'open_app') {
        event.waitUntil(
            clients.openWindow('/') // Open your app or a specific URL
        );
    } else if (action === 'dismiss') {
        event.notification.close(); // Close the notification
    } else {
        event.waitUntil(
            clients.openWindow('/') // Fallback to opening the app
        );
    }
});


```
---

## 💻 Compatibility

This library is written in **JavaScript** and is compatible with:

- **Frameworks**: Angular, React, Vue.js, Vanilla JavaScript
- **Node.js Versions**: 14.x and above
- **Package Managers**: npm, yarn

---

## 🌐 Browser Support

| Browser        | Notifications API | Service Workers |
|----------------|-------------------|-----------------|
| Chrome         | ✅ Supported       | ✅ Supported     |
| Firefox        | ✅ Supported       | ✅ Supported     |
| Microsoft Edge | ✅ Supported       | ✅ Supported     |
| Safari (macOS) | ✅ Limited Support | ❌ Not Supported |
| Safari (iOS)   | ❌ Not Supported   | ❌ Not Supported |

> **Note**: Ensure your application uses HTTPS, as service workers require a secure context.

---

## 🔒 Security Best Practices

- **HTTPS Only**: Always serve your application over HTTPS.
- **Update Regularly**: Keep your service worker updated to avoid vulnerabilities.
- **No Sensitive Data**: Avoid exposing sensitive data in your service worker.

---

## 🐛 Issues

If you encounter any issues:

1. Search existing issues in the [GitHub repository](https://github.com/malikrajat/rm-pushnotify/issues).
2. Create a new issue with detailed steps to reproduce the problem.

---

## 👨‍💻 Author Services
Are you interested in this library but lacks features? Write to the author, he can do it for you.

---

## 🔑 Keywords

- Push Notifications
- JavaScript Library
- Service Workers
- Browser Notifications
- Notifications API
- Web Development

---

## 📜 License

This library is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

**Rajat Malik**

- [github/malikrajat](https://github.com/malikrajat)

---
