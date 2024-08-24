import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model'; // Importa la interfaz

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  driverName: string;
  driverEmail: string;
  driverPhone: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const user: User | null = this.authService.getCurrentUser();

    if (user) {
      // Solo accede a las propiedades si el usuario es válido
      this.driverName = user.name;
      this.driverEmail = user.email;
      this.driverPhone = user.phone;
    } else {
      console.error('No user is currently logged in.');
      // Maneja el caso cuando no hay un usuario autenticado
    }
  }
  editProfile() {
    // Aquí va la lógica para editar el perfil
    console.log('Edit profile clicked');
    // Puedes navegar a una página de edición o abrir un modal, etc.
  }
  logout() {
    // Aquí va la lógica para editar el perfil
    console.log('logout profile clicked');
    // Puedes navegar a una página de edición o abrir un modal, etc.
  }
}
