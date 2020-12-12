-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: coaching_classes
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lkp_subjects`
--

DROP TABLE IF EXISTS `lkp_subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lkp_subjects` (
  `subjectId` int NOT NULL AUTO_INCREMENT,
  `subjectName` varchar(45) NOT NULL,
  `teacherId` int DEFAULT NULL,
  PRIMARY KEY (`subjectId`),
  KEY `FK_Users_subjects_idx` (`teacherId`),
  CONSTRAINT `FK_Users_subjects` FOREIGN KEY (`teacherId`) REFERENCES `students` (`studentId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lkp_subjects`
--

LOCK TABLES `lkp_subjects` WRITE;
/*!40000 ALTER TABLE `lkp_subjects` DISABLE KEYS */;
INSERT INTO `lkp_subjects` VALUES (1,'Analytics',1),(2,'Computer Network',3),(3,'Algorithms',5),(4,'C',7),(5,'C++',9),(6,'Java',1),(7,'Python',3),(8,'Javascript',5),(9,'Web Development',7),(10,'MainFrame',9),(11,'DotNet',1),(12,'Artificial Intelligence',3),(13,'Blockchain',5),(14,'Maths',7),(15,'Microprocessors',9),(16,'Advnace MAths',1),(18,'Internet of Things/IOT',1),(19,'Internet of Things/IOT- Advanced',1);
/*!40000 ALTER TABLE `lkp_subjects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-12 13:45:20
