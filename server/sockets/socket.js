const { io } = require('../server');

io.on('connection', (cliente) => {


    cliente.emit('enviarMensaje', { mensaje: 'usuario conectado correctamente', nombre: 'Roberto' }, function(respuesta) {
        console.log('el usuario ha recibido el mensaje');
        console.log(respuesta);

    })

    cliente.on('disconnect', () => {
        console.log('usuario desconetado');
    })


    cliente.on('enviarMensaje', (mensaje) => {
        cliente.broadcast.emit('enviarMensaje', mensaje);
        console.log(mensaje);
    })

    console.log(`usuario conectado al socket ${cliente}`);
})