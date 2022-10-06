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

module.exports.changeUserStatus = (req,res) =>{
    const idUser = req.params.idUser;
    let mensaje = "isActive state updated";

    const sql = `SELECT  isActive FROM User_ WHERE idUser = ?`
    const query = `UPDATE User_ SET isActive = ? WHERE idUser = ?`
    
    conexion.query(sql, [idUser], (error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            if(results[0] !=undefined){
                let isActive = results[0].isActive;
                //console.log(typeof isActive);

                if(isActive === 0){
                    mensaje = "Usuario Activado";
                    isActive = 1;
                }
                else{
                    mensaje = "Usuario desactivado"
                    isActive = 0;
                }

                conexion.query(query, [isActive,idUser], (error,results,fields) =>{
                    if(error)
                        res.send(error)
                    else{
                        res.json({
                            mensaje
                        })
                    }

                })

            }
            else{
                mensaje = "El id del usuario es incorrecto"
                res.json({
                    mensaje
                })
            }

        }


    })


}
