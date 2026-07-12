// src/sw.js
function getSafeUrl(value) {
    try {
        const url = new URL(value || '/', self.location.origin);
        return url.origin === self.location.origin ? url.href : `${self.location.origin}/`;
    } catch {
        return `${self.location.origin}/`;
    }
}

self.addEventListener('push', function (event) {
    let data = {};

    if (event.data) {
        try {
            data = event.data.json();
        } catch {
            data = { body: event.data.text() };
        }
    }

    const options = {
        body: data.body || '',
        icon: data.icon || 'icon.png',
        actions: data.actions || [],
        data: {
            url: data.url || '/',
            actionUrls: data.actionUrls || {},
        },
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'Notification', options)
    );
});

self.addEventListener('notificationclick', function (event) {
    const action = event.action;
    const notificationData = event.notification.data || {};

    event.notification.close();

    if (action === 'dismiss') {
        return;
    }

    const actionUrls = notificationData.actionUrls || {};
    const url = getSafeUrl(actionUrls[action] || notificationData.url);

    event.waitUntil(clients.openWindow(url));
});
