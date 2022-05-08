import React, { useReducer, createContext } from "react";
import reducer from "./reducer";

/**
 * Estado inicial 
 */
const initialState = {
  category: { list: [], item: {} },
  todo: { list: [], item: {} },
};

/**
 * Contiene el contexto actual para ser usado por los componentes
 */
const Store = createContext(initialState);

/**
 * Todo lo que esté envuelto con este componente compartirá el estado de los datos
 * e influirá en los mismos con las acciones definidas en el reducer
 * 
 * @version 1.0.0
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @since 1.0.0
 */
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;

export { Store, initialState };
