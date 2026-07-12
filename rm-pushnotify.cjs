'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// src/pushNotification.js
class PushNotification {
    static instance;

    constructor(serviceWorkerPath) {
        if (PushNotification.instance) {
            return PushNotification.instance;
        }
        this.serviceWorkerPath = serviceWorkerPath || '/sw.js';
        PushNotification.instance = this; // Singleton pattern
    }

    async requestPermission() {
        if (typeof globalThis.Notification === 'undefined') {
            throw new Error('This browser does not support notifications.');
        }
        const permission = await globalThis.Notification.requestPermission();
        if (permission !== 'granted') {
            throw new Error('Permission not granted for Notification');
        }

        return permission;
    }

    async registerServiceWorker() {
        if (typeof globalThis.navigator === 'undefined' || !('serviceWorker' in globalThis.navigator)) {
            throw new Error('Service Worker not supported in this browser.');
        }

        return globalThis.navigator.serviceWorker.register(this.serviceWorkerPath);
    }

    async showNotification(title, options = {}) {
        if (typeof globalThis.navigator === 'undefined' || !('serviceWorker' in globalThis.navigator)) {
            throw new Error('Service Worker not supported in this browser.');
        }

        const registration = await globalThis.navigator.serviceWorker.ready;
        return registration.showNotification(title, options);
    }

    async unregisterServiceWorker() {
        if (typeof globalThis.navigator === 'undefined' || !('serviceWorker' in globalThis.navigator)) {
            throw new Error('Service Worker not supported in this browser.');
        }

        const registration = await globalThis.navigator.serviceWorker.getRegistration();
        if (!registration) {
            throw new Error('There is no active Service Worker registered.');
        }

        return registration.unregister();
    }

    async updateServiceWorker() {
        if (typeof globalThis.navigator === 'undefined' || !('serviceWorker' in globalThis.navigator)) {
            throw new Error('Service Worker not supported in this browser.');
        }

        const registration = await globalThis.navigator.serviceWorker.getRegistration();
        if (!registration) {
            throw new Error('There is no active Service Worker registered.');
        }

        return registration.update();
    }
}

// src/index.js

exports.PushNotification = PushNotification;
exports["default"] = PushNotification;
//# sourceMappingURL=rm-pushnotify.cjs.map
