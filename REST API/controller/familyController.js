const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
/////////
const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const { NULL } = require('mysql/lib/protocol/constants/types');
const conexion = mysql.createConnection(mysqlConfig);
const crypto = require('crypto');
const { resolveAny } = require('dns');
////////


module.exports.createFamily = (req, res) =>{
    const idFamily = req.body.idFamily;
    const familyMembers = req.body.familyMembers;
    const familyLastName = req.body.familyLastName;
    const pregnancy = req.body.pregnancy;
    const latitude = req.body.latitude;
    const longitud = req.body.longitud;


    const sql = `INSERT INTO family (idFamily, familyMembers, familyLastName, pregnancy, latitude, longitud) VALUES(?,?,?,?,?,?)`

    conexion.query(sql, [idFamily, familyMembers, familyLastName, pregnancy], (error, results, fields)=>{
        
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