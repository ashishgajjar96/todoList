import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { clearCompleted } from '../redux/todoSlice';

const ClearCompletedButton = () => {
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div style={{margin:"20px",float:"right"}}>
    <Button variant="outlined" color="secondary" onClick={handleClearCompleted}>
      Clear Completed
    </Button>
    </div>
  );
};

export default ClearCompletedButton;
