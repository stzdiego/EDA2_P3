import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';
import { pokemonSlice } from "./Slices/Pokemon/pokemonSlice";
import todoReducer from "./Slices/Todo/todoSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        pokemon: pokemonSlice.reducer,
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;