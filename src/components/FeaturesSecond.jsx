import React from "react";
import { features } from "../data";

const FeaturesSecond = () => {
  // destructure features
  const { image, subtitle, title } = features.feature2;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-[100px]'>
          {/* text */}
          <div className='flex flex-1 flex-col justify-end'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
          </div>
          {/* image */}
          <div className='flex-1'>
            <img src={image.type} alt='Furniture' className='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
