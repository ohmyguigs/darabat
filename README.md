# Darabat
### Because everything is rhythm

This is a music album catalog.

This is a project created to learn about node.js + MySQL + angular.js as stack

The idea is to have a simple setup and a clear example to use these 3 technologies in harmony.

# Requirements to run locally

 To run this you will need Node.js and MySQL

### OSX
```shell
$ brew insall mysql node
```

### Linux
 ```shell
$ sudo apt-get update
$ sudo apt-get install mysql-server nodejs
```

# Setup

 - Run this npm script, **it will ask you for sudo privileges because it needs access to create a MySQL database and grant access for the app to consume it**.
```
npm run local-setup
```