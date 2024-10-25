export const samplePasajeros = [
    { id_pasajero: "PAX_001", nombre: 'Juan', apellido: 'Pérez', telefono: '912345678', metodo_contacto: 'WhatsApp', equipaje: '2 mochilas'},
    { id_pasajero: "PAX_002", nombre: 'Ana', apellido: 'López', telefono: '923456789', metodo_contacto: 'Email', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_003", nombre: 'Carlos', apellido: 'Ramírez', telefono: '934567890', metodo_contacto: 'WhatsApp', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_004", nombre: 'Lucía', apellido: 'Martínez', telefono: '945678901', metodo_contacto: 'WhatsApp', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_005", nombre: 'Andrés', apellido: 'García', telefono: '956789012', metodo_contacto: 'Email', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_006", nombre: 'Marta', apellido: 'Gómez', telefono: '967890123', metodo_contacto: 'WhatsApp', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_007", nombre: 'Pedro', apellido: 'Sánchez', telefono: '978901234', metodo_contacto: 'Email', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_008", nombre: 'Elena', apellido: 'Morales', telefono: '989012345', metodo_contacto: 'WhatsApp', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_009", nombre: 'Luis', apellido: 'Fernández', telefono: '990123456', metodo_contacto: 'Email' , equipaje: '2 mochilas'},
    { id_pasajero: "PAX_010", nombre: 'Laura', apellido: 'Hernández', telefono: '901234567', metodo_contacto: 'WhatsApp' },
    { id_pasajero: "PAX_011", nombre: 'Carlos', apellido: 'Mendoza', telefono: '911234567', metodo_contacto: 'WhatsApp', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_012", nombre: 'Sofía', apellido: 'Vargas', telefono: '922345678', metodo_contacto: 'Email', equipaje: '1 maleta de mano' },
    { id_pasajero: "PAX_013", nombre: 'Pedro', apellido: 'López', telefono: '933456789', metodo_contacto: 'WhatsApp', equipaje: '2 maletas grandes' },
    { id_pasajero: "PAX_014", nombre: 'Ana', apellido: 'Sánchez', telefono: '944567890', metodo_contacto: 'WhatsApp', equipaje: '1 mochila' },
    { id_pasajero: "PAX_015", nombre: 'Miguel', apellido: 'Ramírez', telefono: '955678901', metodo_contacto: 'Email', equipaje: '1 maleta de mano, 1 mochila' },
    { id_pasajero: "PAX_016", nombre: 'Lucía', apellido: 'Castro', telefono: '966789012', metodo_contacto: 'WhatsApp', equipaje: '2 maletas de mano' },
    { id_pasajero: "PAX_017", nombre: 'Jorge', apellido: 'Díaz', telefono: '977890123', metodo_contacto: 'WhatsApp', equipaje: '1 maleta grande' },
    { id_pasajero: "PAX_018", nombre: 'Marta', apellido: 'Cruz', telefono: '988901234', metodo_contacto: 'Email', equipaje: '1 maleta de mano, 1 maleta grande' },
    { id_pasajero: "PAX_019", nombre: 'David', apellido: 'Pérez', telefono: '999012345', metodo_contacto: 'WhatsApp', equipaje: '3 maletas grandes' },
    { id_pasajero: "PAX_020", nombre: 'Elena', apellido: 'Fernández', telefono: '901234567', metodo_contacto: 'Email', equipaje: '2 maletas de mano' },
    { id_pasajero: "PAX_021", nombre: 'Luis', apellido: 'Martínez', telefono: '912345678', metodo_contacto: 'WhatsApp', equipaje: '1 mochila, 1 maleta de mano' },
    { id_pasajero: "PAX_022", nombre: 'Carmen', apellido: 'García', telefono: '923456789', metodo_contacto: 'Email', equipaje: '1 maleta grande' },
    { id_pasajero: "PAX_023", nombre: 'Raúl', apellido: 'Morales', telefono: '934567890', metodo_contacto: 'WhatsApp', equipaje: '1 maleta de mano' },
    { id_pasajero: "PAX_024", nombre: 'Laura', apellido: 'Hernández', telefono: '945678901', metodo_contacto: 'Email', equipaje: '2 mochilas' },
    { id_pasajero: "PAX_025", nombre: 'Valeria', apellido: 'Ortega', telefono: '956789012', metodo_contacto: 'WhatsApp', equipaje: '1 maleta grande, 1 maleta de mano' },
    { id_pasajero: "PAX_026", nombre: 'Daniel', apellido: 'Rivas', telefono: '967890123', metodo_contacto: 'WhatsApp', equipaje: '1 mochila, 1 maleta grande' },
    { id_pasajero: "PAX_027", nombre: 'Patricia', apellido: 'Flores', telefono: '978901234', metodo_contacto: 'Email', equipaje: '1 maleta de mano, 1 mochila' },
    { id_pasajero: "PAX_028", nombre: 'Francisco', apellido: 'Gómez', telefono: '989012345', metodo_contacto: 'WhatsApp', equipaje: '2 maletas grandes' },
    { id_pasajero: "PAX_029", nombre: 'Isabel', apellido: 'Núñez', telefono: '990123456', metodo_contacto: 'Email', equipaje: '1 maleta de mano' },
    { id_pasajero: "PAX_030", nombre: 'Alberto', apellido: 'Vega', telefono: '901234567', metodo_contacto: 'WhatsApp', equipaje: '1 maleta grande' }
];

  
export const sampleReservas = [
    { id_reserva: 'RESERV_01', id_conductor: 'DRIVER1', id_pasajero: 'PAX_001', punto_recogida: 'Vespucio', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 3, tipo: 'ingreso', hora_ingreso: '08:00', 
      hora_llegada: '09:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-12', estado: 'pendiente_ingreso' },
      
    { id_reserva: 'RESERV_02', id_conductor: 'DRIVER2', id_pasajero: 'PAX_002', punto_recogida: 'Maitenes', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 2, tipo: 'ingreso', hora_ingreso: '09:30', 
      hora_llegada: '10:30', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-13', estado: 'pendiente_ingreso' },
      
    { id_reserva: 'RESERV_03', id_conductor: 'DRIVER3', id_pasajero: 'PAX_003', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 1, tipo: 'llegada', hora_ingreso: '07:00', 
      hora_llegada: '07:45', fecha_ingreso: '2024-10-08', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_04', id_conductor: 'DRIVER4', id_pasajero: 'PAX_004', punto_recogida: 'H31 Internacional', 
      destino: 'Maitenes', cantidad_pasajeros: 4, tipo: 'llegada', hora_ingreso: '11:00', 
      hora_llegada: '12:00', fecha_ingreso: '2024-10-07', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_05', id_conductor: 'DRIVER1', id_pasajero: 'PAX_005', punto_recogida: 'Vespucio', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 2, tipo: 'ingreso', hora_ingreso: '09:00', 
      hora_llegada: '09:45', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-16', estado: 'pendiente_ingreso'},
    
    { id_reserva: 'RESERV_06', id_conductor: 'DRIVER2', id_pasajero: 'PAX_006', punto_recogida: 'Maitenes', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 5, tipo: 'ingreso', hora_ingreso: '10:00', 
      hora_llegada: '11:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-17', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_07', id_conductor: 'DRIVER3', id_pasajero: 'PAX_007', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 2, tipo: 'llegada', hora_ingreso: '08:30', 
      hora_llegada: '09:30', fecha_ingreso: '2024-10-01', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_08', id_conductor: 'DRIVER4', id_pasajero: 'PAX_008', punto_recogida: 'H31 Internacional', 
      destino: 'Maitenes', cantidad_pasajeros: 3, tipo: 'llegada', hora_ingreso: '07:30', 
      hora_llegada: '08:30', fecha_ingreso: '2024-10-05', fecha_llegada: '2024-10-10', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_09', id_conductor: 'DRIVER1', id_pasajero: 'PAX_009', punto_recogida: 'Vespucio', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 4, tipo: 'ingreso', hora_ingreso: '11:00', 
      hora_llegada: '12:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-20', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_10', id_conductor: 'DRIVER2', id_pasajero: 'PAX_010', punto_recogida: 'Maitenes', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 3, tipo: 'ingreso', hora_ingreso: '13:00', 
      hora_llegada: '14:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-21', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_11', id_conductor: 'DRIVER3', id_pasajero: 'PAX_011', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 1, tipo: 'llegada', hora_ingreso: '06:45', 
      hora_llegada: '07:30', fecha_ingreso: '2024-10-07', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_12', id_conductor: 'DRIVER4', id_pasajero: 'PAX_012', punto_recogida: 'H31 Internacional', 
      destino: 'Maitenes', cantidad_pasajeros: 2, tipo: 'llegada', hora_ingreso: '09:00', 
      hora_llegada: '10:00', fecha_ingreso: '2024-10-08', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_13', id_conductor: 'DRIVER1', id_pasajero: 'PAX_013', punto_recogida: 'Vespucio', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 2, tipo: 'ingreso', hora_ingreso: '08:00', 
      hora_llegada: '09:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-24', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_14', id_conductor: 'DRIVER2', id_pasajero: 'PAX_014', punto_recogida: 'Maitenes', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 3, tipo: 'ingreso', hora_ingreso: '09:30', 
      hora_llegada: '10:30', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-25', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_15', id_conductor: 'DRIVER3', id_pasajero: 'PAX_015', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 2, tipo: 'llegada', hora_ingreso: '07:15', 
      hora_llegada: '08:00', fecha_ingreso: '2024-10-06', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },

    { id_reserva: 'RESERV_16', id_conductor: 'DRIVER1', id_pasajero: 'PAX_016', punto_recogida: 'Vespucio', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 3, tipo: 'ingreso', hora_ingreso: '08:00', 
      hora_llegada: '09:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-12', estado: 'pendiente_ingreso' },
    
    { id_reserva: 'RESERV_17', id_conductor: 'DRIVER2', id_pasajero: 'PAX_017', punto_recogida: 'Maitenes', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 2, tipo: 'ingreso', hora_ingreso: '09:30', 
      hora_llegada: '10:30', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-13', estado: 'pendiente_ingreso' },
    
    { id_reserva: 'RESERV_18', id_conductor: 'DRIVER3', id_pasajero: 'PAX_018', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 1, tipo: 'llegada', hora_ingreso: '07:00', 
      hora_llegada: '07:45', fecha_ingreso: '2024-10-08', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_19', id_conductor: 'DRIVER4', id_pasajero: 'PAX_019', punto_recogida: 'H31 Internacional', 
      destino: 'Maitenes', cantidad_pasajeros: 4, tipo: 'llegada', hora_ingreso: '11:00', 
      hora_llegada: '12:00', fecha_ingreso: '2024-10-07', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_20', id_conductor: 'DRIVER1', id_pasajero: 'PAX_020', punto_recogida: 'Vespucio', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 2, tipo: 'ingreso', hora_ingreso: '09:00', 
      hora_llegada: '09:45', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-16', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_21', id_conductor: 'DRIVER2', id_pasajero: 'PAX_021', punto_recogida: 'Maitenes', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 5, tipo: 'ingreso', hora_ingreso: '10:00', 
      hora_llegada: '11:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-17', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_22', id_conductor: 'DRIVER3', id_pasajero: 'PAX_022', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 2, tipo: 'llegada', hora_ingreso: '08:30', 
      hora_llegada: '09:30', fecha_ingreso: '2024-10-01', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_23', id_conductor: 'DRIVER4', id_pasajero: 'PAX_023', punto_recogida: 'H31 Internacional', 
      destino: 'Maitenes', cantidad_pasajeros: 3, tipo: 'llegada', hora_ingreso: '07:30', 
      hora_llegada: '08:30', fecha_ingreso: '2024-10-05', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_24', id_conductor: 'DRIVER1', id_pasajero: 'PAX_024', punto_recogida: 'Vespucio', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 4, tipo: 'ingreso', hora_ingreso: '11:00', 
      hora_llegada: '12:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-20', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_25', id_conductor: 'DRIVER2', id_pasajero: 'PAX_025', punto_recogida: 'Maitenes', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 3, tipo: 'ingreso', hora_ingreso: '13:00', 
      hora_llegada: '14:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-21', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_26', id_conductor: 'DRIVER3', id_pasajero: 'PAX_026', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 1, tipo: 'llegada', hora_ingreso: '06:45', 
      hora_llegada: '07:30', fecha_ingreso: '2024-10-07', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_27', id_conductor: 'DRIVER4', id_pasajero: 'PAX_027', punto_recogida: 'H31 Internacional', 
      destino: 'Maitenes', cantidad_pasajeros: 2, tipo: 'llegada', hora_ingreso: '09:00', 
      hora_llegada: '10:00', fecha_ingreso: '2024-10-08', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' },
  
    { id_reserva: 'RESERV_28', id_conductor: 'DRIVER1', id_pasajero: 'PAX_028', punto_recogida: 'Vespucio', 
      destino: 'Embarque Nacional', cantidad_pasajeros: 2, tipo: 'ingreso', hora_ingreso: '08:00', 
      hora_llegada: '09:00', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-24', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_29', id_conductor: 'DRIVER2', id_pasajero: 'PAX_029', punto_recogida: 'Maitenes', 
      destino: 'Embarque Internacional', cantidad_pasajeros: 3, tipo: 'ingreso', hora_ingreso: '09:30', 
      hora_llegada: '10:30', fecha_ingreso: '2024-10-10', fecha_llegada: '2024-10-25', estado: 'pendiente_ingreso' },
  
    { id_reserva: 'RESERV_30', id_conductor: 'DRIVER3', id_pasajero: 'PAX_030', punto_recogida: 'H01 Nacional', 
      destino: 'Vespucio', cantidad_pasajeros: 2, tipo: 'llegada', hora_ingreso: '07:15', 
      hora_llegada: '08:00', fecha_ingreso: '2024-10-06', fecha_llegada: '2024-10-10', estado: 'pendiente_llegada' }
  ];
  
  
  

// export const sampleConductores = [
//     { id_conductor: "DRIVER1", nombre: "Carlos", apellido: "Gutiérrez", telefono: "911234567", correo: "carlos@yopmail.com", contrasena: "Password1", estado: "disponible", ultima_ubicacion: "" },
//     { id_conductor: "DRIVER2", nombre: "Luis", apellido: "Martínez", telefono: "922345678", correo: "luis@yopmail.com", contrasena: "Password1", estado: "disponible", ultima_ubicacion: "" },
//     { id_conductor: "DRIVER3", nombre: "Elena", apellido: "Santos", telefono: "933456789", correo: "elena@yopmail.com", contrasena: "Password1", estado: "disponible", ultima_ubicacion: "" },
//     { id_conductor: "DRIVER4", nombre: "Marta", apellido: "Vega", telefono: "944567890", correo: "marta@yopmail.com", contrasena: "Password1", estado: "disponible", ultima_ubicacion: "" }
// ];

export const sampleVehiculos = [
    {
        id_vehiculo: "VAN_001",
        matricula: "EZYR66",
        capacidad_maxima: 9,
        capacidad_disponible: 9,
        estado: "disponible"
    },
    {
        id_vehiculo: "VAN_002",
        matricula: "EZYR77",
        capacidad_maxima: 9,
        capacidad_disponible: 9,
        estado: "disponible"
    },
    {
        id_vehiculo: "VAN_003",
        matricula: "EZYR88",
        capacidad_maxima: 9,
        capacidad_disponible: 9,
        estado: "disponible"
    },
    {
        id_vehiculo: "VAN_004",
        matricula: "EZYR99",
        capacidad_maxima: 9,
        capacidad_disponible: 9,
        estado: "disponible"
    }
];

// export const sampleNotificaciones = [
//     { id_notificacion: "NOTIF_001", id_conductor: "DRIVER1", tipo_notificacion: "Asignación", mensaje: "Tienes una nueva tarea asignada", fecha_hora: new Date(), estado: "Enviada" },
//     { id_notificacion: "NOTIF_002", id_conductor: "DRIVER2", tipo_notificacion: "Recordatorio", mensaje: "Tu próximo servicio es en 30 minutos", fecha_hora: new Date(), estado: "Enviada" },
//     { id_notificacion: "NOTIF_003", id_conductor: "DRIVER3", tipo_notificacion: "Alerta", mensaje: "El pasajero ha cancelado la reserva", fecha_hora: new Date(), estado: "Enviada" },
//     { id_notificacion: "NOTIF_004", id_conductor: "DRIVER4", tipo_notificacion: "Asignación", mensaje: "Nueva asignación de pasajero en Vespucio", fecha_hora: new Date(), estado: "Enviada" }
//   ];
//   export const sampleHistorialServicios = [
//     { id_historial: "HIST_001", id_conductor: "DRIVER1", id_reserva: "RESERV_01", fecha_hora_inicio: new Date(), fecha_hora_fin: new Date(), detalles: "Servicio completado exitosamente" },
//     { id_historial: "HIST_002", id_conductor: "DRIVER2", id_reserva: "RESERV_02", fecha_hora_inicio: new Date(), fecha_hora_fin: new Date(), detalles: "Pasajero llegó tarde, servicio retrasado" },
//     { id_historial: "HIST_003", id_conductor: "DRIVER3", id_reserva: "RESERV_03", fecha_hora_inicio: new Date(), fecha_hora_fin: new Date(), detalles: "Recogida en H01 Nacional, sin incidentes" },
//     { id_historial: "HIST_004", id_conductor: "DRIVER4", id_reserva: "RESERV_04", fecha_hora_inicio: new Date(), fecha_hora_fin: new Date(), detalles: "Llegada tardía del pasajero, todo resuelto" }
//   ];
    

