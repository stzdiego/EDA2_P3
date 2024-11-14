// src/Components/TodoAppRedux.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../Store/Slices/Todo/todoSlice";

export const TodoAppRedux = () => {
    const todos = useSelector(state => state.todos || []); // Add a default value
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        dispatch(addTodo(newTodo));
        setDescription('');
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
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