# NodeJS-Assignment10

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#nodejs-assignment10)

A beginner-friendly Node.js Express assignment created to understand Firebase Firestore connection using Firebase Admin SDK, schema validation using Joi, routing, POST requests, and storing user data in Firestore.

## Tasks

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#tasks)

1. Firebase Firestore Connection
2. Create User Schema
3. Schema Validation
4. Create User Router
5. POST `/api/users`
6. Store User Data in Firestore
7. Handle Validation Errors

## Project Structure

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#project-structure)

    ├── Screenshots/
    ├── config/
    │   └── firebase.js
    ├── router/
    │   └── userRouter.js
    ├── schema/
    │   └── userSchema.js
    ├── .gitignore
    ├── README.md
    └── server.js

svg

## Concepts Used

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#concepts-used)

- Node.js
- Express.js
- Firebase Firestore
- Firebase Admin SDK
- Joi
- Express Routing
- Schema Validation
- `express.json()`
- `req.body`
- `res.status()`
- `res.json()`
- Async/Await
- Firestore Collection
- Error Handling

## Tasks Performed

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#tasks-performed)

### Task 1: Firebase Firestore Connection

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#task-1-firebase-firestore-connection)

Connected the Express application to Firebase Firestore using the Firebase Admin SDK.

Successful connection message:

    Firebase Firestore connected successfully!

svg

### Task 2: Create User Schema

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#task-2-create-user-schema)

Created `userSchema.js` inside the `schema` folder.

The schema contains the following fields:

    name
    email
    age
    course

svg

### Task 3: Schema Validation

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#task-3-schema-validation)

Used Joi to validate the received user data before storing it in Firestore.

The validation rules are:

    name   → required
    email  → required and valid email
    age    → required and valid range
    course → required

svg

### Task 4: Create User Router

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#task-4-create-user-router)

Created `userRouter.js` inside the `router` folder.

The router contains the following route:

    POST /api/users

svg

### Task 5: POST `/api/users`

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#task-5-post-apiusers)

Used the POST route to accept user data, validate it, and store valid data in Firestore.

Example request:

    {
      "name": "Sanika Kangane",
      "email": "sanika@example.com",
      "age": 19,
      "course": "B.Tech CSE"
    }

svg

Successful response:

    {
      "success": true,
      "message": "User data stored successfully",
      "id": "generated_by_firestore"
    }

svg

### Task 6: Store User Data in Firestore

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#task-6-store-user-data-in-firestore)

Valid user data is stored in the Firestore collection:

    users

svg

The stored document contains:

    name
    email
    age
    course

svg

### Task 7: Handle Validation Errors

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#task-7-handle-validation-errors)

Invalid user data is rejected before it is stored in Firestore.

Example validation error response:

    {
      "success": false,
      "message": "Validation failed",
      "error": "Validation error message"
    }

svg

## Firebase Firestore

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#firebase-firestore)

Collection:

    users

svg

Example document:

    name: Sanika Kangane
    email: sanika@example.com
    age: 19
    course: B.Tech CSE

## How to Run

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#how-to-run)

Install the required packages:

    npm install

svg

Start the server:

    node server.js

svg

The server runs on:

    http://localhost:3000

## Routes

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#routes)

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/users` | Validate and store a new user in Firestore |

## Expected Output

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#expected-output)

### Firebase Connection

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#firebase-connection)

    Firebase Firestore connected successfully!
    Server running on http://localhost:3000

svg

### POST Request

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#post-request)

    {
      "success": true,
      "message": "User data stored successfully",
      "id": "generated_by_firestore"
    }

svg

### Validation Error

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#validation-error)

    {
      "success": false,
      "message": "Validation failed",
      "error": "Validation error message"
    }

svg

## Author

[svg](https://github.com/sanikakangane/NodeJS-Assignment10#author)

**Sanika Kangane 👩🏻‍💻**
