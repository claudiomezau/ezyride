import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service'; // Servicio para obtener datos de reservas
import { Router } from '@angular/router'; // Para la navegación entre páginas
import { MockBookingService } from '../services/mock-booking.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   bookings : any[] = []; // Array para almacenar las reservas

  constructor(private bookingService: MockBookingService, private router: Router) {}

  ngOnInit() {
    this.loadBookings(); // Carga las reservas al iniciar la página
  }

  loadBookings() {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data; // Almacena las reservas obtenidas en el array
    }, err => {
      console.error('Error al cargar las reservas', err);
    });
  }

  navigateToBooking(booking: any) {
    this.router.navigate(['/booking-details', booking.id]); // Navega a la página de detalles de la reserva
  }
}
