-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.5.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla rosanix.tasks: ~5 rows (aproximadamente)
INSERT INTO `tasks` (`id`, `title`, `descr`, `createdAt`, `expiresIn`, `state`, `priority`, `userId`) VALUES
	(2, 'Tarea 2', NULL, '2024-11-15 05:44:36', NULL, 'completada', 'media', 2),
	(4, 'asdasd', NULL, '2024-11-15 05:52:48', NULL, 'pendiente', 'media', 2),
	(5, 'asdasdasdasd', NULL, '2024-11-15 05:52:56', NULL, 'pendiente', 'media', 2),
	(6, 'asdasd', NULL, '2024-11-15 06:45:08', NULL, 'pendiente', 'baja', 2),
	(7, 'asdasd', NULL, '2024-11-15 07:03:35', NULL, 'pendiente', 'alta', 2);

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
  `codePass` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla rosanix.users: ~2 rows (aproximadamente)
INSERT INTO `users` (`id`, `name`, `email`, `passw`, `role`, `createdAt`, `active`, `codeEmail`, `codePass`) VALUES
	(1, 'Administrador', 'admin@rosanix.com', '$2a$12$CclEkpW.0ydBI4s4gUZXqe.Xo6tq2j20mbM9K6VcL3ZxXTxxeeuJe', 'admin', '2024-11-15 04:30:20', 1, NULL, NULL),
	(2, 'Christian', 'c.salazar.vzla@gmail.com', '$2a$12$V/VAJgCryJTIqDiPE1kcJ.JChq51VdP0Na3FpWNfo4UqQUeQr.kxy', 'usuario', '2024-11-15 04:42:51', 1, NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
