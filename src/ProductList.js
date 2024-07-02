import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    top: 10,
    minPrice: 1,
    maxPrice: 10000,
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(filters.company, filters.category, filters.top, filters.minPrice, filters.maxPrice);
      setProducts(data);
    };
    loadProducts();
  }, [filters]);

  return (
    <div>
      <h1>Top Products</h1>
      {/* Filters and Sorting Components */}
      <div>
        {/* Product List */}
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;