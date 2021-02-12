let socket = io();
//Escuchadores de informacion
socket.on('connect', function () {
  console.log('Conectado al servidor');
});
socket.on('disconnect', function () {
  console.log('Perdimos conexion con el servidor');
});
socket.on('enviarMensaje', function (message) {
  console.log(message);
});

// Enviadores de informacion
socket.emit('enviarMensaje', {
  user: 'Pepe',
  message: 'Hola Mundo'
}, function (response) {
  console.log('Server response', response);
});