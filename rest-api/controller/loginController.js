const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const conexion = mysql.createConnection(mysqlConfig);
const crypto = require('crypto');

module.exports.login = (req, res) => {

    const email = req.body.email;
    const password_ = req.body.password_;

    const sql = `SELECT idUser FROM User_ WHERE email = ?` //makes sure it exists

    const sql2 = `SELECT password_ FROM User_ WHERE email=? ` //password validation

    const sql3 = `SELECT isActive FROM User_ WHERE email=?` //makes sure the user is active

    let idUser;
    let resultUser;
    let resultPassword;

    let mensaje = 'Usuario o contraseña inválidos' //mensaje updated

    ////////////////
    let token = '';

    const payload = {
        id: 1,
        email: req.body.email
    }

    console.log(req.body);

    function Fun(pw) {

        conexion.query(sql, [email], (error, results, fields) => {
            if (error){
                //console.log("kiti")git
                res.send(error);
            }
                else {

                if (results[0] != undefined) {

                    resultUser = results[0];
                    idUser = resultUser.idUser;

                    conexion.query(sql3, [email], (error, results3,fields) =>{

                        if(error)
                            res.send(error)
                        else{

                            console.log(results3[0])
                            if(results3[0].isActive == 1){
                                conexion.query(sql2, [email], (error, results2, fields) => {
    
                                    console.log("kiti")
                                    if (error)
                                        
                                        res.send(error);
                                    else {
            
                                        resultPassword = results2[0].password_;
                                        console.log(resultPassword)

            
                                        //////////7
                                        let pwd = pw;
                                        pwd = crypto.createHash('sha224')
                                            .update(pwd)
                                            .digest('hex');
            
                                        if (resultUser != undefined) {
                                            console.log(resultPassword);
            
                                            if (resultPassword === pwd) {
                                                token = jwt.sign(payload, config.key, { expiresIn: 432000 })
                                                mensaje = 'Usuario o contraseña autenticados'
            
                                            }
                                        }
                                    }
            
                                    res.json({
                                        mensaje,
                                        token,
                                        idUser
                                    })
                                })
            
                            }
                            else{ //the user exists, but is not active
                                mensaje = "Un administrador debe activar tu cuenta"
                                res.json({
                                    mensaje
                                })
                            }
                        }

                    })
                    
                } else {
                    res.json({
                        mensaje
                    })
                }

            }
        })
    }

    //1-> mensaje = "Usuario o contraseña inválidos"
    //2-> mensaje = "Un administrador debe activar tu cuenta"
    //3-> mensaje = "Usuario o contraseña autenticados", token, idUser 
    
    Fun(password_);
}
