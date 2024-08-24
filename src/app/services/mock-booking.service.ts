import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockBookingService {

  constructor() { }

  getBookings(): Observable<any> {
    // Aquí creas datos de ejemplo
    const mockBookings = [
      {
        id: 1,
        passengerName: 'Juan Perez',
        type: 'Llegada' ,
        pax: 5 ,
        baggage: '5 maletas',
        pickupLocation: 'Aeropuerto Internacional',
        dropoffLocation: 'Vespucio',
        pickupTime: '01-10-2022',
        completed: true
      },
      {
        id: 2,
        passengerName: 'Maria Gomez',
        type: 'Ingreso' ,
        pax: 3,
        baggage: '3 maletas , 1 mochila',
        pickupLocation: 'Smart',
        dropoffLocation: 'Aeropuerto Nacional',
        pickupTime: '01-10-2022',
        completed: false
      }
    ];

    // Devolvemos los datos de ejemplo como un Observable
    return of(mockBookings);
  }
}
