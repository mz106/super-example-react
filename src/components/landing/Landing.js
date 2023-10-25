import React from "react";
import ProductName from "../productName/ProductName";
import ProductCategory from "../productCategory/ProductCategory";

const Landing = ({ products }) => {
  return (
    <>
      <ProductName products={products} />
      <ProductCategory products={products} />
    </>
  );
};

export default Landing;
