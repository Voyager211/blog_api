# Blog API

A robust RESTful API for a blog application built with Node.js, Express, TypeScript, and MongoDB. This repository currently contains the backend API implementation, featuring secure JWT-based authentication.

> **Note:** Detailed API documentation (endpoints, request/response structures, etc.) is currently under development and will be added to this repository soon.

## 🚀 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** TypeScript
* **Database:** MongoDB (via Mongoose)
* **Authentication:** JSON Web Tokens (JWT) & HTTP-only Cookies
* **Security:** bcrypt (Password Hashing)

## 📁 Folder Structure

```text
BLOG_API/
├── src/
│   ├── config/         # Configuration files (e.g., jwt helper, db connection)
│   ├── controllers/    # Route controllers (Auth, Blog, etc.)
│   ├── middleware/     # Custom Express middleware (e.g., auth protection)
│   ├── models/         # Mongoose database schemas and models
│   ├── routes/         # Express route definitions
│   ├── types/          # TypeScript interfaces and types
│   └── index.ts        # Application entry point
├── .env                # Environment variables (ignored in git)
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration