import { useEffect, useState } from 'react';
import ListView from './components/features/List/ListView';
import TaskForm from './components/features/TaskForm/TaskForm';
import Header from './components/layout/Header/Header';
import TaskSection from './components/layout/TaskSection/TaskSection';
import io from 'socket.io-client';

import './styles/global.scss';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [editedTaskData, setEditedTaskData] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:8000');
    setSocket(newSocket);

    newSocket.on('addTask', (task) => {
      setTasks((tasks) => [...tasks, task]);
    });

    newSocket.on('removeTask', (taskId) => {
      setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
    });

    newSocket.on('updateData', (tasks) => {
      setTasks(tasks);
    });

    return () => {
      setSocket(null);
    };
  }, []);

  const removeTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
    socket.emit('removeTask', taskId);
  };

  const addTask = (task) => {
    setTasks((tasks) => [...tasks, task]);
    socket.emit('addTask', task);
  };

  const editTask = (taskData) => {
    setTasks(tasks.map((task) => (task.id === taskData.id ? { ...task, name: taskData.name } : task)));
    socket.emit('editTask', taskData);
    setEditedTaskData(null);
  };

  return (
    <div className="App">
      <Header>ToDoList.app</Header>

      <TaskSection>
        <h2>Tasks</h2>
        <ListView tasks={tasks} removeTask={removeTask} setEditedTask={setEditedTaskData} />
        <TaskForm socket={socket} addTask={addTask} editedTaskData={editedTaskData} editTask={editTask} />
      </TaskSection>
    </div>
  );
};

export default App;
