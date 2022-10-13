use BancoDeAlimentos;

INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("E01", 4, "Gardida Santos", 3);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("E02", 3, "Jiménez García", 2);
INSERT INTO Family(idFamily, familyMembers, familyLastName, pregnancy)
VALUES ("E03", 3, "Xatruch Adame", 13);

insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E01",10.25,0.55,"27-09-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E01",11.25,1.55,"28-09-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E03",12.25,2.55,"29-09-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E02",13.25,3.55,"30-09-2022");

insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E03",15.25,4.55,"01-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E02",16.25,4.55,"02-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E01",17.25,5.55,"03-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E03",18.25,6.55,"04-10-2022");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "E02",19.25,7.55,"11-10-2022");

insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("E01", 1, "Diabetes");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("E01", 1, "Obesidad");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("E03", 2, "Diabetes");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("E02", 1, "Hipertensión");

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
values(1, 7, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 8, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 9, "4");

insert into Question(idQuestion, idSurvey, answer)
values(2, 1, "a01_b01_c01_d02_e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 2, "b01_c01_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 3, "a01_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 4, "c01_d01_e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 5, "e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 6, "d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 7, "a02_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 8, "c02_d01_e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 9, "c03_d01");

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

-- "a_01_a_4000"
Select * from User_;
select * from Family;
select * from Survey;
select * from Question;
delete from Question where idQuestion = 11;
select * from MedicalCondition;
-- SELECT SUBSTRING(answer,3,2) AS food, SUBSTRING(answer,8) AS quantity FROM Question WHERE ((idQuestion = 11) AND ((SUBSTRING(answer,1,1 ) = 'c')));
-- SELECT SUBSTRING(answer,6,1) AS answer, COUNT(*) AS freq FROM Question WHERE ((idQuestion = 11) AND ((SUBSTRING(answer,3,2 ) = '11'))) GROUP BY answer;
-- SELECT * FROM User_ WHERE ((userType = "Voluntario") AND (isActive = 1));
-- SELECT * FROM Question WHERE ((idSurvey = 2) AND (idQuestion = 1))