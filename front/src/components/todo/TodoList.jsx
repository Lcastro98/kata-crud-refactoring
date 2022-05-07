import React, { useContext, useEffect }  from 'react';
import { Store } from '../StoreProvider';

const HOST_API = "http://localhost:8080/api";

const TodoList = () => {
    const { dispatch, state: { todo } } = useContext(Store);
    const currentList = todo.list;

    useEffect(() => {
        fetch(HOST_API + "/todos")
        .then(response => response.json())
        .then((list) => {
            dispatch({ type: "update-list-todo", list })
        })
    }, [dispatch]);


    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/todo", {
        method: "DELETE"
        }).then((list) => {
        dispatch({ type: "delete-item-todo", id })
        })
    };

    const onEdit = (todo) => {
        dispatch({ type: "edit-item-todo", item: todo })
    };

    const onChange = (event, todo) => {
        const request = {
        text: todo.text,
        id: todo.id,
        completed: event.target.checked
        };
        fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then((todo) => {
            dispatch({ type: "update-item-todo", item: todo });
        });
    };

    const decorationDone = {
        textDecoration: 'line-through'
    };

    return (
        <div>
            <table >
            <thead>
                <tr>
                <td>ID</td>
                <td>Tarea</td>
                <td>¿Completado?</td>
                </tr>
            </thead>
            <tbody>
                {currentList.map((todo) => {
                return <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                    <td>{todo.id}</td>
                    <td>{todo.text}</td>
                    <td><input type="checkbox" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input></td>
                    <td><button className="btn btn-outline-secondary btn-sm ml-3" onClick={() => onEdit(todo)}>✏️</button></td>
                    <td><button className="btn btn-outline-danger btn-sm ml-3" onClick={() => onDelete(todo.id)}>🗑️</button></td>
                </tr>
                })}
            </tbody>
            </table>
        </div>
        )
}
 
export default TodoList;