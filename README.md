# Express REST API Boilerplate

Boilerplate/Generator/Starter Project for building RESTful APIs and microservices using Node.js, Express and Sequelize

## Requirements

 - [Node v8+](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Features

 - Uses [yarn](https://yarnpkg.com)
 - Logging with [morgan](https://github.com/expressjs/morgan)
 - Error handler with [rollbar](https://rollbar.com/)
 - Tests with [jest](https://jestjs.io/) and [supertest](https://github.com/visionmedia/supertest)
 - Express + Objection ([knex](https://vincit.github.io/objection.js/guide/installation.html))
 - Authentication and Authorization with [passport](http://www.passportjs.org/)
 - Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
 - Load environment variables from .env files with [dotenv](https://github.com/motdotla/dotenv)

## Getting Started

#### Install dependencies:

```bash
yarn
```

#### Add dependencies:

```bash
yarn add <package-name>
```

#### Set environment variables:

```bash
cp .env.example .env
```

#### Set database variables:

```bash
cp config/db.example.json config/db.json
```

## Running Locally

```bash
yarn dev
```

## Test

```bash
# run all tests with Jest
yarn test
```
