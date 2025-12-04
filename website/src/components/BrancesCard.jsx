import React from "react";
import { motion } from "framer-motion";

const BrancesCard = ({ branch }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
      className="w-full bg-white rounded-xl shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
    >
      <div className="w-full h-44 md:h-48 overflow-hidden">
        <img
          src={branch.img}
          alt={branch.name}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-md font-semibold text-gray-700">{branch.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{branch.address}</p>
      </div>
    </motion.div>
  );
};

export default BrancesCard;
