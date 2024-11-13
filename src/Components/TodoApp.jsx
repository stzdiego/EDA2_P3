import { useReducer, useState } from "react";
import { TodoReducer } from "./TodoReducer";

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}];

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);
    const [description, setDescription] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        dispatchTodo({
            type: 'add',
            payload: newTodo
        });
        setDescription('');
    };

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: 'delete',
            payload: id
        });
    };

    return (
        <>
            <h1>Todo App</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {todos.map(todo => (
                            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center">{todo.description}</span>
                                <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleAddTodo}>
                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button className="btn btn-outline-primary mt-1" type="submit">Agregar</button>
                    </form>
                </div>
            </div>
        </>
    );
};