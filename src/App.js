import './App.css';
import { PokemonApp } from "./Components/PokemonApp";
import { TodoAppRedux } from "./Components/TodoAppRedux";

function App() {
    return (
        <>
            <TodoAppRedux />
            <hr />
            <PokemonApp />
        </>
    );
}

export default App;