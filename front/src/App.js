import React from 'react';
import StoreProvider from './components/StoreProvider';
import { CategoryForm } from './components/category/CategoryForm';
import { CategoryList } from './components/category/CategoryList';
import Footer from './components/footer/Footer';
import Header from './components/header/header';


function App() {

  return( 
    <StoreProvider>
      <Header />
      <CategoryForm />
      <CategoryList />
      <Footer/>
    </StoreProvider>
    )
}

export default App;
