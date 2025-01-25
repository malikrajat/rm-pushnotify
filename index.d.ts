// index.d.ts
declare module 'rm-pushnotify' {
    export class PushNotification {
      constructor(serviceWorkerPath: string | null);
      
      requestPermission(): Promise<void>;
      registerServiceWorker(): Promise<ServiceWorkerRegistration | void>;
      showNotification(title: string, options: NotificationOptions): void;
      unregisterServiceWorker(): Promise<boolean>;
      updateServiceWorker(): Promise<void>;
    }
  }
  