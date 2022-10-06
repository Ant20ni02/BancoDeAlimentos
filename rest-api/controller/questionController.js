const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const conexion = mysql.createConnection(mysqlConfig);

module.exports.insertQuestion = (req,res) =>{
    const idSurvey = req.body.idSurvey;
    const answer = req.body.answer;

    const sql = `INSERT INTO Question (idSurvey, answer) VALUES(?,?)`

    conexion.query (sql, [idSurvey, answer], (error, results, fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results)
        }
    })
}