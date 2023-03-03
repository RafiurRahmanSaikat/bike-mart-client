import React from "react";
import { motion } from "framer-motion";

import { FaBicycle, FaShippingFast, FaLock } from "react-icons/fa";

const Feature = ({ title, description, icon }) => {
  return (
    <div className="flex items-center mb-8">
      <motion.div
        className="mr-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Check out these great features of Bike Mart.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              title="Free Shipping"
              description="Get free shipping on all orders over $50."
              icon={<FaShippingFast className="h-12 w-12 text-blue-500" />}
            />
            <Feature
              title="Secure Checkout"
              description="Our checkout process is secure and encrypted for your protection."
              icon={<FaLock className="h-12 w-12 text-green-500" />}
            />
            <Feature
              title="Wide Selection"
              description="Choose from a wide selection of bikes and accessories."
              icon={<FaBicycle className="h-12 w-12 text-amber-500" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
