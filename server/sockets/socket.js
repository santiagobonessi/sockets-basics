const { io } = require('../server');

io.on('connection', (client) => {
  console.log('Cliente conectado');

  client.emit('enviarMensaje', {
    user: 'Admin',
    messsage: 'Bienvenido a esta app'
  });

  client.on('disconnect', () => {
    console.log('Cliente desconectado');
  });

  // Escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
    client.broadcast.emit('enviarMensaje', data);
  });
});