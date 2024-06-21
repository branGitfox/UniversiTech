-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 21 juin 2024 à 13:41
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `universitech`
--

-- --------------------------------------------------------

--
-- Structure de la table `horaire`
--

CREATE TABLE `horaire` (
  `id_emploi` int(11) NOT NULL,
  `lundi_7h15_9h15` varchar(100) NOT NULL,
  `lundi_9h15_11h15` varchar(100) NOT NULL,
  `lundi_12h30_14h` varchar(100) NOT NULL,
  `lundi_14h_15h30` varchar(100) NOT NULL,
  `mardi_7h15_9h15` varchar(100) NOT NULL,
  `mardi_9h15_11h15` varchar(100) NOT NULL,
  `mardi_12h30_14h` varchar(100) NOT NULL,
  `mardi_14h_15h30` varchar(100) NOT NULL,
  `mercredi_7h_9h15` varchar(100) NOT NULL,
  `mercredi_9h15_11h15` varchar(100) NOT NULL,
  `mercredi_12h30_14h` varchar(100) NOT NULL,
  `mercredi_14h_15h30` varchar(100) NOT NULL,
  `jeudi_7h15_9h15` varchar(100) NOT NULL,
  `jeudi_9h15_11h15` varchar(100) NOT NULL,
  `jeudi_12h30_14h` varchar(100) NOT NULL,
  `jeudi_14h_15h30` varchar(100) NOT NULL,
  `vendredi_7h15_9h15` varchar(100) NOT NULL,
  `vendredi_9h15_11h15` varchar(100) NOT NULL,
  `vendredi_12h30_14h` varchar(100) NOT NULL,
  `vendredi_14h_15h30` varchar(100) NOT NULL,
  `samedi_7h15_9h15` varchar(100) NOT NULL,
  `samedi_9h15_11h15` varchar(100) NOT NULL,
  `annee_filiere` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `horaire`
--

INSERT INTO `horaire` (`id_emploi`, `lundi_7h15_9h15`, `lundi_9h15_11h15`, `lundi_12h30_14h`, `lundi_14h_15h30`, `mardi_7h15_9h15`, `mardi_9h15_11h15`, `mardi_12h30_14h`, `mardi_14h_15h30`, `mercredi_7h_9h15`, `mercredi_9h15_11h15`, `mercredi_12h30_14h`, `mercredi_14h_15h30`, `jeudi_7h15_9h15`, `jeudi_9h15_11h15`, `jeudi_12h30_14h`, `jeudi_14h_15h30`, `vendredi_7h15_9h15`, `vendredi_9h15_11h15`, `vendredi_12h30_14h`, `vendredi_14h_15h30`, `samedi_7h15_9h15`, `samedi_9h15_11h15`, `annee_filiere`) VALUES
(0, 'dsvsdv', 'dsfdf', 'sdfsdf', 'dsfsd', 'dffd', 'sdfsd', 'dsf', 'gfh', 'wer', 'tyty', 'ww', 'nh', 'hjh', 'sdg', 'juy', 'jkjk', 'oui', 'popo', 'qw', 'lo', 'uio', 'plp', ''),
(1, 'der', 'rty', 'juk', 'uik', 'wetr', 'iop', 'iop', 'piop', 'piop', 'piop', 'oipoip', 'rty', 'loidf', 'gg', 'hh', 'pp', 'qq', 'we', 'op', 'zz', 'xx', 'ccc', 'L1'),
(2, 'NIUN', 'YTFYT', 'GVH', 'UYIO', 'LKLJ', 'QWE', 'CXZ', 'NNM', 'LOOKO', 'OUU', 'OPIP', 'OUOI', 'RERE', 'JHG', 'LOPO', 'WASD', 'BVC', 'BN', 'OP', 'IY', 'IU', 'IUOU', 'L1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
