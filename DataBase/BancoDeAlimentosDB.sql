CREATE database BancoDeAlimentos;
use BancoDeAlimentos;

-- drop database BancoDeAlimentos;

CREATE TABLE User_(
 idUser int auto_increment,
 firstName varchar(25),
 lastName varchar(25),
 email varchar(50),
 password_ varchar(100),
 age int,
 sex varchar(10),
 phoneNumber varchar(15),
 userType varchar(20),
 primary key (idUser)
);

CREATE TABLE Family(
 idFamily int auto_increment,
 familyMembers int,
 familyLastName varchar(25),
 pregnancy int,
 primary key(idFamily)
);

CREATE TABLE MedicalCondition(
 name varchar(25),
 medicalConditionNumber int,
 idFamily int,
 CONSTRAINT fk_Family_MedicalCondition1
			FOREIGN KEY (idFamily) REFERENCES Family(idFamily)
);

CREATE TABLE QuestionList(
 idQuestionList int auto_increment,
 primary key(idQuestionList)
);

CREATE TABLE Question(
 idQuestion int,
 idQuestionList int,
 answer varchar(10),
 CONSTRAINT fk_QuestionList_Question1
			FOREIGN KEY (idQuestionList) REFERENCES QuestionList(idQuestionList),
primary key(idQuestion)
);

CREATE TABLE Survey(
 idSurvey int auto_increment NOT NULL,
 idUser int NOT NULL,
 idFamily int NOT NULL,
 date_ date,
 latitude double,
 longitude double,
 idQuestionList int NOT NULL,
 CONSTRAINT fk_User_Survey1
			FOREIGN KEY (idUser) REFERENCES User_(idUser),
CONSTRAINT fk_Family_Survey2
			FOREIGN KEY (idFamily) REFERENCES Family(idFamily),
CONSTRAINT fk_QuestionList_Survey3
			FOREIGN KEY (idQuestionList) REFERENCES QuestionList(idQuestionList),
 primary key (idSurvey)
);

CREATE TABLE FoodAvailable(
 idFoodAvailable int,
 foodName varchar(50),
 quantity int,
 primary key(idFoodAvailable)
);

CREATE TABLE FoodSuggested(
 idFamily int,
 idFoodAvailable int,
 foodName varchar(50),
 quantity int,
 CONSTRAINT fk_Family_FoodSuggested1
			FOREIGN KEY (idFamily) REFERENCES Family(idFamily),
CONSTRAINT fk_FoodAvailable_FoodSuggested2
			FOREIGN KEY (idFoodAvailable) REFERENCES FoodAvailable(idFoodAvailable)
);

use BancoDeAlimentos;
select * from User_;





