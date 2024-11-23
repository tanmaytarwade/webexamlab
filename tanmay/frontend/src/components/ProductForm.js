import React, { useState } from 'react';

function ProductForm({ onProductAdded }) {
  const [id, setid] = useState('');
  const [name, setname] = useState('');
  const [category, setcategory] = useState('');
  const [dateCreated, setdateCreated] = useState('');
  const [creatorName, setcreatorName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { id, name,category,dateCreated,creatorName };

      

   
    fetch('http://localhost:9000/artical', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
    
        onProductAdded();
      })
      .catch((error) => console.error('Error adding product:', error));

    
      setid('');
      setname('');
      setcategory('');
      setdateCreated('');
      setcreatorName('');
  };

  return (
    <div>
      <h2>Add a artical</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>artical id:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setid(e.target.value)}
            required
          />
        </div>
        <div>
          <label>name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>dateCreated</label>
          <input
            type="date"
            value={dateCreated}
            onChange={(e) => setdateCreated(e.target.value)}
            required
          />
        </div>
        <div>
          <label>creatorName</label>
          <input
            type="text"
            value={creatorName}
            onChange={(e) => setcreatorName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;