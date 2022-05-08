function reducer(state, action) {
    switch (action.type) {
        case 'add-category': 
            const categoryUp = state.category.list;
            categoryUp.push(action.item);
            return { ...state, category: {list: categoryUp, item: {}} };
        case 'update-categories':
            const categoryUpList = state.category;
            categoryUpList.list = action.list;
            return { ...state, category: categoryUpList };
        case 'delete-category':
            const categoryUpDelete = state.category;
            const listCategoryUpdate = categoryUpDelete.list.filter((item) => {
                return item.id !== action.id;
            });
            categoryUpDelete.list = listCategoryUpdate
            return {...state, category: categoryUpDelete};
        case 'update-item-todo':
            const todoUpItem = state.todo;
            const listUpdateEdit = todoUpItem.list.map((item) => {
                if (item.id === action.item.id) {
                    return action.item;
                }
                    return item;
                });
            todoUpItem.list = listUpdateEdit;
            todoUpItem.item = {};
            return { ...state, todo: todoUpItem }
        case 'delete-item-todo':
            const todoUpDelete = state.todo;
            const listUpdate = todoUpDelete.list.filter((item) => {
                return item.id !== action.id;
            });
            todoUpDelete.list = listUpdate;
              return { ...state, todo: todoUpDelete }
        case 'update-list-todo':
            const todoUpList = state.todo;
            todoUpList.list = action.list;
              return { ...state, todo: todoUpList }
        case 'edit-item-todo':
            const todoUpEdit = state.todo;
            todoUpEdit.item = action.item;
              return { ...state, todo: todoUpEdit }
        case 'add-item-todo':
            const todoUp = state.todo.list;
            todoUp.push(action.item);
              return { ...state, todo: {list: todoUp, item: {}} }
        default:
            return state;
    }
}

export default reducer;