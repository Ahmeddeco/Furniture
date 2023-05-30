import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";

const Products = () => {
  // destructure products
  const { subtitle, title } = products;
  return (
    <section className='section text-center'>
      <div className='container mx-auto'>
        <h2 className='title'>{title}</h2>
        <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>
          {subtitle}
        </p>
        <div className=''>
          {/* slider */}
          <ProductSlider />
        </div>
      </div>
    </section>
  );
};

export default Products;
