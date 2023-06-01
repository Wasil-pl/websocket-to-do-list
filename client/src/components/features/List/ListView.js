import React from 'react';
import styles from './ListView.module.scss';
import Button from '../../common/Button/Button';

const ListView = ({ tasks, removeTask, setEditedTask }) => (
  <ul className={styles.list} id="tasks-list">
    {tasks.map((task) => (
      <li key={task.id} className={styles.task}>
        {task.name}
        <div>
          <Button onClick={() => removeTask(task.id)} variant="red">
            Remove
          </Button>
          <Button onClick={() => setEditedTask(task)} variant="orange">
            Edit
          </Button>
        </div>
      </li>
    ))}
  </ul>
);

export default ListView;
