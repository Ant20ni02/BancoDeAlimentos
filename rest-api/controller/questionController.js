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

module.exports.getFoodQuantity = (req,res) =>{
    const systemType = req.params.systemType;
    
    const query1 = `SELECT SUBSTRING(answer,3,2) AS food, SUBSTRING(answer,8) AS quantity FROM Question WHERE ((idQuestion = 11) AND ((SUBSTRING(answer,1,1 ) = ?  )))`;

    conexion.query(query1,[systemType],(error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            //console.log(results)
            if(results[0]!=undefined){
                //console.log(results);
                res.json(results)
            }
            else{
                res.json({
                    "mensaje" : "Tipo de sistema métrico incorrecto"
                })
            }
        }
    })
}

module.exports.getFoodFrequency = (req,res) =>{
    let foodNumber = req.params.foodNumber;
    
    const query1 = `SELECT SUBSTRING(answer,6,1) AS answer, COUNT(*) AS freq FROM Question WHERE ((idQuestion = 11) AND ((SUBSTRING(answer,3,2 ) = ?  ))) GROUP BY answer`;
    
    if(foodNumber.length==1){
       foodNumber = '0'+foodNumber
    }

    conexion.query(query1,[foodNumber],(error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            //console.log(results)
            if(results[0]!=undefined){
                //console.log(results);
                res.json(results)
            }
            else{
                res.json({
                    "mensaje" : "Alimento proporcionado incorrecto"
                })
            }
        }
    })
}

module.exports.getAnswerByIdQuestion = (req,res) =>{
    const idSurvey = req.params.idSurvey;
    const idQuestion = req.params.idQuestion;
    //console.log(idSurvey, idQuestion)
    
    const sql = `SELECT * FROM Question WHERE ((idSurvey = ?) AND (idQuestion = ?))`;
    
    conexion.query(sql,[idSurvey, idQuestion],(error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            //console.log(results)
            if(results[0]!=undefined){
                //console.log(results);
                res.json(results);
            }
            else{
                res.json({
                    "mensaje" : "Id de encuesta o idPregunta incorrecto"
                })
            }
        }
    })
}