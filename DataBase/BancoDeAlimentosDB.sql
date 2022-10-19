CREATE database BancoDeAlimentos;
use BancoDeAlimentos;

-- drop database BancoDeAlimentos;

CREATE TABLE User_(
 idUser int auto_increment NOT NULL,
 firstName varchar(25),
 lastName varchar(25),
 email varchar(50),
 password_ varchar(100),
 age int,
 sex varchar(10),
 phoneNumber varchar(15),
 userType varchar(20),
 isActive bool,
 primary key (idUser)
);

CREATE TABLE Family(
 idFamily varchar(100) NOT NULL,
 familyMembers int,
 familyLastName varchar(25),
 pregnancy int,
 primary key(idFamily)
);

CREATE TABLE MedicalCondition(
 medicalConditionName varchar(25),
 medicalConditionNumber int,
 idFamily varchar(100),
 CONSTRAINT fk_Family_MedicalCondition1
			FOREIGN KEY (idFamily) REFERENCES Family(idFamily)
);

CREATE TABLE Survey(
 idSurvey int auto_increment NOT NULL,
 idUser int NOT NULL,
 idFamily varchar(100) NOT NULL,
 latitude double,
 longitude double,
 date_ varchar(10),
 CONSTRAINT fk_User_Survey1
			FOREIGN KEY (idUser) REFERENCES User_(idUser),
CONSTRAINT fk_Family_Survey2
			FOREIGN KEY (idFamily) REFERENCES Family(idFamily),
 primary key (idSurvey)
);

CREATE TABLE Question(
 idQuestion int,
 idSurvey int,
 answer varchar(20),
 CONSTRAINT fk_Survey_Question1
			FOREIGN KEY (idSurvey) REFERENCES Survey(idSurvey)
);

CREATE TABLE FoodAvailable(
 idFoodAvailable int,
 foodName varchar(50),
 quantity int,
 primary key(idFoodAvailable)
);

CREATE TABLE FoodSuggested(
 idFamily varchar(100),
 idFoodAvailable int,
 foodName varchar(50),
 quantity int,
 CONSTRAINT fk_Family_FoodSuggested1
			FOREIGN KEY (idFamily) REFERENCES Family(idFamily),
 CONSTRAINT fk_FoodAvailable_FoodSuggested2
			FOREIGN KEY (idFoodAvailable) REFERENCES FoodAvailable(idFoodAvailable)
);

CREATE TABLE ProfilePictures(
 idProfilePicture INT AUTO_INCREMENT,
 idUser int NOT NULL,
 `type` varchar(20),
 name varchar(200),
 `data` BLOB,
 createdAt varchar(10), 
 updatedAt varchar(10),
 CONSTRAINT fk_User_ProfilePictures1
			FOREIGN KEY (idUser) REFERENCES User_(idUser),
 primary key (idProfilePicture)
);





