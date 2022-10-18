use BancoDeAlimentos;

-- Familia

INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F01", 4, "Gardida Santos", 13);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F02", 3, "Jiménez García", 2);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F03", 3, "Xatruch Adame", 13);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F04", 4, "Hernández", 3);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F05", 3, "Martínez", 3);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F06", 3, "López", 0);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F07", 4, "González", 0);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F08", 3, "Pérez", 9);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F09", 3, "Rodríguez", 13);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("F10", 4, "Sánchez", 7);

-- Encuesta

insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F01",18.615576,-99.180106,"27-09-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F02",18.609638,-99.179805,"28-09-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F03",19.035095,-99.268125,"29-09-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F04",18.952639,-99.190534,"30-09-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F05",19.220393,-99.105728,"01-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F06",19.409446,-99.152935,"02-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F07",19.477432,-99.188297,"03-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F08",19.414627,-99.019382,"04-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F09",22.252007,-99.670640,"05-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "F10",24.047571,-98.900332,"06-10-2022");

insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("F02", 1, "Diabetes");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("F02", 1, "Diabetes");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("F04", 1, "Diabetes");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("F05", 2, "Hipertensión");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("F07", 1, "Hipertensión");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("F09", 1, "Obesidad");

insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 2, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 3, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 4, "3");
insert into Question(idQuestion, idSurvey, answer)
values(1, 5, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 6, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 7, "3");
insert into Question(idQuestion, idSurvey, answer)
values(1, 8, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 9, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 10, "6");

insert into Question(idQuestion, idSurvey, answer)
values(2, 1, "a01_b01_c01_d02_e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 2, "b01_c01_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 3, "a05_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 4, "c01_d01_e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 5, "e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 6, "d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 7, "a03_b03_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 8, "c02_d01_e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 9, "c03_d01");
insert into Question(idQuestion, idSurvey, answer)
values(2, 10, "a01_c03_d02");

insert into Question(idQuestion, idSurvey, answer)
values(5, 1, "Ninguno");
insert into Question(idQuestion, idSurvey, answer)
values(5, 2, "WHEY PROTEIN");
insert into Question(idQuestion, idSurvey, answer)
values(5, 3, "ENSURE");
insert into Question(idQuestion, idSurvey, answer)
values(5, 4, "CAL-C-TOSE");
insert into Question(idQuestion, idSurvey, answer)
values(5, 5, "Ninguno");
insert into Question(idQuestion, idSurvey, answer)
values(5, 6, "WHEY PROTEIN");
insert into Question(idQuestion, idSurvey, answer)
values(5, 7, "WHEY PROTEIN");
insert into Question(idQuestion, idSurvey, answer)
values(5, 8, "CAL-C-TOSE");
insert into Question(idQuestion, idSurvey, answer)
values(5, 9, "GLUCERNA");
insert into Question(idQuestion, idSurvey, answer)
values(5, 10, "Ninguno");

insert into Question(idQuestion, idSurvey, answer)
values(6, 1, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(6, 2, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(6, 3, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(6, 4, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(6, 5, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(6, 6, "No");
insert into Question(idQuestion, idSurvey, answer)
values(6, 7, "No");
insert into Question(idQuestion, idSurvey, answer)
values(6, 8, "No");
insert into Question(idQuestion, idSurvey, answer)
values(6, 9, "No");
insert into Question(idQuestion, idSurvey, answer)
values(6, 10, "No");

insert into Question(idQuestion, idSurvey, answer)
values(7, 1, "De 1 a 2 comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 2, "De 1 a 2 comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 3, "De 3 a más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 4, "De 3 a más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 5, "De 3 a más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 6, "De 3 a más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 7, "De 3 a más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 8, "De 1 a 2 comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 9, "De 3 a más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 10, "De 1 a 2 comidas");

insert into Question(idQuestion, idSurvey, answer)
values(8, 1, "No");
insert into Question(idQuestion, idSurvey, answer)
values(8, 2, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(8, 3, "No");
insert into Question(idQuestion, idSurvey, answer)
values(8, 4, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(8, 5, "No");
insert into Question(idQuestion, idSurvey, answer)
values(8, 6, "No");
insert into Question(idQuestion, idSurvey, answer)
values(8, 7, "Sí");
insert into Question(idQuestion, idSurvey, answer)
values(8, 8, "No");
insert into Question(idQuestion, idSurvey, answer)
values(8, 9, "No");
insert into Question(idQuestion, idSurvey, answer)
values(8, 10, "No");

insert into Question(idQuestion, idSurvey, answer)
values(9, 1, "Menos de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 2, "Menos de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 3, "Más de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 4, "Menos de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 5, "Menos de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 6, "Más de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 7, "Menos de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 8, "Menos de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 9, "Menos de $5,255 MXN");
insert into Question(idQuestion, idSurvey, answer)
values(9, 10, "Menos de $5,255 MXN");

insert into Question(idQuestion, idSurvey, answer)
values(10, 1, "20% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 2, "20% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 3, "35% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 4, "35% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 5, "20% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 6, "35% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 7, "20% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 8, "35% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 9, "50% aproximadamente");
insert into Question(idQuestion, idSurvey, answer)
values(10, 10, "20% aproximadamente");

-- "a_01_a_4000"
Select * from User_;
select * from Family;
select * from Survey;
select * from Question where ((idQuestion = 11) AND (SUBSTRING(answer,6,1)= 'a'));
select * from MedicalCondition;
-- SELECT SUBSTRING(answer,6,1) AS answer FROM Question WHERE ((idQuestion = 11) AND ((SUBSTRING(answer,3,2 ) = '01'  )));
-- delete from Question where idQuestion = 11;
-- SELECT SUBSTRING(answer,3,2) AS food, SUBSTRING(answer,8) AS quantity FROM Question WHERE ((idQuestion = 11) AND ((SUBSTRING(answer,1,1 ) = 'a'  )));
-- SELECT SUBSTRING(answer,6,1) AS freq, COUNT(*) AS cou FROM Question WHERE ((idQuestion = 11) AND ((SUBSTRING(answer,3,2 ) = '01'  ))) GROUP BY freq;
-- SELECT * FROM User_ WHERE ((userType = "Voluntario") AND (isActive = 1));
-- SELECT * FROM Question WHERE ((idSurvey = 2) AND (idQuestion = 1))
-- SELECT s.idFamily, s.idSurvey, s.latitude, s.longitude, familyLastName, date_ FROM Survey s JOIN Family f ON s.idFamily = f.idFamily WHERE idSurvey=2; 
-- SELECT m.medicalConditionName, m.medicalConditionNumber FROM MedicalCondition m JOIN Survey s ON m.idFamily = s.idFamily WHERE idSurvey= 4;
-- SELECT f.pregnancy FROM Family f JOIN Survey s ON f.idFamily = s.idFamily WHERE idSurvey= 3;
-- SELECT SUBSTRING(answer,6,1) AS freq, SUBSTRING(answer,8) AS quantity FROM Question WHERE ((idQuestion = 11) AND (idSurvey= 1) AND ((SUBSTRING(answer,3,2 ) = '11')))