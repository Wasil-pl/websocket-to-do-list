import React, { useEffect, useState } from 'react';
import styles from './TaskForm.module.scss';
import Button from '../../common/Button/Button';
import shortid from 'shortid';

const TaskForm = ({ addTask, editedTaskData, editTask }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (editedTaskData) {
      setTaskName(editedTaskData.name);
    }
  }, [editedTaskData]);

  const submitForm = (e) => {
    e.preventDefault();

    if (taskName === '') return window.alert('please, type your description');

    if (editedTaskData) {
      const updatedTask = { id: editedTaskData.id, name: taskName };
      editTask(updatedTask);
      setTaskName('');
    } else {
      const task = { id: shortid(), name: taskName };
      addTask(task);
      setTaskName('');
    }
  };

  return (
    <form id="add-task-form" onSubmit={submitForm}>
      <input
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        className={styles.textInput}
        autoComplete="off"
        type="text"
        placeholder="Type your description"
        id="task-name"
      />
      {!editedTaskData && <Button type="submit">Add</Button>}
      {editedTaskData && <Button type="submit">Update</Button>}
    </form>
  );
};

export default TaskForm;
