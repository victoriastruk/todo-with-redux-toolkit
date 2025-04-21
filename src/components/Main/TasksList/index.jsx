import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask } from '../../../store/slices/tasksSlice';
const TasksList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  return (
    <ul>
      {tasks.map((item, index) => (
        <div key={index}>
          <li>
            <input
              type='checkbox'
              checked={item.completed}
              onChange={() => {
                dispatch(toggleTask(index));
              }}
            />
            {item.task}({item.deadline})
          </li>
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default TasksList;
