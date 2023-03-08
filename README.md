# MERN Project

It's a simple MERN project refers to a web application that uses the MERN stack to build its frontend and backend components.

## Tech Stack

**Client:** React, Axios

**Server:** Node, Express, MongoDB

## Lessons Learned

This simple MERN project is a good starting point for learning how to build a basic CRUD application using the MERN stack. It covers essential concepts such as creating a frontend with React.js, building a backend API with Node.js and Express.js, connecting to a MongoDB database, and making HTTP requests between the frontend and backend.

## Installation

**Backend:**

initialize project

```bash
    npm init --y
```

install package

```bash
    npm install express mongoose cors nodemon dotenv
```

run server

```bash
    node index.js
```

or
add nodemon in package.json

```bash
    npm start
```

**Frontend:**

install wih Vite:

```bash
    npm create vite@latest
```

run

```bash
    $ npm install
    $ npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_USERNAME`

`MONGO_PASSWORD`

`MONGO_DBNAME`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Asadujjaman47/MERN-Project.git
```

**Backend:**

Go to the project directory (server)

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

**Frontend:**

Go to the project directory (client)

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Reference

#### Get all items

```http
  GET /getUsers
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `api_key` | `string` | Get all users |

#### Get item

```http
  POST /createUser
```

| Parameter | Type   | Body                                              |
| :-------- | :----- | :------------------------------------------------ |
| `id`      | `json` | {"name": "Azad2","age": 35,"username": "Azad352"} |

## Feedback

If you have any feedback, please reach out to us at asadujjaman255@gmail.com
