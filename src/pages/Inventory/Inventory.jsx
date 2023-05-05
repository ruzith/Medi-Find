import React, { useState, useEffect } from 'react';
import './inventory.scss';
import { Dialog, DialogContentText, Button } from '@mui/material';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);

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

  const handleEditProduct = (newPrice, newQuantity) => {
    const newProducts = [...products];
    newProducts[selectedIndex].price = newPrice;
    newProducts[selectedIndex].quantity = newQuantity;
    setProducts(newProducts);
    handleClose();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value.replace(/[^0-9.]/g, ''));
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value.replace(/[^0-9]/g, ''));
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

  const handleClickOpen = (index) => {
    setSelectedIndex(index);
    setPrice(products[index].price);
    setQuantity(products[index].quantity);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedIndex(-1);
    setPrice('');
    setQuantity('');
    setOpen(false);
  };

  return (
<div className="SIDE">
      <Sidebar/>
      <div className="NAV">
        <Navbar/>

    <div className="inventory-container">
      <h1>Add Products</h1>
      <div className="add-product">
        <input type="text" value={productId} onChange={(event) => setProductId(event.target.value)} placeholder="product id" />
        <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
        <input type="number" value={price} onChange={handlePriceChange} placeholder="Price" />
        <input type="number" value={quantity} onChange={handleQuantityChange} placeholder="Quantity" />
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
<Button variant="contained" color="primary" onClick={() => handleClickOpen(index)}>
Edit
</Button>
</td>
</tr>
))}
{filteredProducts.length === 0 && (
<tr>
<td colSpan="5">No products found</td>
</tr>
)}
</tbody>
</table>
<Dialog open={open} onClose={handleClose}>
<DialogTitle>Edit Product</DialogTitle>
<DialogContent>
<DialogContentText>
Please enter the New Price and Quantity for the product.
</DialogContentText>
<input type="number" value={price} onChange={handlePriceChange} placeholder="Price" />
<br />
<input type="number" value={quantity} onChange={handleQuantityChange} placeholder="Quantity" />
</DialogContent>
<DialogActions>
<Button onClick={handleClose}>Cancel</Button>
<Button onClick={() => handleEditProduct(price, quantity)}>Save</Button>
</DialogActions>
</Dialog>
</div>
</div>
</div>
);
};

export default Inventory;