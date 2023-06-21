// ********* Metodos HTTP TABLA CARRERA ***********

//**************** Metodo Get *********************

const mysql = require ('mysql')
const express= require ('express')
const carrera = express.Router()
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'griselda',
  password : 'G19990311yns',
  database : 'bd_registroalumno'

  
});

 
connection.connect();

carrera.get('/api/carrera', (req, res) =>{
    connection.query('SELECT * FROM tbl_carrera;', function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo Get ID *****************
  
  carrera.get('/api/carrera/:id', (req, res) =>{
    const {id} = req.params;
    connection.query('SELECT * FROM tbl_carrera WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo POST *****************
  
  carrera.post('/api/carrera', (req, res) =>{
    const {cnombre, num_clases, duracion} = req.body;

    let respuestaErrorcarrera=[]
    if(!cnombre){
   
     respuestaErrorcarrera.push("El nombre de la carrera no debe estar vacia")
    }
    if(!num_clases){
     respuestaErrorcarrera.push("El numero de clases no debe estar vacia")
    }
    if(!duracion){
      respuestaErrorcarrera.push("La duracion de la carrera no debe estar vacia")
     }
    
    if(respuestaErrorcarrera.length > 0){
   
     res.status(400).json({codigo: 400, mensaje: respuestaErrorcarrera})
       return
    }

    
    connection.query('Insert into tbl_carrera ( cnombre, num_clases, duracion) Values (?, ?,?);', [cnombre, num_clases, duracion] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  
  //*************** Metodo PUT *****************
  
  carrera.put('/api/carrera/:id', (req, res) =>{
    const {id} = req.params;
    const {cnombre, num_clases, duracion} = req.body;
    
    connection.query('Update tbl_carrera SET cnombre = ?, num_clases = ?, duracion =? WHERE id = ?', [ cnombre, num_clases, duracion, id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo DELETE *****************
  
  
  carrera.delete('/api/carrera/:id', (req, res) =>{
    const {id} = req.params;
    
    connection.query('Delete from tbl_carrera WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  
   
  })
  
  
  module.exports= carrera
  