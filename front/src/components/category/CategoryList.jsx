import React, { useContext, useEffect } from 'react';
import { Store } from '../StoreProvider';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const HOST_API = "http://localhost:8080/api";


export const CategoryList = () => {
    const { dispatch, state: {category} } = useContext(Store);
    const currentList = category.list;

    useEffect(() => {
        fetch(HOST_API + "/categories")
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: "update-categories", list })
          })
      }, [dispatch]);
    
    const onDelete = (id) => {
      fetch(HOST_API + "/category/" + id, {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-category", id })
      })
      };
    
      return ( 
          <div className="container"> <br/>
              {currentList.map((category) => {
                  return (
                    <div>
                    <br />
                    <div className="card-header"> 
                        {category.title === null ? '' : category.title.toUpperCase() }
                        <button className="btn-close" onClick={() => onDelete(category.id)}>
                        </button>
                    <br />
                    </div>
                    <TodoForm />
                    <TodoList />
                    <br />
                    </div>
                  )
              })}
          </div>
       );
}
 
export default CategoryList;