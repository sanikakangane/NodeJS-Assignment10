# NodeJS-Assignment10

A beginner-friendly Node.js Express assignment created to understand Firebase Firestore connection using Firebase Admin SDK, schema validation using Joi, routing, POST requests, and storing user data in Firestore.

## Tasks

1. Firebase Firestore Connection
2. Create User Schema
3. Schema Validation
4. Create User Router
5. POST `/api/users`
6. Store User Data in Firestore
7. Handle Validation Errors

## Project Structure

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

## Concepts Used

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

### Task 1: Firebase Firestore Connection

Connected the Express application to Firebase Firestore using the Firebase Admin SDK.

Successful connection message:

    Firebase Firestore connected successfully!

### Task 2: Create User Schema

Created `userSchema.js` inside the `schema` folder.

The schema contains the following fields:

    name
    email
    age
    course

### Task 3: Schema Validation

Used Joi to validate the received user data before storing it in Firestore.

The validation rules are:

    name   → required
    email  → required and valid email
    age    → required and valid range
    course → required

### Task 4: Create User Router

Created `userRouter.js` inside the `router` folder.

The router contains the following route:

    POST /api/users

### Task 5: POST `/api/users`

Used the POST route to accept user data, validate it, and store valid data in Firestore.

Example request:

    {
      "name": "Sanika Kangane",
      "email": "sanika@example.com",
      "age": 19,
      "course": "B.Tech CSE"
    }

Successful response:

    {
      "success": true,
      "message": "User data stored successfully",
      "id": "generated_by_firestore"
    }

### Task 6: Store User Data in Firestore

Valid user data is stored in the Firestore collection:

    users

The stored document contains:

    name
    email
    age
    course

### Task 7: Handle Validation Errors

Invalid user data is rejected before it is stored in Firestore.

Example validation error response:

    {
      "success": false,
      "message": "Validation failed",
      "error": "Validation error message"
    }

## Firebase Firestore

Collection:

    users

Example document:

    name: Sanika Kangane
    email: sanika@example.com
    age: 19
    course: B.Tech CSE

## How to Run

Install the required packages:

    npm install

Start the server:

    node server.js

The server runs on:

    http://localhost:3000

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/users` | Validate and store a new user in Firestore |

## Expected Output

### Firebase Connection

    Firebase Firestore connected successfully!
    Server running on http://localhost:3000

### POST Request

    {
      "success": true,
      "message": "User data stored successfully",
      "id": "generated_by_firestore"
    }

### Validation Error

    {
      "success": false,
      "message": "Validation failed",
      "error": "Validation error message"
    }

## Author

**Sanika Kangane 👩🏻‍💻**
