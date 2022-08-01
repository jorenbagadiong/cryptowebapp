import React from "react";

import Image2 from "../assets/img/feature-2-img.png";

const FeaturesSection2 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row">
        <div
          className="max-w-[454px] mb-6 lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="h3 mb-6">Detailed Statistics</h3>
          <p className="text-gray mb-8">
            View all mining related infomation in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <button className="btn px-8">Learn more</button>
        </div>
        <div
          className="flex-1 flex justify-end"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <img src={Image2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
