import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask } from '../../../store/slices/tasksSlice';
import classNames from 'classnames';
import styles from './TasksList.module.sass';

const TasksList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className={styles.taskList}>
      {tasks.map((item, index) => {
        const now = new Date();
        const taskTextClass = classNames(styles.taskText, {
          [styles.completed]: item.completed,
          [styles.overdue]: !item.completed && new Date(item.deadline) < now,
        });

        return (
          <div className={styles.taskItem} key={index}>
            <li className={taskTextClass}>
              <input
                className={styles.checkbox}
                type='checkbox'
                checked={!!item.completed}
                onChange={() => dispatch(toggleTask(index))}
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
        );
      })}
    </ul>
  );
};

export default TasksList;
