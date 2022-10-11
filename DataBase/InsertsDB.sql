use BancoDeAlimentos;

INSERT INTO Family(familyMembers, familyLastName, pregnancy)
VALUES (4, "Gardida Santos", 3);

insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e01",10.25,0.55,"2022-09-27");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e02",11.25,1.55,"2022-09-28");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e01",12.25,2.55,"2022-09-29");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e02",10.25,0.55,"2022-09-30");

insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e01",15.25,3.55,"2022-10-01");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e02",16.25,4.55,"2022-10-02");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e01",17.25,5.55,"2022-10-03");
insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e02",18.25,6.55,"2022-10-04");


insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("e01", 1, "Diabetes");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("e01", 1, "Obesidad");
insert into MedicalCondition(idFamily, medicalConditionNumber, medicalConditionName)
Values ("e02", 2, "Diabetes");

insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "3");
insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "4");

insert into Question(idQuestion, idSurvey, answer)
values(2, 1, "a01_b01_c01_d02_e02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 1, "b01_c01_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 1, "a01_d02");
insert into Question(idQuestion, idSurvey, answer)
values(2, 1, "c01_d01_e02");

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
values(5, 5, "WHEY PROTEIN");
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
values(7, 3, "3 o más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 4, "3 o más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 5, "3 o más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 5, "3 o más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 6, "3 o más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 7, "3 o más comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 8, "De 1 a 2 comidas");
insert into Question(idQuestion, idSurvey, answer)
values(7, 9, "3 o más comidas");

Select * from User_;
select * from Family;
select * from Survey;
select * from Question;
select * from MedicalCondition;