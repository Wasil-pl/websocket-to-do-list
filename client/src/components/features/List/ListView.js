import React from 'react';
import styles from './ListView.module.scss';
import Button from '../../common/Button/Button';

const ListView = ({ tasks, removeTask }) => {
  return (
    <ul className={styles.list} id="tasks-list">
      {tasks.map((task) => (
        <li key={task.id} className={styles.task}>
          {task.name}
          <Button onClick={() => removeTask(task.id)} btnRed>
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
