// taskService.js
const mysql = require('mysql2');
const config = require('config');

// Create MySQL connection
const db = mysql.createConnection({
  host: config.get("server"),
  user: config.get("user"),
  password: config.get("password"),
  database: config.get("database")
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('MySQL connected...');
});

// Task service methods

// Add a new task
// const addTask = (task, callback) => {
//   const sql = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
//   db.query(sql, [task.title, task.description, task.status], callback);
// };
const addTask = (task, callback) => {
  const sql = 'INSERT INTO tasks (title, description, status, assigned_to, dueDate, priority, comments) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [task.title, task.description, task.status, task.assigned_to, task.dueDate, task.priority, task.comments], callback);
};


// View tasks
const getTasks = (callback) => {
  const sql = 'SELECT * FROM tasks';
  db.query(sql, callback);
};

// Edit a task
const editTask = (id, task, callback) => {
  const sql = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
  db.query(sql, [task.title, task.description, task.status, id], callback);
};

// Delete a task
const deleteTask = (id, callback) => {
  const sql = 'DELETE FROM tasks WHERE id = ?';
  db.query(sql, [id], callback);
};

module.exports = { addTask, getTasks, editTask, deleteTask };
