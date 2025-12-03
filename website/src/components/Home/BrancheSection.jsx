import React from 'react';
import BrancesCard from '../BrancesCard';
import { brances } from '../../home-contact';

const BrancheSection = () => {
  return (
    <section className='w-full flex flex-col bg-gray-50 p-10'>
      <h3 className='text-2xl text-gray-700 font-semibold mb-5'>XYZ Estetik Şubelerimiz</h3>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {brances.map((branch) => (
          <BrancesCard key={branch.id} branch={branch} />
        ))}
      </div>
    </section>
  );
};

export default BrancheSection;
