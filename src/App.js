import React from 'react';
import { Provider } from 'react-redux';
import { Container, Typography,Box,Paper,Grid } from '@mui/material';
import TodoList from './Screens/todoList';
import AddTodoForm from './Screens/addTodoForm';
import ClearCompletedButton from './Screens/clearCompletedButton';
import { store } from './redux/store';
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
      <Container maxWidth="sm" sx={{ mt: 4,padding:"8px",borderRadius:"10 px" }} component={Paper} elevation={2} >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Todo List
        </Typography>  
        <AddTodoForm />
        <TodoList />
        <ClearCompletedButton />
      </Container>
      </div>
    </Provider>
  );
};

export default App;
