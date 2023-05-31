import React from 'react';
import styles from './ListView.module.scss';
import Button from '../../common/Button/Button';

const ListView = ({ tasks, removeTask, editedTask }) => {
  return (
    <ul className={styles.list} id="tasks-list">
      {tasks.map((task) => (
        <li key={task.id} className={styles.task}>
          {task.name}
          <div>
            <Button onClick={() => removeTask(task.id)} btnRed>
              Remove
            </Button>
            <Button onClick={() => editedTask(task)} btnOrange>
              Edit
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
