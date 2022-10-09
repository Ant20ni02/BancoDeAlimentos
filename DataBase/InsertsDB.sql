use BancoDeAlimentos;

INSERT INTO User_ (firstName, lastName, email , password_ ,age ,sex , phoneNumber, userType)
VALUES ("Marco Antonio", "Gardida Cortes", "antoniogarcort@gmail.com", "060122", 19, "Masculino", "7341327624", "Admin");

INSERT INTO Family(familyMembers, familyLastName, pregnancy)
VALUES (4, "Gardida", 0);

insert into Survey(idFamily, date_, idQuestionList) 
Values (1, "2022-09-27", 1);

insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "4");
insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "5");
insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "3");

insert into Question(idQuestion, idSurvey, answer)
values(1, 1, "4");

Select * from User_;
select * from Question;