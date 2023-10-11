// crear rutas, invocamos espress
const express = require('express');
// creamos una constante router
const router=express.Router();
// invocamos el archivo de conexion, sin la extension del archivo
const conexion=require('./database/db')

// usamos la const route, para imprimir en el navegador
router.get('/', (req,res)=>{
    
    // res.send('CONTACTO'); este si quiero enviar un mensaje
    // Ejecuto la conexion y hago la consulta
     conexion.query('SELECT * FROM usuarios',(error,results)=>{
         if(error){
             throw error;
         }else{
            // ejecuto el archivo index y envío una variable: res.render('index',{var1:'esto es una variable'});
            res.render('index',{results:results});
         }
     })
}) 

// ruta para crear registros
router.get('/create')

// Para trabajar con este archivo router debemos exportarlo
module.exports= router;


