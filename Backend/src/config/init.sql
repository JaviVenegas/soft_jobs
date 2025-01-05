-- Active: 1729978767201@@127.0.0.1@5432@softjobs


--create database named softjobs
CREATE DATABASE softjobs;


\c softjobs;

--create table 


CREATE TABLE usuarios ( id SERIAL, email VARCHAR(50) NOT NULL, password
VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );


-- revisar datos ingresados 

SELECT * FROM usuarios;


INSERT INTO usuarios VALUES
( DEFAULT,'admin@gmail.com', '123456', '17.681.345-7', 'ingles'),
( DEFAULT,'admin22@gmail.com', '147258', '19.345.345-7', 'ingles')


