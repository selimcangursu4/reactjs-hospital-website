import React from "react";
import HeroBg from "../../assets/smiling-female-doctor.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="w-full flex flex-row justify-between items-center h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="text-start flex flex-col justify-center items-start p-10 gap-5 bg-black/50">
        <h3 className="text-5xl font-bold text-white">
          XYZ Hospital ile Estetik ve <br /> Sağlık Bir Arada
        </h3>

        <div className="flex flex-col gap-2">
          <strong className="text-white text-2xl">YENİ YIL, YENİ SEN!</strong>
          <p className="text-white">
            Tüm işlemlerde %25’e varan indirim fırsatlarını kaçırmayın!
          </p>
        </div>
        <a
          className="bg-blue-950 text-white p-3 text-sm rounded-md flex flex-row items-center gap-2"
          href=""
        >
          Detaylı Bilgi Al <FaArrowAltCircleRight />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
