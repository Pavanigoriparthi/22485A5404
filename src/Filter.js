import React from 'react';

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div>
      <label>
        Company:
        <select name="company" value={filters.company} onChange={handleChange}>
          <option value="AMZ">Amazon</option>
          <option value="FLP">Flipkart</option>
          <option value="SNP">Snapdeal</option>
          <option value="MYN">Myntra</option>
          <option value="AZO">Azotea</option>
        </select>
      </label>
      <label>
        Category:
        <select name="category" value={filters.category} onChange={handleChange}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          {/* Add more categories as needed */}
        </select>
      </label>
      <label>
        Top N:
        <input type="number" name="top" value={filters.top} onChange={handleChange} />
      </label>
      <label>
        Min Price:
        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleChange} />
      </label>
      <label>
        Max Price:
        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;
