import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const WebformSection = () => {
  return (
    <section className="w-full flex flex-col justify-between items-start gap-3 bg-gray-800 text-white p-12 md:flex-row md:items-center ">
      <h3 className="text-3xl">
        Hayalini Kurduğunuz Görünüme Kavuşmak için Hemen Başvurun!
      </h3>
      <a
        className="bg-gray-700 text-white p-3 text-sm rounded-md flex flex-row items-center gap-2"
        href=""
      >
        Detaylı Bilgi Al <FaArrowAltCircleRight />
      </a>
    </section>
  );
};

export default WebformSection;
