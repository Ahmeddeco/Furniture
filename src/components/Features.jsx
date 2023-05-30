import React from "react";
import { features } from "../data";

const Features = () => {
  // destructure features
  const { title, subtitle, image, items, buttonText } = features;
  return (
    <section id='features' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-[100px]'>
          {/* image */}
          <div className='flex-1 order-1 lg:-order-1'>
            <img src={image.type} alt='Furniture' className='' />
          </div>
          <div className='flex flex-1 flex-col justify-end'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
            {/* items */}
            <div className=''>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div key={index} className='flex mb-6 lg:last:mb-0'>
                    <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                    <div className=''>
                      <h4 className='text-base lg:text-xl font-semibold mb-3'>
                        {title}
                      </h4>
                      <p className=''>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
