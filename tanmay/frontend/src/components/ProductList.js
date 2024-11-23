import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch data from the API once the component mounts
  useEffect(() => {
    fetch('http://localhost:9000/artical')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>artical List</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>category</th>
            <th>dateCreated</th>
            <th>creatorName</th>
            
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.dateCreated}</td>
              <td>{product.creatorName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
