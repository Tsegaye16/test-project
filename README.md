# MERN-Stack crude app

[See Live Demo](https://testproject-frrghjhlw-tsegaye-abewas-projects.vercel.app/)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node](https://nodejs.org/en)
- [npm](https://www.npmjs.com)
- [MongoDB](https://www.mongodb.com)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

Clone the repository:

```cmd
git clone https://github.com/Tsegaye16/test-project.git
```

Navigate to the project directory:

```cmd
cd test-project
```

## Project Structure

```
test-project/
    client/
        publick/
        src/
        package.json
        package-lock.json
    server/
        models/
        routes/
        app.js
        package.json
        package-lock.json
        docker-compose.yml
        Dockerfile
        tsconfig
```

## Usage

## To set up server-side

1. Navigate to server by :

```cmd
cd server
```

### 1. to start the server on docker

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
NODE_ENV=development
PORT=4000
DATABASE_LOCAL=mongodb://mongod_db:27017/project?directConnection=true
DATABASE_PASSWORD=YourPassword
```

1.1. Open your docker application and run

```cmd
docker compose build
```

This command will build the Docker images and start the containers.

1.2. Then run

```cmd
docker compose up
```

Great job 😂😂😂

Now express server is running on port 4000

2. To start the server on your local machine

   2.1. Install the required packages by running the following command in your terminal:

```cmd
npm install
```

1.2. Then run the following command to start the server:

```cmd
npm run start-dev
```

or

```cmd
npm run start
```

> [!NOTE]
> you can not run the server at the same time on docker and on your machine.

## 2. To set up client-side

1.1. Navigate to client by

```cmd
cd client
```

1.2. Install the required packages by running the following command in your terminal:

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
REACT_APP_LOCAL_API_BASE_URL='http://127.0.0.1:4000'

REACT_APP_PROD_API_BASE_URL='https://song-app-f3vs.onrender.com'
```

```cmd
npm install
```

then nur the following command to start the react app

```cmd
npm start
```

> [!Remember!🔥🧯🎆]
> If you run the back-end on localhost or docker

> - in the `client/src/apis/api.tsx` file change to

```tsx
const apiBaseURL = process.env.REACT_APP_LOCAL_API_BASE_URL;
```

> If you try to connect on render back-end,
>
> - in the `client/src/apis/api.tsx` file change to

```tsx
const apiBaseURL = process.env.REACT_APP_PROD_API_BASE_URL;
```
