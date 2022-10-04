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

module.exports.getUsersData = (req,res) =>{
    const idUser = req.params.idUser;
    const  mensaje = "ID incorrecto"
    const sql = `SELECT * FROM User_ WHERE idUser = ?`;

    conexion.query(sql, [idUser],(error, results, fields) =>{
        if(error)
            res.send(error);

        else{
            if(results[0] == undefined)
                res.json({
                    mensaje
                })
            
            res.json(results);
        }
    })
}
