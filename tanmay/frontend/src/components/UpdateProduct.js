import React, { useState, useEffect } from 'react';

function UpdateProduct({ productId, onProductUpdated }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [creatorName, setCreatorName] = useState('');

 
  useEffect(() => {
    fetch(`http://localhost:9000/artical/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        setId(product.id);
        setName(product.name);
        setCategory(product.category);
        setDateCreated(product.dateCreated);
        setCreatorName(product.creatorName);
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = { id, name, category, dateCreated, creatorName };

    fetch(`http://localhost:9000/artical/${productId}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product updated successfully:', data);
        onProductUpdated();
      })
      .catch((error) => console.error('Error updating product:', error));
  };

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Article ID:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
           // readOnly 
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date Created:</label>
          <input
            type="date"
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Creator Name:</label>
          <input
            type="text"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
