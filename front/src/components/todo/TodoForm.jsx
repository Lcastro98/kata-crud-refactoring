import React, { useState, useContext, useRef } from 'react';
import { Store } from '../StoreProvider';

const HOST_API = "http://localhost:8080/api";

export const TodoForm = (props) => {
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);
    const { category } = props;

    const onAdd = (event) => {
        event.preventDefault();
    
        const request = {
          text: state.text,
          id: null,
          completed: false,
          categoryDto: {id: category}
        };
        fetch(HOST_API + "/todo", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then((todo) => {
              let t = {...todo, idCategory: category}
              dispatch({ type: "add-item-todo", item: t });
              setState({ text: "" });
              formRef.current.reset();
            });
        }
      
        const onEdit = (event) => {
          event.preventDefault();
      
          const request = {
            text: state.text,
            id: item.id,
            isCompleted: item.isCompleted,
            categoryDto: {id: category}
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
              let t = {...todo, idCategory: category}
              dispatch({ type: "update-item-todo", item: t });
              setState({ text: "" });
              formRef.current.reset();
            });
        }      

    return ( 
    <form ref={formRef}>
      <div className="input-group mb-3">
        <input
        className="form-control"
        type="text"
        name="text"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item.idCategory === category ? item.text : ''}
        onChange={(event) => {
            setState({ ...state, text: event.target.value })
        }}  ></input>
        {item.id && item.idCategory === category && <button className="btn btn-outline-dark" id="button-addon1" onClick={onEdit}>Actualizar</button>}
        {!item.id && item.idCategory !== category && <button className="btn btn-outline-dark" id="button-addon1" onClick={onAdd}>Crear</button>}
      </div>
    </form>
     );
}
 
export default TodoForm;