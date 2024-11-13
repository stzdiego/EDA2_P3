import './App.css';
import { PokemonApp } from "./Components/PokemonApp";
import {TodoApp} from "./Components/TodoApp";

function App() {
    return (
        <>
            <TodoApp />
            <PokemonApp />
        </>
    );
}

export default App;