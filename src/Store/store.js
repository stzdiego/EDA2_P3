// src/Store/store.js
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { pokemonSlice } from "./Slices/Pokemon/pokemonSlice";
import todoReducer from "./Slices/Todo/todoSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,
        todos: todoReducer
    }
});

export default store;