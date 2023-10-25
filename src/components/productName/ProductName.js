import React from "react";
import "./ProductName.css";

const ProductName = ({ products }) => {
  console.log(products);
  if (!products) {
    console.log("empty!!!!!!!!");
  }

  return (
    <div className="wrapper">
      <h1>ProductName</h1>
      {products.map((product, index) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
};

export default ProductName;

const words = ["hello", "world"];

words.map((word, index) => console.log(word));

const product = {
  id: 2,
  title: "another awesome coat",
  category: "coat",
};
