import { pokemonApi } from "../../../Api/pokemonApi";
import { setPokemons, startLoading } from './pokemonSlice';

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());

        const resp = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);

        dispatch(setPokemons({
            pokemons: resp.data.results,
            page: page + 1
        }));
    }
}