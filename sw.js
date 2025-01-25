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
