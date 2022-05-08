import React, { useState, useContext, useRef } from "react";
import { Store } from "../StoreProvider";

const HOST_API = "http://localhost:8080/api";

/**
 * Contiene todo lo relacionado con el formulario de TODOs (crear y actualizar)
 *
 * @param {*} props
 * @returns
 * @version 1.0.0
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @since 1.0.0
 */
export const TodoForm = (props) => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);
  const { category } = props;

  /**
   * Permite agregar nuevos todos a la categoría correspondiente
   *
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  const onAdd = () => {
    if (state.text) {
      const request = {
        text: state.text,
        id: null,
        completed: false,
        categoryDto: { id: category },
      };
      fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todo) => {
          let t = { ...todo, idCategory: category };
          dispatch({ type: "add-item-todo", item: t });
          setState({ text: "" });
          formRef.current.reset();
        });
    }
  };

  /**
   * Permite editar los todos
   *
   * @version 1.0.0
   * @author Lorena Castro <Lcastro0398@gmail.com>
   */
  const onEdit = (event) => {
    event.preventDefault();

    if (state.text) {
      const request = {
        text: state.text,
        id: item.id,
        isCompleted: item.isCompleted,
        categoryDto: { id: category },
      };

      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todo) => {
          let t = { ...todo, idCategory: category };
          dispatch({ type: "update-item-todo", item: t });
          setState({ text: "" });
          formRef.current.reset();
        });
    }
  };

  /**
   * Muestra el formulario para crear todos
   *
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  return (
    <form ref={formRef}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          name="text"
          required="required"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={item.idCategory === category ? item.text : ""}
          onChange={(event) => {
            setState({ ...state, text: event.target.value });
          }}
        ></input>
        {item.id && item.idCategory === category && (
          <button
            className="btn btn-outline-dark"
            id="button-addon1"
            type="submit"
            onClick={onEdit}
          >
            Actualizar
          </button>
        )}
        {!item.id && item.idCategory !== category && (
          <button
            className="btn btn-outline-dark"
            id="button-addon1"
            type="submit"
            onClick={onAdd}
          >
            Crear
          </button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
