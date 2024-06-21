-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 21 juin 2024 à 13:42
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
-- Structure de la table `etudiants`
--

CREATE TABLE `etudiants` (
  `matricule` int(11) NOT NULL,
  `nom` varchar(60) NOT NULL,
  `prenom` varchar(80) NOT NULL,
  `id_filiere` int(11) NOT NULL,
  `dateN` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etudiants`
--

INSERT INTO `etudiants` (`matricule`, `nom`, `prenom`, `id_filiere`, `dateN`, `password`, `email`) VALUES
(1, 'brandon', 'hjbhj', 2, '2024-06-17', '', ''),
(2, 'brandon', 'hjbhj', 2, '2024-06-17', '', ''),
(3, 'brandon', 'hjbhj', 2, '2024-06-12', '', ''),
(4, 'vixfgit@gmail.com', 'hjbhj', 3, '2024-06-20', '', ''),
(5, 'brandon', 'hjbhj', 1, '2024-06-12', '', ''),
(6, 'vixfgit@gmail.com', 'hjbhj', 3, '2024-06-12', '', ''),
(7, 'vixfgit@gmail.com', 'hjbhj', 3, '2024-06-12', '', ''),
(8, 'vixfgit@gmail.com', 'hjbhj', 3, '2024-06-12', '', ''),
(9, 'vixfgit@gmail.com', 'hjbhj', 3, '2024-06-12', '', ''),
(10, 'brandon', 'hjbhj', 2, '2024-06-12', '', ''),
(11, 'bou', 'bou', 1, '2024-06-27', 'brandon', ''),
(12, 'brandon', 'hjbhj', 2, '2024-06-12', 'fidelin', 'b@gmail.com');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etudiants`
--
ALTER TABLE `etudiants`
  ADD PRIMARY KEY (`matricule`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `matricule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
