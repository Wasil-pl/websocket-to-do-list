import React from 'react';
import styles from './ListView.module.scss';
import Button from '../../common/Button/Button';

const ListView = () => (
  <ul className={styles.list} id="tasks-list">
    <li className={styles.task}>
      Shopping <Button btnRed>Remove</Button>
    </li>
    <li className={styles.task}>
      Go out with a dog <Button btnRed>Remove</Button>
    </li>
  </ul>
);

export default ListView;
