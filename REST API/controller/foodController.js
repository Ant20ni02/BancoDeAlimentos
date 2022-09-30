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


module.exports.createFoodSuggestion = (req, res) =>{
    const idFamily = req.body.idFamily;
    const idFoodAvailable = req.body.idFoodAvailable;
    const foodName = req.body.foodName;
    const quantity = req.body.quantity;

    const sql = `INSERT INTO foodsuggested (idFamily, idFoodAvailable, foodName, quantity) VALUES(?,?,?,?)`

    conexion.query (sql, [idFamily, idFoodAvailable, foodName, quantity], (error,results,fields)=>{

        if(error)
            res.send(error)
        else{
            res.json(results)
        }
    })
}

module.exports.getAvailableFood = (req,res) =>{
    const foodName = req.body.foodName;

    const sql = `SELECT quantity FROM foodavailable WHERE foodname = ?`;

    conexion.query (sql, [foodName], (error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results)
        }

    })
}

module.exports.updateFoodAvailable = (req,res) =>{
    const foodName = req.body.foodName;
    const subsQuantity = req.body.subsQuantity;

    const sql = `SELECT quantity FROM foodavaliable WHERE foodname = ?`
    const sql2 = `UPDATE foodavalible SET quantity  = ?`

    const  mensaje = " ";

    conexion.query (sql, [foodName], (error,results,fields) =>{
        if(error)
            res.send(error)
        else{
            if(results[0] == undefined){
                mensaje = 'La comida solicitada no se encuentra en la base de datos'
                res.json({
                    mensaje
                });

            }
            else{

                if(results[0].quantity > subsQuantity){
                    const updatedQuantity = results[0].quantity - subsQuantity;
                }
                else{
                    mensaje = 'No hay suficiente comida!!!'
                    res.json({
                        mensaje
                    })
                }
                    
                    conexion.query(sql2,[updatedQuantity],(error,results,fields)=>{
                    if(error)
                        res.send(error)
                    else{
                        res.json(results)
                    }             
                })
                res.send(results)
            }
        }
    })
}
