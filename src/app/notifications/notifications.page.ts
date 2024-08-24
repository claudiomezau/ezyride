import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service'; // Servicio para manejar notificaciones

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications : any[] = []; // Array para almacenar las notificaciones

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.loadNotifications(); // Carga las notificaciones al iniciar la página
  }

  loadNotifications() {
    this.notificationService.getNotifications().subscribe(data => {
      this.notifications = data; // Almacena las notificaciones obtenidas en el array
    }, err => {
      console.error('Error al cargar las notificaciones', err);
    });
  }

  markAsRead(notification: any) {
    this.notificationService.markAsRead(notification.id).subscribe(() => {
      notification.read = true; // Marca la notificación como leída en la UI
    }, err => {
      console.error('Error al marcar la notificación como leída', err);
    });
  }
}
