import React, { useState } from 'react';
import styles from './TaskForm.module.scss';
import Button from '../../common/Button/Button';
import shortid from 'shortid';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    if (taskName === '') return window.alert('please, type your description');

    const task = { id: shortid(), name: taskName };
    addTask(task);
    setTaskName('');
  };

  return (
    <form id="add-task-form" onSubmit={submitForm}>
      <input
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        className={styles.textInput}
        autocomplete="off"
        type="text"
        placeholder="Type your description"
        id="task-name"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TaskForm;
