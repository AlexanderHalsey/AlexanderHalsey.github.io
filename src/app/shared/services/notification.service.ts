import { computed, Injectable, signal } from '@angular/core';

import { Notification } from '@/models';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _notifications = signal<Notification[]>([]);

  public addNotification = (notification: Notification) => {
    this._notifications.update((currentValue) => [...currentValue, notification]);
    setTimeout(() => this.removeNotification(notification), notification.timeout ?? 5000);
  };

  public removeNotification = (notification: Notification) => {
    this._notifications.update((currentValue) => currentValue.filter((n) => n !== notification));
  };

  public notifications = computed<Notification[]>(() => this._notifications());
}
