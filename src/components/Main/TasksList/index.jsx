import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask } from '../../../store/slices/tasksSlice';
import styles from './TasksList.module.sass';

const TasksList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className={styles.taskList}>
      {tasks.map((item, index) => (
        <div className={styles.taskItem} key={index}>
          <li
            className={`${styles.taskText} ${item.completed ? styles.completed : ''} ${item.overdue ? styles.overdue : ''}`}
          >
            <input
             className={styles.checkbox}
              type='checkbox'
              checked={!!item.completed}
              onChange={() => {
                dispatch(toggleTask(index));
              }}
            />
            {item.task}
          </li>
          <button
            className={styles.deleteBtn}
            onClick={() => dispatch(deleteTask(index))}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TasksList;
