const mysql = require('mysql');
const mysqlConfig = require('../helpers/mysql-config');
const conexion = mysql.createConnection(mysqlConfig);

module.exports.createFamily = (req, res) =>{
    const idFamily = req.body.idFamily;
    const familyMembers = req.body.familyMembers;
    const familyLastName = req.body.familyLastName;
    const pregnancy = req.body.pregnancy;
    //const latitude = req.body.latitude;
    //const longitude = req.body.longitude;


    const sql = `INSERT INTO Family (idFamily, familyMembers, familyLastName, pregnancy) VALUES(?,?,?,?)`

    conexion.query(sql, [idFamily, familyMembers, familyLastName, pregnancy], (error, results, fields)=>{
        
        if(error)
            res.send(error)
        else{
            res.json(results)
        }
    })

}

module.exports.assignMedicalCondition = (req,res) =>{

    /*
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
    })*/


    const doQuery = async (element) =>{
        await conexion.query (sql, [element.medicalConditionName, element.medicalConditionNumber, element.idFamily], (error, results, fields)=>{
            if(error)
                res.json(error);
            else{
                console.log(results);
            }
        })
    }

    const conditions = req.body.conditions;
    const sql = `INSERT INTO MedicalCondition (medicalConditionName,medicalConditionNumber, idFamily) VALUES(?,?,?)`;

    conditions.forEach(ele => {
        doQuery(ele);
    });
    res.json({"mensaje": "Condiciones insertadas satisfactoriamente"})
}

module.exports.getFamilies = (req,res) =>{
    const query = `SELECT s.idFamily, s.idSurvey, s.latitude, s.longitude, familyLastName, date_ FROM Survey s JOIN Family f
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

module.exports.getEnfermedades = (req,res) =>{
    const query = `SELECT medicalConditionName, SUM(medicalConditionNumber) as medicalConditionTotalNumber FROM MedicalCondition GROUP BY medicalConditionName`

    conexion.query(query,(error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results)
        }


    })


}

module.exports.getPregnancy = (req,res) =>{
    const query = `SELECT pregnancy , COUNT(*) AS freq FROM Family GROUP BY pregnancy`;

    conexion.query(query,(error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results)
        }


    })


}

module.exports.idFamilyExists = (req,res) =>{
    
    const idFamily = req.params.idFamily;
    const query = `SELECT idFamily from Family WHERE idFamily = ?`
    let exist = "false";

    conexion.query(query,[idFamily], (error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            if(results[0]!=undefined){
                exist = "true";
            }
            
            res.json({exist});


        }


    })


}

module.exports.getFamilyById = (req,res) =>{
    const idSurvey = req.params.idSurvey;
    const sql = `SELECT s.idFamily, s.idSurvey, s.latitude, s.longitude, familyLastName, date_ FROM Survey s JOIN Family f ON s.idFamily = f.idFamily WHERE idSurvey= ?  `;

    conexion.query(sql, [idSurvey], (error,results,fields) =>{
        if(error)
            res.send(error)
        else{
            res.json(
                results[0]
            )
        }
    })

}

module.exports.getEnfermedadesById = (req,res) =>{
    const idSurvey = req.params.idSurvey;
    const sql = `SELECT m.medicalConditionName, m.medicalConditionNumber FROM MedicalCondition m JOIN Survey s ON m.idFamily = s.idFamily WHERE idSurvey= ?  `;

    conexion.query(sql, [idSurvey], (error,results,fields) =>{
        if(error)
            res.send(error)
        else{
            res.json(
                results
            )
        }
    })

}

module.exports.getPregnancyById = (req,res) =>{
    const idSurvey = req.params.idSurvey;
    const sql = `SELECT f.pregnancy FROM Family f JOIN Survey s ON f.idFamily = s.idFamily WHERE idSurvey= ?`;

    conexion.query(sql, [idSurvey], (error,results,fields)=>{
        if(error)
            res.send(error)
        else{
            res.json(results[0])
        }


    })


}

module.exports.setPregnancy = (req,res) => {
    const pregnancy_months = req.params.months;
    const idFamily = req.params.idFamily;
    const query = `UPDATE Family SET pregnancy = ? WHERE idFamily = ?`

    conexion.query(query, [pregnancy_months, idFamily], (error, results, fields) =>{
        if(error)
            res.send(error)
        else{
            res.json(results)
        }

    })

}