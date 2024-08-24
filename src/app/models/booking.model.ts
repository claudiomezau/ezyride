export interface Booking {
    id: string;
    passengerName: string;
    type: string;
    pax: number;
    baggage: string;
    pickupLocation: string;
    dropoffLocation: string;
    pickupTime: Date;
    completed: boolean;
  }
  