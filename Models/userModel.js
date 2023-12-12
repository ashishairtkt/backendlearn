const pool = require('../Config/db');

exports.getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM addlogs');
  return rows;
};

exports.getUserById = async (userId) => {
  const [rows] = await pool.query('SELECT * FROM addlogs WHERE id = ?', userId);
  return rows[0];
};

exports.addUser = async (userData) => {
  const [result] = await pool.query('INSERT INTO addlogs SET ?', userData);
  return result.insertId;
};

exports.updateUser = async (userId, updatedUserData) => {
  await pool.query('UPDATE addlogs SET ? WHERE id = ?', [updatedUserData, userId]);
  return 'User updated successfully';
};

exports.deleteUser = async (userId) => {
  await pool.query('DELETE FROM addlogs WHERE id = ?', userId);
  return 'User deleted successfully';
};
