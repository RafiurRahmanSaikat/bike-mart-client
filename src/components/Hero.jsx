import React from "react";
import { motion } from "framer-motion";
import bike from "../assets/bike.jpg";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row space-x-4 space-y-4 items-center justify-between py-12">
          <div className="md:w-1/2 capitalize text-gray-700">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4"
            >
              Welcome to Bike Mart !!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg mb-8 text-gray-600"
            >
              your ultimate destination for all things cycling! Our eCommerce
              site is dedicated to providing cycling enthusiasts with a
              one-stop-shop for all their biking needs.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg"
            >
              Shop Now
            </motion.button>
          </div>
          <div className="md:w-1/2">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              src={bike}
              alt="Hero image"
              className="w-full z-40 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
