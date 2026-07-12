export class PushNotification {
  constructor(serviceWorkerPath?: string | null);

  requestPermission(): Promise<NotificationPermission>;
  registerServiceWorker(): Promise<ServiceWorkerRegistration>;
  showNotification(title: string, options?: NotificationOptions): Promise<void>;
  unregisterServiceWorker(): Promise<boolean>;
  updateServiceWorker(): Promise<void>;
}

export default PushNotification;
