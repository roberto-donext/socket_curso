var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})


socket.on('enviarMensaje', function(mensaje, callback) {


    console.log(mensaje);

    /*
    if (mensaje.nombre) {
        callback({
            respuesta: true
        });
    } else {
        callback({
            respuesta: false
        });
    }
    */



})

socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
})