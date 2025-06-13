# Recipe Sharing Platform API

A robust backend API built with **Node.js**, **Express.js**, and **SQLite**, using **Object-Oriented Programming (OOP)** to manage users and recipes. This platform allows users to register, log in, and perform full CRUD operations on shared recipes.

---

## Features

- User Authentication with JWT  
- Register / Login / Profile Management  
- Recipe CRUD Operations  
- Uses OOP Principles (encapsulation, abstraction)  
- SQLite Database  
- Protected routes using middleware  
- Organized codebase using MVC pattern  

---

## Project Structure

<pre> ## Project Structure ```text node-project/ ├── app.js # Entry point ├── .env # Environment variables ├── recipe.db # SQLite database file ├── controllers/ # Business logic │ ├── userController.js │ └── recipeController.js ├── models/ # Classes for User and Recipe │ ├── User.js │ └── Recipe.js ├── middleware/ # Auth middleware │ └── authMiddleware.js ├── routes/ # Route handlers │ ├── userRoutes.js │ └── recipeRoutes.js └── db/ # SQLite connection └── db.js ``` </pre>
yaml
Copy
Edit

---

## API Endpoints

### Auth Routes (`/api/users`)

| Method | Endpoint    | Description         |
|--------|-------------|---------------------|
| POST   | /register   | Register new user   |
| POST   | /login      | Login + get token   |
| GET    | /profile    | Get user profile    |

> Requires Bearer Token for `/profile`

---

### Recipe Routes (`/api/recipes`)

| Method | Endpoint  | Description           |
|--------|-----------|-----------------------|
| POST   | /         | Add a new recipe      |
| GET    | /         | Get all recipes       |
| GET    | /:id      | Get recipe by ID      |
| PATCH  | /:id      | Update recipe by ID   |
| DELETE | /:id      | Delete recipe by ID   |

> All Recipe routes require Bearer Token

---

## Installation

```bash
git clone https://github.com/jakkulanissy10/recipe-sprint-project.git  
cd recipe-sprint-project  
npm init -y  
npm install express bcryptjs jsonwebtoken sqlite3 dotenv nodemon  
Create a .env file:

env
Copy
Edit
JWT_SECRET=yourSuperSecretKey
Run the app:
nodemon app.js
Authentication Flow
Register user

Login to get JWT

Use JWT as Bearer Token for protected routes

OOP Concepts Used
User and Recipe classes encapsulate logic

Controllers call class methods instead of writing DB logic directly

Promotes code reusability, clean structure, and testability

Deployment
Live URL:
https://recipe-sprint-project.onrender.com


