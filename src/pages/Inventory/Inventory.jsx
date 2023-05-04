import React, { useState, useEffect } from 'react';
import './inventory.scss';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleAddProduct = () => {
    if (!name || !price || !quantity) {
      alert('Please fill all the required fields');
      return;
    }
    const newProduct = {
      productId: productId,
      name: name,
      price: price,
      quantity: quantity
    };
    setProducts([...products, newProduct]);
    setProductId('');
    setName('');
    setPrice('');
    setQuantity('');
  };

  const handleEditProduct = (index, newProductId, newName, newPrice, newQuantity) => {
    const newProducts = [...products];
    newProducts[index].productId = newProductId;
    newProducts[index].name = newName;
    newProducts[index].price = newPrice;
    newProducts[index].quantity = newQuantity;
    setProducts(newProducts);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [searchTerm, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="inventory-container">
      <h1>Products</h1>
      <div className="add-product">
        <input type="text" value={productId} onChange={(event) => setProductId(event.target.value)} placeholder="product id" />
        <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
        <input type="text" value={price} onChange={handlePriceChange} placeholder="Price" />
        <input type="text" value={quantity} onChange={handleQuantityChange} placeholder="Quantity" />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div className="search-bar">
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.productId}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => {
                    const newProductId = prompt("Enter Product ID");
                    const newName = prompt('Enter new name:');
                    const newPrice = prompt('Enter new price:');
                    const newQuantity = prompt('Enter new quantity:');
                    handleEditProduct(index , newProductId, newName, newPrice, newQuantity);
}}
>
Edit
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>

);
};

export default Inventory;