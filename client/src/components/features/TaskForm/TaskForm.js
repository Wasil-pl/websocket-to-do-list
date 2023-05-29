import React from 'react';
import styles from './TaskForm.module.scss';
import Button from '../../common/Button/Button';

const TaskForm = () => (
  <form id="add-task-form">
    <input
      className={styles.textInput}
      autocomplete="off"
      type="text"
      placeholder="Type your description"
      id="task-name"
    />
    <Button type="submit">Add</Button>
  </form>
);

export default TaskForm;
