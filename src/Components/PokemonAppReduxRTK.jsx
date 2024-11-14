import React from 'react';
import { useGetPokemonsQuery } from '../Store/apiSlice';

export const PokemonAppReduxRTK = () => {
    const { data, error, isLoading } = useGetPokemonsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    const pokemons = data?.results || [];

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};