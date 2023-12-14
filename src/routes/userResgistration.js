var express = require("express");
var router = express.Router();

const UsController = require("../Controllers/userContr");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * /userResgistration/allusers:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     tags: [User]
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       username:
 *                         type: string
 *                       email:
 *                         type: string
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /userResgistration/adduser:
 *   post:
 *     summary: Add a new user
 *     description: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User added successfully
 *       '400':
 *         description: Bad request (duplicate entry)
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /userResgistration/edituser/{userId}:
 *   put:
 *     summary: Update user information
 *     description: Update user details by user ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /userResgistration/deleteuser/{userId}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user by user ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to delete
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '500':
 *         description: Internal server error
 */
router.get("/allusers", UsController.getAllUsers);
router.get("/:userId", UsController.getUserById);
router.post("/adduser", UsController.addUser);
router.put("/edituser/:userId", UsController.updateUser);
router.delete("/deleteuser/:userId", UsController.deleteUser);
module.exports = router;
