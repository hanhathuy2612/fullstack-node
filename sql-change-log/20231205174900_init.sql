-- MySQL dump 10.13  Distrib 8.1.0, for macos14.0 (arm64)
--
-- Host: 127.0.0.1    Database: node_db_test
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `name` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('Áo Thun 1','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',1),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',2),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',3),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',4),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',5),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',6),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',7),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',8),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',9),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',10),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',11),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',12),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',13),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',14),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',15),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',16),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',17),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',18),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',19),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',20),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',21),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',22),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',23),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',24),('Áo Thun 2','https://pos.nvncdn.net/492284-9176/ps/20231014_HrqUH8Savu.jpeg',25),(NULL,NULL,26),(NULL,NULL,27),(NULL,NULL,28),(NULL,NULL,29),(NULL,NULL,30),(NULL,NULL,31),(NULL,NULL,32),(NULL,NULL,33),(NULL,NULL,34),(NULL,NULL,35);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05 17:48:53
