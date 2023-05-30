import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";
import FeaturesSecond from "./components/FeaturesSecond";

// import components

const App = () => {
  return (
    <main className='w-full mx-auto bg-white'>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond/>
    </main>
  );
};

export default App;
