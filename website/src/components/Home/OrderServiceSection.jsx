import React from 'react';
import ServiceCard from '../ServiceCard';
import { orderServices } from '../../home-contact';

const OrderServiceSection = () => {
  return (
    <section 
      className="w-full flex flex-col bg-gray-50 p-10"
      aria-labelledby="other-services-title"
    >
      <h2 
        id="other-services-title"
        className="text-xl text-gray-800 font-bold mb-5"
      >
        XYZ Estetik – Diğer Tedavi Hizmetlerimiz
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {orderServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default OrderServiceSection;
