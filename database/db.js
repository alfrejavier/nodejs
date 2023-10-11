// utilizamos el modulo mysql instalado 
 const mysql = require('mysql')
// utilizamos los modulos
 const conexion= mysql.createConnection({
// le doy los párámetros por objeto
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'instituto'
 })
//  creamos la conexion llamamos el método connect
conexion.connect((error)=>{
    if(error){
        console.log('El error de conexión es:'+error);
        return;
    }
    console.log('Conectado a la BD!');
})
module.exports= conexion;