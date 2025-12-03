import React from 'react';
import { LuCheck } from "react-icons/lu";
import { RxCrosshair1 } from "react-icons/rx";

const ServiceCard = ({ service }) => {
  return (
    <div className='w-full p-4 bg-white rounded-lg shadow-md'>
    <RxCrosshair1 className='text-3xl mb-3 text-gray-600' />
      <h4 className='text-lg font-semibold text-gray-700 mb-2'>{service.name}</h4>
      <ul className='list-none space-y-1'>
        {service.main.map((item, index) => (
          <li key={index}>
            <p  className='text-gray-600 text-sm flex flex-row items-center gap-1'><LuCheck /> {item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceCard;
