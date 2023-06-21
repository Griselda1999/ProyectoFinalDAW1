// ********* Metodos HTTP TABLA SECCION ***********

//**************** Metodo Get *********************

const mysql = require ('mysql')
const express= require ('express')
const seccion = express.Router()
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'griselda',
  password : 'G19990311yns',
  database : 'bd_registroalumno'

  
});

 
connection.connect();

seccion.get('/api/seccion', (req, res) =>{
    connection.query('SELECT * FROM tbl_seccion;', function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo Get ID *****************
  
  seccion.get('/api/seccion/:id', (req, res) =>{
    const {id} = req.params;
    connection.query('SELECT * FROM tbl_seccion WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo POST *****************
  
  seccion.post('/api/seccion', (req, res) =>{
    const {num_aula ,id_campus, id_docente, id_materia} = req.body;

    let respuestaErrorseccion=[]
    if(!num_aula){
   
     respuestaErrorseccion.push("El numero del aula no debe estar vacia")
    }
    if(!id_campus){
     respuestaErrorseccion.push("El id del campus no debe estar vacia")
    }
    if(!id_docente){
      respuestaErrorseccion.push("El id del docente no debe estar vacia")
     }
     if(!id_materia){
      respuestaErrorseccion.push("El id de la materia no debe estar vacia")
     }
    
   
    // if(respuestaErrorCampus.length > 0){
   
    //  res.status(400).json({codigo: 400, mensaje: respuestaErrorseccion})
    //    return
    // }
    
    connection.query('Insert into tbl_seccion (num_aula ,id_campus, id_docente, id_materia) Values (?, ?,?,?);', [num_aula ,id_campus, id_docente, id_materia] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  
  //*************** Metodo PUT *****************
  
  seccion.put('/api/seccion/:id', (req, res) =>{
    const {id} = req.params;
    const {num_aula ,id_campus, id_docente, id_materia} = req.body;
    
    connection.query('Update tbl_seccion SET num_aula = ?, id_campus = ?, id_docente = ?, id_materia = ? WHERE id = ?', [ num_aula ,id_campus, id_docente, id_materia,id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  

  })
  
  //*************** Metodo DELETE *****************
  
  
  seccion.delete('/api/seccion/:id', (req, res) =>{
    const {id} = req.params;
   
    connection.query('Delete from tbl_seccion WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  
    
  })

  module.exports= seccion  