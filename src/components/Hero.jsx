import React from "react";
import { hero } from "../data";
import Stats from "./Stats";

const Hero = () => {
  // Destructure Hero
  const { title, subtitle, buttonText } = hero;
  return (
    <section
      className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28'
      id='hero'
    >
      <div className='container mx-auto text-center'>
        <h1 className='text-2xl mx-auto font-semibold mb-[30p] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>
          {title}
        </h1>
        {/* subtitle */}
        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>
          {subtitle}
        </h2>
        {/* cta button */}
        <button className='bg-sillver hover:bg-lightSillver px-[35px] py-[9px] mb-[160px] text-lg rounded-md backdrop-blur-md transition-all lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>
          {buttonText}
        </button>
        {/* stats */}
        <div className=''>
          <Stats/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
