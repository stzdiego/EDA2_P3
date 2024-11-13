import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { pokemonSlice } from "./Slices/Pokemon/pokemonSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer
    }
});

export default store;