import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      id:1,
      description:"The main subject, ideas, etc. of a book, article, television programme, etc.",
      completed:true
    },
    {
      id:2,
      description:"It's easy to update the content of the Web site. art. Content is also the things represented or suggested in something written or created as ",
      completed:true
    },
    {
      id:3,
      description:"Content is also the things represented or suggested in something written or created as",
      completed:false
    },
  ],
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ description }) => {
        return { payload: { id: nanoid(), description, completed: false } };
      },
    },
    toggleTaskCompletion: (state, action) => {
      const { id, completed } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.completed = completed;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    },
    clearCompleted: (state) => {
      return state.filter((task) => !task.completed);
    },
  },
});

export const { addTask, toggleTaskCompletion, editTask, deleteTask, clearCompleted } = todoSlice.actions;

export const selectTasks = (state) => state.todo;

export default todoSlice.reducer;
