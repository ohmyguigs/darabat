#!/bin/bash

# setup constants
dbname="darabat"
username="app"
userpass="root"

Q1="CREATE DATABASE IF NOT EXISTS ${dbname} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
Q2="CREATE USER IF NOT EXISTS ${username}@localhost IDENTIFIED BY '${userpass}';"
Q3="GRANT ALL PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
Q4="FLUSH PRIVILEGES;"
sqlroutine="${Q1}${Q2}${Q3}${Q4}"

Q5="CREATE TABLE IF NOT EXISTS albums (
			id INT PRIMARY KEY AUTO_INCREMENT,
			title VARCHAR(100) NOT NULL,
			producer VARCHAR(100) NOT NULL,
			genre VARCHAR(100) NOT NULL,
			year YEAR NOT NULL,
			length INT NOT NULL
		);"
dbroutune="${Q5}"

# actual script
	echo "I will now create and configre database and give acess for node app to consume it..."
	mysql -e "${sqlroutine}"
  echo ""
	echo "I will now create tables on the created database..."
	mysql ${dbname} -e "${dbroutune}"
  echo ""
  echo "All done with initial setup! :)"
	exit