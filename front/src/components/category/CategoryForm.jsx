import React, { useContext, useRef, useState } from "react";
import { Store } from "../StoreProvider";

const HOST_API = "http://localhost:8080/api";

/**
 * Contiene todo lo relacionado con el formulario de Categorías
 *
 * @returns
 * @version 1.0.0
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @since 1.0.0
 */
export const CategoryForm = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { category },
  } = useContext(Store);
  const item = category.item;
  const [state, setState] = useState(item);

  /**
   * Permite agegar Categorías
   *
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  const onAdd = () => {
    if (state.title) {
      const request = {
        title: state.title,
        id: null,
      };

      fetch(HOST_API + "/category", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((category) => {
          dispatch({ type: "add-category", item: category });
          setState({ title: "" });
          formRef.current.reset();
        });
    }
  };

  /**
   * Muestra el formulario para agregar categorías
   *
   * @author Lorena Castro <Lcastro0398@gmail.com>
   * @since 1.0.0
   */
  return (
    <form className="container" ref={formRef}>
      <br></br>
      <br></br>
      <div className="row">
        <input
          className="form-control col-10"
          type="text"
          name="title"
          id="name"
          required="required"
          placeholder="Lista de TO-DO"
          onChange={(event) => {
            setState({ ...state, title: event.target.value });
          }}
        ></input>
        {!item.id && (
          <button
            className="btn btn-dark"
            type="submit"
            onClick={() => {
              onAdd();
            }}
          >
            Nueva Lista
          </button>
        )}
      </div>
      <br />
    </form>
  );
};

export default CategoryForm;
