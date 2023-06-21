// ********* Metodos HTTP TABLA ASISTE ***********

//**************** Metodo Get *********************

const mysql = require ('mysql')
const express= require ('express')
const asiste = express.Router()
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'griselda',
  password : 'G19990311yns',
  database : 'bd_registroalumno'

  
});

 
connection.connect();

asiste .get('/api/asiste', (req, res) =>{
  connection.query('SELECT * FROM tbl_asiste;', function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

//*************** Metodo Get ID *****************

asiste .get('/api/asiste/:id', (req, res) =>{
  const {id} = req.params;
  connection.query('SELECT * FROM tbl_asiste WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows[0])
  });  
})

//*************** Metodo POST *****************

asiste .post('/api/asiste', (req, res) =>{
  const {id_seccion, id_alumno} = req.body;

  let respuestaErrorasiste=[]
    if(!id_seccion){
   
     respuestaErrorasiste.push("El id seccion no debe estar vacia")
    }
    if(!id_alumno){
     respuestaErrorasiste.push("El id del alumno no debe estar vacia")
    }
   
    
   
    if(respuestaErrorasiste.length > 0){
   
     res.status(400).json({codigo: 400, mensaje: respuestaErrorasiste})
       return
    }
  
  connection.query('Insert into tbl_asiste ( id_seccion, id_alumno) Values (?, ?);', [id_seccion, id_alumno] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})


//*************** Metodo PUT *****************

asiste .put('/api/asiste/:id', (req, res) =>{
  const {id} = req.params;
  const {id_seccion, id_alumno} = req.body;
  
  connection.query('Update tbl_asiste SET id_seccion = ?, id_alumno = ? WHERE id = ?', [ id_seccion, id_alumno, id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  
})

//*************** Metodo DELETE *****************


asiste .delete('/api/asiste/:id', (req, res) =>{
  const {id} = req.params;
 
  connection.query('Delete from tbl_asiste WHERE id = ?', [id] , function(err, rows, fields) {
    if (err) throw err;
    res.status(200).json(rows)
  });  

  
})

module.exports= asiste 
