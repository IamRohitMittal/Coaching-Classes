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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roleId` int DEFAULT '1',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Abhishek','','',1),(2,'Babita','','',1),(3,'Chaitra','','',1),(4,'Divya','','',1),(5,'Ekta','','',1),(6,'Fiza','','',1),(7,'Gomati','','',1),(8,'Hridul','','',1),(9,'Isha','','',1),(10,'Jagat','','',1),(11,'Kashi','','',1),(12,'Lajpat','','',1),(13,'Mohan','','',1),(14,'Nisha','','',1),(15,'Oman','','',1),(16,'Paras','','',1),(17,'Qutub','','',1),(18,'Rohitash','','',1),(19,'Madhu','madhu.garg@gmail.com','$2b$10$m7wCAEqgb77iOyIVBCoVEOkOO0k7Yo7VNO5n79xCQUEhaueKX1kD.',1),(20,'Naina','naina.garg@gmail.com','$2b$10$rPT4PmbEHTPqBXdnHtBcZ.p3ofUr5GBjrXC22VKwPzEzQjxc6QQJS',1),(21,'Raghav','raghav.garg@gmail.com','$2b$10$3PiPeVwq/0G4VwYmV2419.0gpo25FmiXqkPrc3onqzXACCY3ATasa',2),(22,'Raghav','raghav1.garg@gmail.com','$2b$10$w6pfu5TTPDy9sKAN1FuTuOqUdHRcEFRlCP5CxryRXKQbHL9jU3dRK',2),(23,'Raghav','raghav2.garg@gmail.com','$2b$10$L/WnI7q9Eu0rtjRvOwGcROW6mv4LnA3OMmt96nioWgcCWUPx7pta2',1),(24,'Raghav','raghav3.garg@gmail.com','$2b$10$uJB7AAMCUgDoFhuZ.bQ.t.jDLLwup4X6QWLQ08sSevN1EPsF1szoG',2),(25,'Rohit','rohit.mittal@gmail.com','$2b$10$0PSvfoQBXcocxZkdT/zrbu1/CGRxpJntIzc91KwKeTgNQ2Y8K9hbi',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-12 13:45:19
