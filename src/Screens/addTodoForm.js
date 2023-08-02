import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { addTask } from '../redux/todoSlice';
import { AddCircle } from '@mui/icons-material';

const AddTodoForm = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim() !== '') {
      dispatch(addTask({ description: taskDescription }));
      setTaskDescription('');
    }
  };

  const handleAdd = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask({ description: taskDescription }));
      setTaskDescription('');
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: "15px" }}>
      <FormControl  variant="outlined" fullWidth>
        <OutlinedInput
          fullWidth
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder='Press Enter to Add New Todo'
          id="outlined-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleAdd}
              >
                <AddCircle />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default AddTodoForm;
