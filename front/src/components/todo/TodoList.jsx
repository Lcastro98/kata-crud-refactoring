import React, { useContext, useEffect } from "react";
import { Store } from "../StoreProvider";

const HOST_API = "http://localhost:8080/api";

/**
 * Permite mostrar los TODOs correspondientes de cada categoría
 *
 * @param {*} props
 * @returns
 * @version 1.0.0
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @since 1.0.0
 */
const TodoList = (props) => {
  const { category } = props;
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const currentList = todo.list.filter((todo) => todo.idCategory === category);

  useEffect(() => {
    fetch(HOST_API + "/categories")
      .then((response) => response.json())
      .then((lista) => {
        let list = [];
        lista.forEach((c) => {
          c.todo.map((t) => {
            list.push({ ...t, idCategory: c.id });
            return t;
          });
        });
        dispatch({ type: "update-list-todo", list });
      });
  }, [dispatch]);

  /**
   * Permite eliminar los todos
   *
   * @param {Long} id
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "delete-item-todo", id });
    });
  };

  /**
   * Permite editar los todos
   *
   * @param todo
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  const onEdit = (todo) => {
    let t = { ...todo, idCategory: category };
    dispatch({ type: "edit-item-todo", item: t });
  };

  /**
   * Permite modificar el estado del todo (completado o no)
   *
   * @param event
   * @param todo
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  const onChange = (event, todo) => {
    const request = {
      text: todo.text,
      id: todo.id,
      completed: event.target.checked,
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
      });
  };

  const decorationDone = {
    textDecoration: "line-through",
  };

  /**
   * Muestra la lista de los todos creados de cada categoría
   * Contiene los botones de editar y eliminar para cada todo
   *
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <td>ID</td>
            <td>Tarea</td>
            <td>¿Completado?</td>
            <td>Editar</td>
            <td>Eliminar</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo) => {
            return (
              <tr key={todo.id} style={todo.completed ? decorationDone : {}}>
                <td>{todo.id}</td>
                <td>{todo.text}</td>
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={todo.completed}
                    onChange={(event) => onChange(event, todo)}
                  ></input>
                </td>
                <td>
                  <button
                    id="btn-edit"
                    className="btn btn-outline-secondary btn-sm ml-3"
                    disabled={todo.completed}
                    onClick={() => onEdit(todo)}
                  >
                    <span role="img" aria-label="editar">
                      ✏️
                    </span>
                  </button>
                </td>
                <td>
                  <button
                    id="btn-delete"
                    className="btn btn-outline-danger btn-sm ml-3"
                    onClick={() => onDelete(todo.id)}
                  >
                    <span role="img" aria-label="Eliminar">
                      🗑️
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
