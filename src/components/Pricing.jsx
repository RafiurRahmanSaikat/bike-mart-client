import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="grid max-w-full gap-10 row-gap-5 sm:row-gap-10  lg:max-w-screen-lg  lg:grid-cols-3  sm:mx-auto">
      <PriceCard />
      <PriceCard />
      <PriceCard />
    </div>
  );
};

export default Pricing;
