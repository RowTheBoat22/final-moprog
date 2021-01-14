# Host: localhost  (Version 5.5.5-10.1.38-MariaDB)
# Date: 2021-01-15 01:11:16
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "matpel"
#

CREATE TABLE `matpel` (
  `id_matpel` int(11) NOT NULL AUTO_INCREMENT,
  `namamatpel` varchar(100) NOT NULL,
  `kelompok` enum('A','B','C') DEFAULT NULL,
  PRIMARY KEY (`id_matpel`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

#
# Data for table "matpel"
#

INSERT INTO `matpel` VALUES (1,'Matematika','A'),(2,'Biologi','A'),(3,'Bahasa Indonesia','B'),(4,'Sejarah','A');

#
# Structure for table "users"
#

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(32) NOT NULL,
  `userlevel` enum('1','2') DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "users"
#

INSERT INTO `users` VALUES ('1001','123','2'),('1002','123','2'),('1003','123','2'),('1004','123','2'),('admin','admin','1');

#
# Structure for table "siswa"
#

CREATE TABLE `siswa` (
  `username` varchar(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `jen_kel` varchar(10) DEFAULT NULL,
  KEY `username` (`username`),
  CONSTRAINT `siswa_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "siswa"
#

INSERT INTO `siswa` VALUES ('1001','Andi','Jakarta','Pria'),('1002','Budi','Bandung','Pria'),('1003','Cindy','Jogja','Wanita'),('1004','Dani','Papua','Wanita');

#
# Structure for table "nilai"
#

CREATE TABLE `nilai` (
  `username` varchar(20) NOT NULL,
  `id_matpel` int(11) NOT NULL,
  `pengetahuan` int(3) NOT NULL,
  `pengetahuan_grade` varchar(5) DEFAULT NULL,
  `keterampilan` int(3) NOT NULL,
  `keterampilan_grade` varchar(5) DEFAULT NULL,
  KEY `username` (`username`),
  KEY `id_matpel` (`id_matpel`),
  CONSTRAINT `nilai_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `nilai_ibfk_2` FOREIGN KEY (`id_matpel`) REFERENCES `matpel` (`id_matpel`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "nilai"
#

INSERT INTO `nilai` VALUES ('1001',1,90,'A',90,'A'),('1002',1,80,'B',65,'C'),('1001',2,70,'B',80,'B'),('1001',3,88,'A',88,'A'),('1001',4,50,'D',60,'C');
