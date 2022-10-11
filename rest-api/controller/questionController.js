const mysql = require('mysql');
const { json } = require('stream/consumers');
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

module.exports.insertQuestionList = (req,res) =>{

    const doQuery = async (element) =>{
        await conexion.query (sql, [element.idQuestion, element.idSurvey, element.answer], (error, results, fields)=>{
            if(error)
                res.json(error);
            else{
                console.log(results);
            }
        })
    }

    const questionList = req.body.questionList;
    const sql = `INSERT INTO Question (idQuestion,idSurvey, answer) VALUES(?,?,?)`;

    questionList.forEach(ele => {
        doQuery(ele);
    });
    res.json({"mensaje": "Insertados correctamente"})
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

module.exports.getFrequency = (req,res) =>{
    const idQuestion = req.params.idQuestion;
    
    const query2 = `SELECT answer, COUNT(*) AS freq FROM Question where idQuestion = ?  GROUP BY answer`;

                conexion.query(query2,[idQuestion],(error,results,fields)=>{
                    if(error)
                        res.send(error)
                    else{
                        console.log(results)
                        if(results[0]!=undefined){
                            console.log(results);
                            res.json(results)    
                        }
                        else{
                            res.json({
                                "mensaje" : "ID de pregunta incorrecto"
                            })
                        }
                    }
                })
        }