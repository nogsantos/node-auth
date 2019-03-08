# Nodejs Authenticate

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

<table>
    <tbody>
        <tr>
            <th>Lib</th>
        </tr>
        <tr>
            <td>Express</td>
        </tr>
        <tr>
            <td>Sequelize</td>
        </tr>
        <tr>
            <td>Sequelize-cli</td>
        </tr>
        <tr>
            <td>PostgreSQL - pg</td>
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
