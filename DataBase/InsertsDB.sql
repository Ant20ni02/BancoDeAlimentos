use BancoDeAlimentos;

INSERT INTO Family(familyMembers, familyLastName, pregnancy)
VALUES (4, "Gardida Santos", 3);

insert into Survey(idUser,idFamily, latitude, longitude, date_) 
Values (1, "e01",10.25,0.5,"2022-09-27");

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


Select * from User_;
select * from Family;
select * from Survey;
select * from Question;
select * from MedicalCondition;