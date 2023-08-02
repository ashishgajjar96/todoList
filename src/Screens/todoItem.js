import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  Checkbox,
  Typography,
  ListItemButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { toggleTaskCompletion, editTask, deleteTask } from '../redux/todoSlice';

const TodoItem = ({ id, description, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion({ id, completed: !completed }));
  };

  const handleEditDescription = () => {
    if (isEditing) {

      dispatch(editTask({ id, description: editedDescription }));
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ id }));
  };

  return (
    <ListItem
      sx={{ backgroundColor: "#FCFCFC", borderBottom: "1px solid #dddddd" }}
      secondaryAction={<>
        {!isEditing ? (
          <IconButton edge="end" aria-label="edit" onClick={handleEditDescription}>
            <EditIcon />
          </IconButton>)
          :
          (<IconButton edge="end" aria-label="edit" onClick={handleEditDescription}>
            <CheckIcon />
          </IconButton>
          )}
        &nbsp;&nbsp;
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteTask}>
          <DeleteIcon />
        </IconButton>
      </>
      }
      disablePadding
    >
      <ListItemButton role={undefined}
      >
        <ListItemIcon sx={{ minWidth: "15px !important" }}>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            onChange={handleToggleCompletion}
          />
        </ListItemIcon>
        <ListItemText primary={<>
          {isEditing ?
            (<TextField
              fullWidth
              sx={{ width: "90%" }}
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              onBlur={handleEditDescription}
              autoFocus
            />) : (
              <Typography variant='body1' sx={{fontWeight:"500", color: completed ? "grey" : "black", textDecorationLine: completed ? "line-through" : "none", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "90%" }}>{description}</Typography>)}</>} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
