import React from 'react';
import StoreProvider from './components/StoreProvider';
import { CategoryForm } from './components/category/CategoryForm';
import { CategoryList } from './components/category/CategoryList';


function App() {

  return( 
    <StoreProvider>
      <h1 className="text-center">Dashboard</h1>
      <CategoryForm />
      <CategoryList />
    </StoreProvider>
    )
}

export default App;
