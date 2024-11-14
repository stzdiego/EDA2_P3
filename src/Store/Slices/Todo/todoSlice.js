// src/Store/Slices/Todo/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;