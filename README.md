## Overview

 Product management REST API built with Node.js, Express, Prisma and  MongoDB. It allows users to perform CRUD operations on products, including adding, retrieving, updating, and deleting product information.

## Features

- Product management (CRUD operations)


## Tech Stack

**Backend:**
- Node.js
- Express
- MongoDB (with Prisma ORM)



## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ahad30/Restful_Api.git
cd Restful_Api
```

### 2. Set up the backend

```bash
npm install
```

```
Base Url: http://localhost:5000/api/v1
Note:If prisma schema didn't auto generate on "npm i", use this command "npx prisma generate" after "npm i"
```

Create a `.env` file in the backend directory:

```env
DATABASE_URL="mongodb+srv://username:password@cluster0.qxclpw1.mongodb.net/databasename?retryWrites=true&w=majority"
PORT=5000
```


### Start the backend

```bash
nodemon
```

## Project Structure

```
│   ├── prisma/           # Prisma schema
│   │   └── schema.prisma
│   ├── src/              # Backend source
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # secure data
│   │   ├── routes/       # API routes
│   ├── index.js          # Express server