import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import TodoItem from './todoItem';
import { selectTasks } from '../redux/todoSlice';

const TodoList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <List disablePadding>
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </List>
  );
};

export default TodoList;
