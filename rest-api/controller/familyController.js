const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const conexion = mysql.createConnection(mysqlConfig);

module.exports.createFamily = (req, res) =>{
    const idFamily = req.body.idFamily;
    const familyMembers = req.body.familyMembers;
    const familyLastName = req.body.familyLastName;
    const pregnancy = req.body.pregnancy;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;


    const sql = `INSERT INTO Family (idFamily, familyMembers, familyLastName, latitude, longitude, pregnancy) VALUES(?,?,?,?,?,?)`

    conexion.query(sql, [idFamily, familyMembers, familyLastName, latitude, longitude, pregnancy], (error, results, fields)=>{
        
        if(error)
            res.send(error)
        else{
            res.json(results)
        }
    })

}

module.exports.assignMedicalCondition = (req,res) =>{
    const name = req.body.name;
    const medicalConditionNumber = req.body.medicalConditionNumber;
    const idFamily = req.body.idFamily;

    const sql = `INSERT INTO medicalcondition (name, medicalConditionNumber, idFamily) VALUES (?,?,?)`

    conexion.query(sql, [name,medicalConditionNumber, idFamily], (error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results)
        }
    })
}

module.exports.getFamilies = (req,res) =>{
    const query = `SELECT s.idFamily, s.idSurvey, latitude, longitude, familyLastName, date_ FROM Survey s JOIN Family f
    ON s.idFamily = f.idFamily`

    conexion.query(query, (error,results,fields) =>{
        if(error)
            res.send(error)
        else{
            res.json(
                results
            )
        }


    })

}