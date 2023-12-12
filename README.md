# Node.js MySQL User Logs Management

This is a Node.js application that demonstrates the management of user logs using MySQL as the database.

## Overview

The application provides API endpoints to perform CRUD (Create, Read, Update, Delete) operations for managing user logs. It utilizes a MySQL database to store user-related information such as usernames, emails, passwords, and other relevant data.

## Features

- **Get All Users**: Retrieve a list of all users.
- **Get User by ID**: Retrieve a specific user by their ID.
- **Add User**: Register a new user into the system.
- **Update User**: Modify user details based on their ID.
- **Delete User**: Remove a user from the system.

## Technologies Used

- Node.js: JavaScript runtime for server-side development.
- Express.js: Web application framework for Node.js.
- MySQL: Relational database management system.
- Swagger: API documentation tool.

## Installation

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Configure the MySQL connection details in `Config/db.js`.
4. Start the application using `npm start`.

## Usage

- Run the application and access the API endpoints for user log management.
- Use tools like Postman to interact with the API endpoints.

## API Documentation

The API documentation is generated using Swagger. You can view the detailed documentation by navigating to the `/api-docs` endpoint when the application is running.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a pull request or open an issue in the repository.

## License

This project is licensed under the [MIT License](LICENSE).
