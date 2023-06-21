// ********* Metodos HTTP TABLA MATRICULA ***********

//**************** Metodo Get *********************

const mysql = require ('mysql')
const express= require ('express')
const matricula = express.Router()
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'griselda',
  password : 'G19990311yns',
  database : 'bd_registroalumno'

  
});

 
connection.connect();

matricula.get('/api/matricula', (req, res) =>{
    connection.query('SELECT * FROM tbl_matricula;', function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo Get ID *****************
  
  matricula.get('/api/matricula/:id', (req, res) =>{
    const {id} = req.params;
    connection.query('SELECT * FROM tbl_matricula WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo POST *****************
  
  matricula.post('/api/matricula', (req, res) =>{
    const {id_carrera, id_alumno} = req.body;
    
    let respuestaErrormatricula=[]
    if(!id_carrera){
   
     respuestaErrormatricula.push("El id de la carrera no debe estar vacia")
    }
    if(!id_alumno){
     respuestaErrormatricula.push("El id del alumno no debe estar vacia")
    }
  
    
    if(respuestaErrormatricula.length > 0){
   
     res.status(400).json({codigo: 400, mensaje: respuestaErrormatricula})
       return
    }

    connection.query('Insert into tbl_matricula ( id_carrera, id_alumno) Values (?, ?);', [id_carrera, id_alumno] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  
  //*************** Metodo PUT *****************
  
  matricula.put('/api/matricula/:id', (req, res) =>{
    const {id} = req.params;
    const {id_carrera, id_alumno} = req.body;
    
    connection.query('Update tbl_matricula SET id_carrera = ?, id_alumno = ? WHERE id = ?', [ id_carrera, id_alumno, id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo DELETE *****************
  
  
  matricula.delete('/api/matricula/:id', (req, res) =>{
    const {id} = req.params;
    
    connection.query('Delete from tbl_matricula WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  


    
  })

  module.exports= matricula