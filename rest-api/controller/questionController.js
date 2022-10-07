const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const conexion = mysql.createConnection(mysqlConfig);

module.exports.insertQuestion = (req,res) =>{
    const idQuestion = req.body.idQuestion;
    const idSurvey = req.body.idSurvey;
    const answer = req.body.answer;

    const sql = `INSERT INTO Question (idQuestion,idSurvey, answer) VALUES(?,?,?)`

    conexion.query (sql, [idQuestion,idSurvey, answer], (error, results, fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results)
        }
    })
}

module.exports.getAllAnswers = (req,res) =>{
    const idQuestion = req.params.idQuestion;

    const query = `SELECT * FROM Question WHERE idQuestion = ?`

    conexion.query(query,[idQuestion],(error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results)   
        }
    })


}