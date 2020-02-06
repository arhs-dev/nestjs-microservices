## Description

This a repository containing two nestjs applications. One Client and one Microservice based on the <b>Microservices-NestJS-Presentation</b>

## Installation

Go inside both projects and..

```bash
$ npm install
```

Also for window users run the redis-server.exe.

## Running the app

First run Redis with the redis-server.exe then you must start each application independently with

```bash
$ npm run start:dev
```

Then call from your Postman with a POST request this url http://localhost:3000/addName and pass a parameter <b>data</b> with a name.
In result you will have to see in your postman a result phrase with the name that you provided.
