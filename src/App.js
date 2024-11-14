import './App.css';
import { TodoAppRedux } from "./Components/TodoAppRedux";
import { PokemonAppReduxRTK } from "./Components/PokemonAppReduxRTK";

function App() {
    return (
        <>
            <TodoAppRedux />
            <hr />
            <PokemonAppReduxRTK />
        </>
    );
}

export default App;