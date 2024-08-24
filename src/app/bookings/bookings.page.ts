import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking.model'; // Asegúrate de importar la interfaz si la has creado en un archivo separado

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  segment: string = 'upcoming'; // Segmento seleccionado por defecto
  upcomingBookings: Booking[] = []; // Array tipado para reservas próximas
  completedBookings: Booking[] = []; // Array tipado para reservas completadas

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.loadBookings(); // Carga las reservas al iniciar la página
  }

  loadBookings() {
    this.bookingService.getBookings().subscribe(data => {
      this.upcomingBookings = data.filter(booking => !booking.completed); // Filtra las reservas próximas
      this.completedBookings = data.filter(booking => booking.completed); // Filtra las reservas completadas
    }, err => {
      console.error('Error al cargar las reservas', err);
    });
  }
}
