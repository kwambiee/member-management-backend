# Member Management Backend

This is the backend for the Member Management system, built with Node.js, Express, Sequelize, and SQLite. It provides APIs for managing users, roles, members, and activity logs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kwambiee/member-management-backend.git
   cd member-management-backend

2. Install dependencies:

    ```sh
    npm install


## Usage

1. Start the development server:

    ```sh
    npm run dev

2. The server will be running at http://localhost:4000.

## API Endpoints

    - POST /api/users - Create a new user
    - GET /api/users - Get all users (authenticated route)
    - GET /api/users/:id - Get a user by ID (authenticated route)
    - PUT /api/users/:id - Update a user by ID 
    - DELETE /api/users/:id - Delete a user by ID (authenticated route)
    - GET /api/roles - Get all roles 
    - POST /api/roles - Create a new role
    - GET /api/roles/:id - Get a role by ID
    - GET /api/members - Get all members (authenticated route)
    - POST /api/members - Create a new member (authenticated route)
    - GET /api/members/:id - Get a member by ID (authenticated route)
    - PUT /api/members/:id - Update a member by ID (authenticated route)
    - DELETE /api/members/:id - Delete a member by ID (authenticated route)
    - GET /api/activity-logs - Get all activity logs (authenticated route)
    - GET /api/activity-logs/:id - Get an activity log by ID (authenticated route)
    - PUT /api/activity-logs/:id - Update an activity log by ID (authenticated route)
    - DELETE /api/activity-logs/:id - Delete an activity log by ID (authenticated route)

## Authentication Endpoints
---

| Endpoint           | Method | Description                   |
|--------------------|--------|-------------------------------|
| `/users`           | POST   | Register a new user           |
| `/users/login`     | POST   | Log in a user                 |

---

## Environment Variables
Create a .env file in the root directory and add the following environment variables:

    ```sh
    JWT_SECRET=""
    JWT_EXPIRES_IN=1d
    PORT=4000

---

## Contributions

Contributions are welcome! Please create a pull request with your proposed changes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any questions or feedback, please contact:
- Name: Joy Kwamboka
- Email: [kwambokaj2.jk@gmail.com](mailto:kwambokaj2.jk@gmail.com)
- GitHub: [https://github.com/kwambiee](https://github.com/kwambiee)


