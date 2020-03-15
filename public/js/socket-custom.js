var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {
    console.log('Conexión perdida');
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Braian',
    mensaje: 'Hola world'
}, function(resp) {
    console.log('respuesta del server', resp)
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});