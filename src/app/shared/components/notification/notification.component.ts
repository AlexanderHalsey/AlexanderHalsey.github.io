import { Component, Signal } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

import { NotificationService } from '@/services/notification.service';

import { Notification } from '@/models';

@Component({
  selector: 'app-notification',
  imports: [ButtonComponent, IconComponent, NgClass, NgTemplateOutlet],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  notifications: Signal<Notification[]>;
  removeNotification: (notification: Notification) => void;
  constructor(notificationService: NotificationService) {
    this.notifications = notificationService.notifications;
    this.removeNotification = notificationService.removeNotification;
  }

  getIconNameFromType(
    type: Notification['type'],
  ): 'error-circle' | 'info-circle' | 'check-circle' | 'warning-circle' {
    switch (type) {
      case 'error':
        return 'error-circle';
      case 'info':
        return 'info-circle';
      case 'success':
        return 'check-circle';
      case 'warning':
        return 'warning-circle';
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typed(type: any): Notification['type'] {
    return type;
  }
}
