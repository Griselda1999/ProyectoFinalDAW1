// var mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser');
const app = express() 
const cors= require("cors")

const materia= require('./materia')
const docente= require('./docente')
const campus= require('./campus')
const seccion= require('./seccion')
const asiste= require('./asiste')
const alumno= require('./alumno')
const matricula= require('./matricula')
const carrera= require('./carrera')
// var connection = mysql.createConnection({

//   host     : 'localhost',
//   user     : 'griselda',
//   password : 'G19990311yns',
//   database : 'bd_registroalumno'

  
// });

// var corsOptions = {
//   origin: 'http://localhost:5500',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }



const puerto = 3001;


 
// connection.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(materia);
app.use(docente);
app.use(campus);
app.use(seccion);
app.use(asiste);
app.use(alumno);
app.use(matricula);
app.use(carrera);

// ********* Metodos HTTP TABLA MATERIA ***********

//**************** Metodo Get *********************

// app.get('/api/materia', (req, res) =>{
//   connection.query('SELECT * FROM tbl_materia;', function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/materia/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT * FROM tbl_materia WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows[0])
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/materia', (req, res) =>{
//   const {nombre,descripcion} = req.body;

//   let respuestaErrorMateria=[]
//  if(!nombre){

//   respuestaErrorMateria.push("El nombre de la materia no debe estar vacia")
//  }
//  if(!descripcion){
//   respuestaErrorMateria.push("La descripcion de la materia no debe estar vacia")
//  }
 

//  if(respuestaErrorMateria.length > 0){

//   res.status(400).json({codigo: 400, mensaje: respuestaErrorMateria})
//     return
//  }

//   connection.query('Insert into tbl_materia (nombre ,descripcion) Values (?, ?);', [nombre, descripcion] , function(err, rows, fields) {
//     if(err){
//       console.error(err)
//       let respuestaError ={}
//       if(err.code === 'ER_BAD_NULL_ERROR'){
//         respuestaError= {codigo: 500, mesaje: "Los campos no pueden ser nulos"}
//       }

//       res.status(500).json(respuestaError)
//     }else{
//       res.status(200).json(rows)
//     }
    
//   });  
// })

// //*************** Metodo PUT *****************

// app.put('/api/materia/:id', (req, res) =>{
//   const {id} = req.params;
//   const {nombre,descripcion} = req.body;
  

//   connection.query('Update tbl_materia SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)



//   });  
// })

// //*************** Metodo DELETE *****************

// ///Eliminar una raza
// app.delete('/api/materia/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe



//   //Si existe borrarlo
//   connection.query('Delete from tbl_materia WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })


// // ********* Metodos HTTP TABLA DOCENTE ***********

// //**************** Metodo Get *********************

// app.get('/api/docente', (req, res) =>{
//   connection.query('SELECT * FROM tbl_docente;', function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/docente/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT * FROM tbl_docente WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows[0])
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/docente', (req, res) =>{
//   const {nombre, apellido, correo} = req.body;
  
//   connection.query('Insert into tbl_docente (nombre ,apellido, correo) Values (?, ?,?);', [nombre, apellido, correo] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })


// //*************** Metodo PUT *****************

// app.put('/api/docente/:id', (req, res) =>{
//   const {id} = req.params;
//   const {nombre, apellido, correo} = req.body;
  
//   connection.query('Update tbl_docente SET nombre = ?, apellido = ?, correo = ? WHERE id = ?', [nombre, apellido, correo, id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo DELETE *****************


// app.delete('/api/docente/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe

//   //Si existe borrarlo
//   connection.query('Delete from tbl_docente WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })


// // ********* Metodos HTTP TABLA CAMPUS ***********

// //**************** Metodo Get *********************

// app.get('/api/campus', (req, res) =>{
//   connection.query('SELECT * FROM tbl_campus;', function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/campus/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT * FROM tbl_campus WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows[0])
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/campus', (req, res) =>{
//   const {nombre, ubicacion} = req.body;
  
//   connection.query('Insert into tbl_campus (nombre ,ubicacion) Values (?, ?);', [nombre, ubicacion] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })


// //*************** Metodo PUT *****************

// app.put('/api/campus/:id', (req, res) =>{
//   const {id} = req.params;
//   const {nombre, ubicacion} = req.body;
  
//   connection.query('Update tbl_campus SET nombre = ?,ubicacion = ? WHERE id = ?', [nombre, ubicacion, id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo DELETE *****************


// app.delete('/api/campus/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe

//   //Si existe borrarlo
//   connection.query('Delete from tbl_campus WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })


// // ********* Metodos HTTP TABLA SECCION ***********

// //**************** Metodo Get *********************

// app.get('/api/seccion', (req, res) =>{
//   connection.query('SELECT * FROM tbl_seccion;', function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/seccion/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT * FROM tbl_seccion WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows[0])
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/seccion', (req, res) =>{
//   const {num_aula ,id_campus, id_docente, id_materia} = req.body;
  
//   connection.query('Insert into tbl_seccion (num_aula ,id_campus, id_docente, id_materia) Values (?, ?,?,?);', [num_aula ,id_campus, id_docente, id_materia] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })


// //*************** Metodo PUT *****************

