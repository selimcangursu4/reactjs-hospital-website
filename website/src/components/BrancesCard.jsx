import React from "react";

const BrancesCard = ({ branch }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="w-full h-40 md:h-48 overflow-hidden">
        <img
          src={branch.img}
          alt={branch.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-md font-semibold text-gray-700">{branch.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {branch.address}
        </p>
      </div>
    </div>
  );
};

export default BrancesCard;
