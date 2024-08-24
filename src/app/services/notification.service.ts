import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'https://api.ezyride.com/notifications';

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Obtiene la lista de notificaciones
  }

  markAsRead(notificationId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${notificationId}/read`, {}); // Marca una notificación como leída
  }
}
