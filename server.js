const express = require('express');
const socket = require('socket.io');
const cors = require('cors');

let tasks = [];

const app = express();

app.use(cors());

const server = app.listen(8000, () => console.log('Server is running on port 8000'));

const io = socket(server);

io.on('connection', (socket) => {
  console.log('New client! Its id – ' + socket.id);

  io.to(socket.id).emit('updateData', tasks);

  socket.on('addTask', (taskData) => {
    tasks.push(taskData);
    console.log('new task added by user ' + socket.id);
    io.emit('updateData', tasks);
  });

  socket.on('removeTask', (taskId) => {
    console.log('Task ID to remove:', taskId);
    tasks = tasks.filter((task) => task.id !== taskId);
    io.emit('updateData', tasks);
  });

  socket.on('editTask', (taskData) => {
    console.log('taskData: ', taskData);
    const task = tasks.find((task) => task.id === taskData.id);
    if (task) {
      task.name = taskData.name;
    }
    socket.broadcast.emit('editTask', taskData);
  });
});

app.use((req, res) => res.status(404).json({ message: '404 not found...' }));
