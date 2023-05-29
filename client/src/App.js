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
  const clearSocket = () => setSocket(null);

  useEffect(() => {
    const newSocket = io('http://localhost:8000');
    setSocket(newSocket);

    return () => {
      clearSocket();
    };
  }, []);

  const removeTask = (taskId, shouldEmit) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
    if (shouldEmit) {
      socket.emit('removeTask', taskId);
    }
  };

  const addTask = (task) => {
    setTasks((tasks) => [...tasks, task]);
    socket.emit('addTask', task);
  };

  return (
    <div className="App">
      <Header>ToDoList.app</Header>

      <TaskSection>
        <h2>Tasks</h2>
        <ListView tasks={tasks} removeTask={removeTask} />
        <TaskForm socket={socket} addTask={addTask} />
      </TaskSection>
    </div>
  );
};

export default App;
