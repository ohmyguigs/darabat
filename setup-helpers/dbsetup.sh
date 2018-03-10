#!/bin/bash

# setup constants
dbname="darabat"
username="boop"
userpass="beep"

# If /root/.my.cnf exists then it won't ask for root password
if [ -f /root/.my.cnf ]; then
	echo "Creating new database named ${dbname}"
	echo "if you already have a database with this name this script will DROP it to create a fresh one!"
	read -p "Sure you want to continue (y/n)?" CONT
	if [ "$CONT" = "y" ]; then
		mysql -e "CREATE DATABASE ${dbname} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
		echo "Database successfully created!"
		echo "Showing existing databases..."
		mysql -e "show databases;"
		echo ""
		echo "Creating new user..."
		mysql -e "CREATE USER ${username}@localhost IDENTIFIED BY '${userpass}';"
		echo "User successfully created!"
		echo ""
		echo "Granting ALL privileges on ${dbname} to ${username}!"
		mysql -e "GRANT ALL PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
		mysql -e "FLUSH PRIVILEGES;"
		echo ""
		echo "Creating tables..."
		mysql -e "use ${dbname};"
		mysql -e "CREATE TABLE  albums (
			id INT PRIMARY KEY AUTO_INCREMENT,
			title VARCHAR(100) NOT NULL,
			producer VARCHAR(100) NOT NULL,
			genre VARCHAR(100) NOT NULL,
			year YEAR NOT NULL,
			lenght INT NOT NULL
		);"
		echo ""
		echo "Table created! Showing tables..."
		mysql -uroot -p${rootpasswd} -e "show tables;"
		echo ""
		echo "All done with initial setup! :)"
	else
		echo "Is ok, make a backup of your previous darabat database and try again..."
	fi
	exit
	
# If /root/.my.cnf doesn't exist then it'll ask for root password	
else
	echo "Please enter root user MySQL password! It won't show on the sreen..."
	read -sp rootpasswd
	echo "Creating new database named ${dbname}"
	echo "if you already have a database with this name this script will DROP it to create a fresh one!"
	read -p "Sure you want to continue (y/n)?" CONT
	if [ "$CONT" = "y" ]; then
		mysql -uroot -p${rootpasswd} -e "CREATE DATABASE ${dbname} /*\!40100 DEFAULT CHARACTER SET utf8 */;"
		echo "Database successfully created!"
		echo "Showing existing databases..."
		mysql -uroot -p${rootpasswd} -e "show databases;"
		echo ""
		echo "Creating new user..."
		mysql -uroot -p${rootpasswd} -e "CREATE USER ${username}@localhost IDENTIFIED BY '${userpass}';"
		echo "User successfully created!"
		echo ""
		echo "Granting ALL privileges on ${dbname} to ${username}!"
		mysql -uroot -p${rootpasswd} -e"GRANT ALL PRIVILEGES ON ${dbname}.* TO '${username}'@'localhost';"
		mysql -uroot -p${rootpasswd} -e "FLUSH PRIVILEGES;"
		echo ""
		echo "Creating table..."
		mysql -uroot -p${rootpasswd} -e "use ${dbname};"
		mysql -uroot -p${rootpasswd} -e "CREATE TABLE  albums (
			id INT PRIMARY KEY AUTO_INCREMENT,
			title VARCHAR(100) NOT NULL,
			producer VARCHAR(100) NOT NULL,
			genre VARCHAR(100) NOT NULL,
			year YEAR NOT NULL,
			lenght INT NOT NULL
		);"
		echo ""
		echo "Table created! Showing tables..."
		mysql -uroot -p${rootpasswd} -e "show tables;"
		echo ""
		echo "All done with initial setup! :)"
	else
		echo "Is ok, make a backup of your previous darabat database and try again..."
	fi
	exit
fi