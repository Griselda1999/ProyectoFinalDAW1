// ********* Metodos HTTP TABLA ALUMNO ***********

//**************** Metodo Get *********************

const mysql = require ('mysql')
const express= require ('express')
const alumno = express.Router()
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'griselda',
  password : 'G19990311yns',
  database : 'bd_registroalumno'

  
});

 
connection.connect();

alumno.get('/api/alumno', (req, res) =>{
    connection.query('SELECT * FROM tbl_alumno;', function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo Get ID *****************
  
  alumno.get('/api/alumno/:id', (req, res) =>{
    const {id} = req.params;
    connection.query('SELECT * FROM tbl_alumno  WHERE tbl_alumno.id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)

    });  
    
  })
  

  //*************** Metodo POST *****************
  
  alumno.post('/api/alumno', (req, res) =>{
    const {nombre, apellido, correo} = req.body;

    let respuestaErroralumno=[]
    if(!nombre){
   
     respuestaErroralumno.push("El nombre no debe estar vacia")
    }
    if(!apellido){
     respuestaErroralumno.push("El apellido no debe estar vacia")
    }
    if(!correo){
      respuestaErroralumno.push("El correo no debe estar vacia")
     }
   
    
   
    if(respuestaErroralumno.length > 0){
   
     res.status(400).json({codigo: 400, mensaje: respuestaErroralumno})
       return
    }
    
    connection.query('Insert into tbl_alumno (nombre ,apellido, correo) Values (?, ?,?);', [nombre, apellido, correo] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  
  //*************** Metodo PUT *****************
  
  alumno.put('/api/alumno/:id', (req, res) =>{
    const {id} = req.params;
    const {nombre, apellido, correo} = req.body;
    
    connection.query('Update tbl_alumno SET nombre = ?, apellido = ?, correo = ? WHERE id = ?', [nombre, apellido, correo, id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo DELETE *****************
  
  
  alumno.delete('/api/alumno/:id', (req, res) =>{
    const {id} = req.params;
    
    connection.query('Delete from tbl_alumno WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  
   
  })

  module.exports= alumno
  