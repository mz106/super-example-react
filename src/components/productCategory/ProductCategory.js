import React from "react";

const ProductCategory = ({ products }) => {
  return (
    <div>
      <h1>ProductCat</h1>
      {products.map((product, index) => (
        <p>{product.category}</p>
      ))}
    </div>
  );
};

export default ProductCategory;
