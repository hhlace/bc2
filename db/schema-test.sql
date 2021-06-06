-- MySQL Workbench Forward Engineering
CREATE DATABASE main_db;
USE main_db;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema plataforma5
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NULL,
  `email` VARCHAR(255) NOT NULL,
  `passwordEncrypted` VARCHAR(255) NULL,
  `firstName` VARCHAR(255) NULL,
  `lastName` VARCHAR(255) NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` (id,userName,email,passwordEncrypted,firstName,lastName)
values
(1,'userName', 'user@mail.com', '$2a$10$y1YpEHpRV7FH9WE./JA5k.ZWNYiMmifrojBXuOtdNukcPxj2FRWYe', 'Juan', 'Sanchez');

/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

CREATE TABLE IF NOT EXISTS `invoice` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cuit` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `comment` VARCHAR(255) NULL,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` (id,cuit,date,comment)
values
(1,'20338342341', '2020-06-02', 'Un comentario');

INSERT INTO `invoice` (id,cuit,date,comment)
values
(2,'20338342354', '2021-06-02', 'Otro comentario');


/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

