import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../Store/Slices/Pokemon/thunks";

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { pokemons, isLoading, page } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    return (
        <div>
            <h1>Pokemon List</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {pokemons && pokemons.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))}
                </ul>
            )}
            <button onClick={() => dispatch(getPokemons(page))}>Load More</button>
        </div>
    );
};