// ********* Metodos HTTP TABLA CAMPUS ***********

//**************** Metodo Get *********************

const mysql = require ('mysql')
const express= require ('express')
const campus = express.Router()
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'griselda',
  password : 'G19990311yns',
  database : 'bd_registroalumno'

  
});

 
connection.connect();

campus.get('/api/campus', (req, res) =>{
    connection.query('SELECT * FROM tbl_campus;', function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo Get ID *****************
  
  campus.get('/api/campus/:id', (req, res) =>{
    const {id} = req.params;
    connection.query('SELECT * FROM tbl_campus WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo POST *****************
  
  campus.post('/api/campus', (req, res) =>{
    const {canombre, ubicacion} = req.body;

    let respuestaErrorCampus=[]
    if(!canombre){
   
     respuestaErrorCampus.push("El nombre del campus no debe estar vacia")
    }
    if(!ubicacion){
     respuestaErrorCampus.push("La ubicacion del campus no debe estar vacia")
    }
    
   
    if(respuestaErrorCampus.length > 0){
   
     res.status(400).json({codigo: 400, mensaje: respuestaErrorCampus})
       return
    }
    
    connection.query('Insert into tbl_campus (canombre ,ubicacion) Values (?, ?);', [canombre, ubicacion] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  
  //*************** Metodo PUT *****************
  
  campus.put('/api/campus/:id', (req, res) =>{
    const {id} = req.params;
    const {canombre, ubicacion} = req.body;
    
    connection.query('Update tbl_campus SET canombre = ?,ubicacion = ? WHERE id = ?', [canombre, ubicacion, id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  })
  
  //*************** Metodo DELETE *****************
  
  
  campus.delete('/api/campus/:id', (req, res) =>{
    const {id} = req.params;
    
    connection.query('Delete from tbl_campus WHERE id = ?', [id] , function(err, rows, fields) {
      if (err) throw err;
      res.status(200).json(rows)
    });  
  
    
  })
  
  module.exports= campus