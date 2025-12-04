import React from 'react';
import BrancesCard from '../BrancesCard';
import { brances } from '../../home-contact';
import { motion } from 'framer-motion';

const BrancheSection = () => {
  return (
    <section 
      className="w-full flex flex-col bg-gray-50 p-10"
      aria-labelledby="branches-title"
    >
      <h2
        id="branches-title"
        className="text-xl md:text-xl text-gray-700 font-bold mb-6 text-center"
      >
        XYZ Estetik Şubelerimiz
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {brances.map((branch, idx) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <BrancesCard branch={branch} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrancheSection;
