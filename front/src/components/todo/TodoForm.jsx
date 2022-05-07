import React, { useState, useContext, useRef } from 'react';
//import { useForm } from '../../useForm';
import { Store } from '../StoreProvider';

const HOST_API = "http://localhost:8080/api";

const TodoForm = () => {
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);


    const onAdd = (event) => {
        event.preventDefault();
    
        const request = {
          text: state.text,
          id: null,
          completed: false,
          category: state.category
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
              dispatch({ type: "add-item", item: todo });
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
            category: item.category
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
              setState({ text: "" });
              formRef.current.reset();
            });
        }      

    return ( 
    <form ref={formRef}>
      <div class="input-group mb-3">
        <input
        className="form-control"
        type="text"
        name="text"
        placeholder="¿Qué piensas hacer hoy?"
        defaultValue={item.text}
        onChange={(event) => {
            setState({ ...state, text: event.target.value })
        }}  ></input>
        {item.id && <button className="btn btn-outline-primary" id="button-addon1" onClick={onEdit}>Actualizar</button>}
        {!item.id && <button className="btn btn-outline-primary" id="button-addon1" onClick={onAdd}>Crear</button>}
      </div>
    </form>
     );
}
 
export default TodoForm;