const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const conexion = mysql.createConnection(mysqlConfig);

module.exports.addSurvey = (req, res) =>{
    const idUser = req.body.idUser;
    const idFamily = req.body.idFamily;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    //const idQuestionList = req.body.idQuestionList;
    const currentDate = new Date();
    const clock = currentDate.getHours();
    console.log(clock);
    const mensaje = ""

    const query = `SELECT idSurvey FROM Survey WHERE idUser = ?`;
    const sql = `INSERT INTO Survey (idUser, idFamily, date_, latitude, longitude) VALUES(?,?,?,?,?)`;
    const updateQuery = `UPDATE Survey SET idUser = ?, idFamily = ?, date_ = ? WHERE idUser = ?`


    conexion.query(query, [idUser],(error,results,fields) =>{
        if(error)
            res.send(error)
        else{
            /*
            if(results[0]!=undefined){
                conexion.query(updateQuery, [idUser,idFamily,currentDate,idUser], (error3,results3,fields3)=>{
                    if(error3)
                        res.send(error3)
                    else{
                        res.json(results3)
                    }

                })

            }*/
             //undefined
                conexion.query(sql, [idUser,idFamily,currentDate,latitude,longitude], (error2, results2, fields2)=>{
                    if(error2)
                        res.send(error2)
                    else{
                        res.json(results2)
                    }
                })
        }
    })
}