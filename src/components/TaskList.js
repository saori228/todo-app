// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggleComplete(task.id)}>{task.title}</span>
          <button onClick={() => onDelete(task.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};
const TaskItem = React.memo(({ task, onToggleComplete, onDelete }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggleComplete(task.id)}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
});

export default TaskList;
