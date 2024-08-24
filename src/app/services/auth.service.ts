import { Injectable } from '@angular/core';
import { User } from '../models/user.model'; // Importa la interfaz

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getCurrentUser(): User | null {
    // Retorna un objeto de usuario o null si el usuario no está autenticado
    // Aquí va tu lógica para obtener el usuario actual
    const user = { name: 'John Doe', email: 'john@example.com', phone: '1234567890' };
    return user ? user : null;
  }

  logout() {
    localStorage.removeItem('currentUser'); // Elimina el usuario del localStorage
    return Promise.resolve(); // Puedes manejar la lógica de logout con más detalle aquí
  }
}
