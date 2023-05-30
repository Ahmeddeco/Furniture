import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";

// import components

const App = () => {
  return (
    <main className='w-full mx-auto bg-white'>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
    </main>
  );
};

export default App;
