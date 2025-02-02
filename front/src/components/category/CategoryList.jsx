import React, { useContext, useEffect } from "react";
import { Store } from "../StoreProvider";
import TodoForm from "../todo/TodoForm";
import TodoList from "../todo/TodoList";

const HOST_API = "http://localhost:8080/api";

/**
 * Permite mostrar las Categorías
 *
 * @returns
 * @version 1.0.0
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @since 1.0.0
 */
export const CategoryList = () => {
  const {
    dispatch,
    state: { category },
  } = useContext(Store);
  const currentList = category.list;

  useEffect(() => {
    fetch(HOST_API + "/categories")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-categories", list });
      });
  }, [dispatch]);

  /**
   * Permite eliminar la categoría
   *
   * @param {Long} id
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  const onDelete = (id) => {
    fetch(HOST_API + "/category/" + id, {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "delete-category", id });
    });
  };

  /**
   * Muestra la lista de los categorías creadas y recibe destro de cada una los todos que le corresponden
   *
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  return (
    <div id="principal-div" className="card p-3">
      {currentList.map((category) => {
        return (
          <div id="second-div" key={category.id} className="card p-3">
            <div id="header-div" key={category} className="card-header">
              {category.title === null ? "" : category.title.toUpperCase()}
              <button
                id="btn-delete-cat"
                className="btn-close"
                onClick={() => onDelete(category.id)}
              ></button>
              <br />
            </div>
            <TodoForm category={category.id} />
            <TodoList category={category.id} />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
