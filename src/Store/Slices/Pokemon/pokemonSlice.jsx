import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [], // Ensure this is an empty array
        isLoading: false,
        page: 0
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            state.isLoading = false;
        },
    }
});

export const { startLoading, setPokemons } = pokemonSlice.actions;