// app.put('/api/seccion/:id', (req, res) =>{
//   const {id} = req.params;
//   const {num_aula ,id_campus, id_docente, id_materia} = req.body;
  
//   connection.query('Update tbl_seccion SET num_aula = ?, id_campus = ?, id_docente = ?, id_materia = ? WHERE id = ?', [ num_aula ,id_campus, id_docente, id_materia,id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo DELETE *****************


// app.delete('/api/seccion/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe

//   //Si existe borrarlo
//   connection.query('Delete from tbl_seccion WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })


// // ********* Metodos HTTP TABLA ASISTE ***********

// //**************** Metodo Get *********************

// app.get('/api/asiste', (req, res) =>{
//   connection.query('SELECT * FROM tbl_asiste;', function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/asiste/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT * FROM tbl_asiste WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows[0])
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/asiste', (req, res) =>{
//   const {id_seccion, id_alumno} = req.body;
  
//   connection.query('Insert into tbl_asiste ( id_seccion, id_alumno) Values (?, ?);', [id_seccion, id_alumno] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })


// //*************** Metodo PUT *****************

// app.put('/api/asiste/:id', (req, res) =>{
//   const {id} = req.params;
//   const {id_seccion, id_alumno} = req.body;
  
//   connection.query('Update tbl_asiste SET id_seccion = ?, id_alumno = ? WHERE id = ?', [ id_seccion, id_alumno, id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo DELETE *****************


// app.delete('/api/asiste/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe

//   //Si existe borrarlo
//   connection.query('Delete from tbl_asiste WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })


// ********* Metodos HTTP TABLA ALUMNO ***********

//**************** Metodo Get *********************

// app.get('/api/alumno', (req, res) =>{
//   connection.query('SELECT id, nombre, apellido, correo FROM tbl_alumno;', function(err, rows) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/alumno/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT id, nombre, apellido, correo FROM tbl_alumno WHERE id = ?', [id] , function(err, rows) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/alumno', (req, res) =>{
//   const {nombre, apellido, correo} = req.body;
  
//   connection.query('Insert into tbl_alumno (nombre ,apellido, correo) Values (?, ?,?);', [nombre, apellido, correo] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })


// //*************** Metodo PUT *****************

// app.put('/api/alumno/:id', (req, res) =>{
//   const {id} = req.params;
//   const {nombre, apellido, correo} = req.body;
  
//   connection.query('Update tbl_alumno SET nombre = ?, apellido = ?, correo = ? WHERE id = ?', [nombre, apellido, correo, id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo DELETE *****************


// app.delete('/api/alumno/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe

//   //Si existe borrarlo
//   connection.query('Delete from tbl_alumno WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })

// // ********* Metodos HTTP TABLA MATRICULA ***********

// //**************** Metodo Get *********************

// app.get('/api/matricula', (req, res) =>{
//   connection.query('SELECT * FROM tbl_matricula;', function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/matricula/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT * FROM tbl_matricula WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows[0])
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/matricula', (req, res) =>{
//   const {id_carrera, id_alumno} = req.body;
  
//   connection.query('Insert into tbl_matricula ( id_carrera, id_alumno) Values (?, ?);', [id_carrera, id_alumno] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })


// //*************** Metodo PUT *****************

// app.put('/api/matricula/:id', (req, res) =>{
//   const {id} = req.params;
//   const {id_carrera, id_alumno} = req.body;
  
//   connection.query('Update tbl_matricula SET id_carrera = ?, id_alumno = ? WHERE id = ?', [ id_carrera, id_alumno, id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo DELETE *****************


// app.delete('/api/matricula/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe

//   //Si existe borrarlo
//   connection.query('Delete from tbl_matricula WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })

// // ********* Metodos HTTP TABLA CARRERA ***********

// //**************** Metodo Get *********************

// app.get('/api/carrera', (req, res) =>{
//   connection.query('SELECT * FROM tbl_carrera;', function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo Get ID *****************

// app.get('/api/carrera/:id', (req, res) =>{
//   const {id} = req.params;
//   connection.query('SELECT * FROM tbl_carrera WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows[0])
//   });  
// })

// //*************** Metodo POST *****************

// app.post('/api/carrera', (req, res) =>{
//   const {nombre, num_clase, duracion} = req.body;
  
//   connection.query('Insert into tbl_carrera ( nombre, num_clase, duracion) Values (?, ?,?);', [nombre, num_clase, duracion] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })


// //*************** Metodo PUT *****************

// app.put('/api/carrera/:id', (req, res) =>{
//   const {id} = req.params;
//   const {nombre, num_clase, duracion} = req.body;
  
//   connection.query('Update tbl_carrera SET nombre = ?, num_clase = ?, duracion =? WHERE id = ?', [ nombre, num_clase, duracion, id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  
// })

// //*************** Metodo DELETE *****************


// app.delete('/api/carrera/:id', (req, res) =>{
//   const {id} = req.params;
//   //Consultar si el id existe

//   //Si existe borrarlo
//   connection.query('Delete from tbl_carrera WHERE id = ?', [id] , function(err, rows, fields) {
//     if (err) throw err;
//     res.status(200).json(rows)
//   });  

//   //Si no existe, retornar 404.
// })





app.listen(puerto, () => {
  console.log(`La aplicación se está ejecutando en el puerto ${puerto}`)
});