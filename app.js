// referenciamos a express
const express = require('express');
const req = require('express/lib/request');
// invocamos con su clase
const app= express();

// definir el motor de plantilla ejs con esos dos parámetros, hay mucho más
app.set('view engine','ejs');
// tener en cuenta que el router es el archivo, pero sin la extensión
app.use('/', require('./router.js'));

// esto es para mandar un mesaje al url: app.get('/',(req,res)=>{res.send('Ututiii node js')})
// invocamos a los métodos de express
// definimos como parámetros el puerto y una función flecha con un mensaje por consola
app.listen(5000,()=>{
    console.log('SERVIDOR corriendo en http://localhost:5000')
});
// recuerda usar ctlr + c para parar el servidor NODEMON

