use BancoDeAlimentos;

INSERT INTO Family(familyMembers, familyLastName, pregnancy)
VALUES (4, "Gardida Cortés", 0);

insert into Survey(idUser,idFamily, date_) 
Values (1, "e01",10.25,0.5,"2022-09-27");

insert into Question(idQuestion, idSurvey, answer)
values(1, 2, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 2, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 2, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 2, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 2, "3");
insert into Question(idQuestion, idSurvey, answer)
values(1, 2, "4");

Select * from User_;
select * from Family;
select * from Survey;
select * from Question;