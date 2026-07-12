# Blog API

  

A robust RESTful API for a blog application built with Node.js, Express, TypeScript, and MongoDB. This backend implements secure, stateless authentication and complete CRUD functionality for blog management, complete with interactive API documentation.

  

## ✨ Features

  

* **Secure Authentication:** JWT-based auth utilizing HTTP-only cookies to mitigate XSS attacks.

* **Blog Management:** Full CRUD (Create, Read, Update, Delete) operations for blog posts.

* **Data Ownership:** Strict authorization checks ensuring only original authors can update or delete their posts.

* **Data Validation:** Mongoose schemas enforce data integrity (e.g., locking post status to 'draft' or 'published').

* **Interactive Documentation:** Fully documented with Swagger UI for easy endpoint testing and visualization.

  

## 🚀 Tech Stack

  

* **Runtime:** Node.js

* **Framework:** Express.js

* **Language:** TypeScript

* **Database:** MongoDB (via Mongoose)

* **Authentication:** JSON Web Tokens (JWT) & HTTP-only Cookies

* **Security:** bcrypt (Password Hashing)

* **Documentation:** Swagger (swagger-jsdoc & swagger-ui-express)

  

## 📁 Folder Structure

  

```text

BLOG_API/

├── src/

│   ├── config/         # Configuration files (e.g., db connection)

│   ├── controllers/    # Route controllers (Auth, Blog)

│   ├── docs/           # Swagger YAML configurations and schema definitions

│   ├── middleware/     # Custom Express middleware (e.g., auth protection)

│   ├── models/         # Mongoose database schemas and models (User, Blog)

│   ├── routes/         # Express route definitions

│   ├── types/          # TypeScript interfaces and custom types

│   └── index.ts        # Application entry point

├── .env                # Environment variables (ignored in git)

├── package.json        # Project dependencies and scripts

└── tsconfig.json       # TypeScript configuration

  

```

  

## 🛠️ Installation & Setup

  

### 1. Prerequisites

  

Ensure you have the following installed on your machine:

  

* [Node.js](https://nodejs.org/) (v16 or higher)

* [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)

  

### 2. Clone the Repository

  

```bash

git clone [https://github.com/your-username/blog-api.git](https://github.com/your-username/blog-api.git)

cd blog-api

  

```

  

### 3. Install Dependencies

  

```bash

npm install

  

```

  

### 4. Environment Variables

  

Create a `.env` file in the root directory of the project and add the following variables:

  

```env

PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_super_secret_jwt_key

NODE_ENV=development

  

```

  

### 5. Run the Server

  

To start the server in development mode with live-reloading (Nodemon):

  

```bash

npm run dev

  

```

  

## 📚 API Documentation

  

Once the server is running, you can access the interactive Swagger UI documentation in your browser. This interface allows you to view all available endpoints, required payload structures, and test the API directly.

  

**Visit:** `http://localhost:3000/api-docs` *(Adjust the port if you changed it in your .env)*

  

### Available Routes

  

**Auth:**

  

* `POST /auth/register` - Register a new user

* `POST /auth/login` - Authenticate a user and set cookie

* `POST /auth/logout` - Clear the authentication cookie

  

**Blogs:**

  

* `GET /blogs/` - Fetch all published blogs (Public)

* `GET /blogs/:id` - Fetch a specific published blog (Public)

* `POST /blogs/` - Create a new blog post (Protected)

* `PATCH /blogs/:id` - Update an existing blog post (Protected, Author only)

* `DELETE /blogs/:id` - Delete a blog post (Protected, Author only)

  