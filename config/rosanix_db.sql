-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.5.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para rosanix
CREATE DATABASE IF NOT EXISTS `rosanix` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `rosanix`;

-- Volcando estructura para tabla rosanix.tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `descr` text DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `expiresIn` datetime DEFAULT NULL,
  `state` enum('pendiente','completada') NOT NULL DEFAULT 'pendiente',
  `priority` enum('baja','media','alta') NOT NULL DEFAULT 'media',
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla rosanix.tasks: ~6 rows (aproximadamente)
INSERT INTO `tasks` (`id`, `title`, `descr`, `createdAt`, `expiresIn`, `state`, `priority`, `userId`) VALUES
	(1, 'Tarea 1', 'Yep', '2024-11-13 11:53:00', NULL, 'pendiente', 'media', 1),
	(3, 'Tarea 3', 'It works', '2024-11-13 11:55:39', NULL, 'pendiente', 'baja', 1),
	(5, 'Tarea 4', 'Do something', '2024-11-13 12:01:26', '2024-11-20 00:00:00', 'pendiente', 'alta', 1),
	(6, 'Tarea 5', 'Let\'s see', '2024-11-13 12:04:23', NULL, 'pendiente', 'alta', 1),
	(7, 'Tarea 6', NULL, '2024-11-13 12:22:24', NULL, 'pendiente', 'media', 1),
	(8, 'Tarea 7', NULL, '2024-11-13 12:23:04', NULL, 'pendiente', 'media', 1);

-- Volcando estructura para tabla rosanix.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passw` varchar(255) NOT NULL,
  `role` enum('admin','usuario') NOT NULL DEFAULT 'usuario',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `codeEmail` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla rosanix.users: ~3 rows (aproximadamente)
INSERT INTO `users` (`id`, `name`, `email`, `passw`, `role`, `createdAt`, `active`, `codeEmail`) VALUES
	(1, 'Christian', 'c.salazar.vzla@gmail.com', '$2a$12$qci4XLaoCTcScES2HB/HT.j/0UPqKhVe08rBkAyvks2DCF7gwk1V2', 'usuario', '2024-11-13 11:50:25', 1, NULL),
	(2, 'Admin', 'thelonelinessofhades@gmail.com', '$2a$12$DDzNsJnJg6JFiRR.w5G9IO8RiRRSZDIj/OEp45eJkxqCHVmzZB9wS', 'admin', '2024-11-13 13:09:22', 1, ''),
	(3, 'Usuario test', 'test@test.com', '$2a$12$iETqaSbyouqrAolg4Eoewe99etsPeAiBzG56Jauar44rT/n8xOIOG', 'usuario', '2024-11-13 13:55:39', 0, '4adbb40e-f4e2-469f-bf17-e4ed2f425d5a'),
	(4, 'Usuario', 'testing@test.com', '$2a$12$HjnPaRiz3kVxNnR8s8qLwugCtioWx9Scdbm.NGZ/dzUg1EkyOU9y.', 'usuario', '2024-11-13 14:00:44', 1, NULL),
	(5, 'Administrador', 'admin@test.com', '$2a$12$fafz2Gsmi2XFoNhJDAx.JOc64hYlf19kKbskZdrJoMwefqJPS7zci', 'admin', '2024-11-13 14:02:05', 1, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
