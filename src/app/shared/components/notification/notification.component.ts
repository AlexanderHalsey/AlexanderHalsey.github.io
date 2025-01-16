import { Component, Signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { IconComponent } from '../icon/icon.component';

import { NotificationService } from '@/services/notification.service';

import { Notification } from '@/models';

@Component({
  selector: 'app-notification',
  imports: [IconComponent, NgTemplateOutlet],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  notifications: Signal<Notification[]>;
  constructor(notificationService: NotificationService) {
    this.notifications = notificationService.notifications;
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
}
