import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewItems from "./components/NewItems";

// import components

const App = () => {
  return (
    <main className='w-full mx-auto bg-white'>
      <Hero />
      <Features />
      <NewItems/>
    </main>
  );
};

export default App;
