import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const [refresh, setRefresh] = useState(false);


  const handleProductAdded = () => {
    setRefresh(!refresh); 
  };

  return (
    <div>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductList refresh={refresh} />
      <UpdateProduct refresh={refresh} />
    </div>
  );
}

export default App;





