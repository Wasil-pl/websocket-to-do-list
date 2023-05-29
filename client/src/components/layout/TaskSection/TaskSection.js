import React from 'react';
import styles from './TaskSection.module.scss';

const TaskSection = ({ children }) => (
  <section className={styles.tasksSection} id="tasks-section">
    {children}
  </section>
);

export default TaskSection;
