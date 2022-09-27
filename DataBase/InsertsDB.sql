use BancoDeAlimentos;

INSERT INTO User_ (firstName, lastName, email , password_ ,age ,sex , phoneNumber, userType)
VALUES ("Marco Antonio", "Gardida Cortes", "antoniogarcort@gmail.com", "060122", 19, "Masculino", "7341327624", "Admin");

INSERT INTO Family(familyMembers, familyLastName, pregnancy)
VALUES (4, "Gardida", 0);

insert into Survey(idFamily, date_, idQuestionList) 
Values (1, "2022-09-27", 1);

insert into QuestionList (idQuestionList)
values(1);


Select * from User_;