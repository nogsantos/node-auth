# Nodejs Authenticate

[![CircleCI](https://circleci.com/gh/nogsantos/node-auth.svg?style=svg)](https://circleci.com/gh/nogsantos/node-auth)

Simple Nodejs authenticate project.

## Requirements

<table>
    <tbody>
        <tr>
            <th>Tool</th>
            <th>Min. Version</th>
        </tr>
        <tr>
            <td>Node</td>
            <td>>= 10.x</td>
        </tr>
        <tr>
            <td>NPM</td>
            <td>>= 5.6.x</td>
        </tr>
        <tr>
            <td>Docker</td>
            <td>>= 18.9.x</td>
        </tr>
        <tr>
            <td>docker-compose</td>
            <td>>= 1.23.x</td>
        </tr>
    </tbody>
</table>

## Project dependencies

```bash
$ npm i
```

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Purpose</th>
        </tr>
        <tr>
            <td><a href="http://docs.sequelizejs.com/" target="_blank">Sequelize</a></td>
            <td>Database ORM for Node</td>
        </tr>
        <tr>
            <td><a href="https://github.com/sequelize/cli#documentation" target="_blank">Sequelize-cli</a></td>
            <td>Sequelize Command Line Interface (CLI)</td>
        </tr>
        <tr>
            <td><a href="https://jestjs.io/docs/en/getting-started" target="_blank">Jest</a></td>
            <td>JavaScript Testing Framework</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/supertest" target="_blank">Supertest</a></td>
            <td>HTTP assertions made easy via <a href="http://visionmedia.github.io/superagent/" target="_blank">superagent</a>.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/bcryptjs" target="_blank">Bcryptjs</a></td>
            <td>Optimized bcrypt in JavaScript</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/factory-girl" target="_blank">factory-girl</a></td>
            <td>Is a factory library for Node.js</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/faker" target="_blank">faker</a></td>
            <td>Generate massive amounts of fake data in the browser and node.js</td>
        </tr>
    </tbody>
</table>

## Start databases

Will runs the postgres and if necessary, mongoDB

```bash
$ docker-compose up -d
```

> To follow the logs, `$ docker logs -f node-auth-db`

## Run

```bash
$ node src/server.js
```

## Sequelize

### init

Initialize sequelize

```bash
$ ./node_modules/.bin/sequelize init
```

### migrations

#### create

```bash
$  ./node_modules/.bin/sequelize migration:create --name=[migration-name]

Ex.:

$ ./node_modules/.bin/sequelize migration:create --name=create-users
```

#### run

```bash
$ ./node_modules/.bin/sequelize db:migrate
```

## Jest

### Init

Runs only when the project is not configurate yet.

```bash
$  ./node_modules/.bin/jest --init
```

### run

```bash
$  node test
```
