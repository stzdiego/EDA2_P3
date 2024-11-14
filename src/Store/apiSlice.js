import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: () => 'pokemon', // Correct endpoint
            keepUnusedDataFor: 60, // Cache for 1 minute
        }),
    }),
});

export const { useGetPokemonsQuery } = apiSlice;