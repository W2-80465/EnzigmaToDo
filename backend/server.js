// server.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const taskService = require('./taskService');
const cors = require('cors');


const app = express();
const PORT = config.get("port");

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// API Endpoints

// Add task
app.post('/tasks', (req, res) => {
  const task = req.body;
  taskService.addTask(task, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error adding task', error: err });
    }
    res.status(201).send({ message: 'Task added', taskId: result.insertId });
  });
});

// View tasks
app.get('/tasks', (req, res) => {
  taskService.getTasks((err, results) => {
    if (err) {
      return res.status(500).send({ message: 'Error fetching tasks', error: err });
    }
    res.status(200).send(results);
  });
});

// Edit task
app.put('/tasks/:id', (req, res) => {
  const task = req.body;
  const id = req.params.id;
  taskService.editTask(id, task, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error updating task', error: err });
    }
    res.status(200).send({ message: 'Task updated' });
  });
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  taskService.deleteTask(id, (err, result) => {
    if (err) {
      return res.status(500).send({ message: 'Error deleting task', error: err });
    }
    res.status(200).send({ message: 'Task deleted' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
