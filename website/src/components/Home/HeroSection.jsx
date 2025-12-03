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
          className="bg-gray-700 text-white p-3 text-sm rounded-md flex flex-row items-center gap-2"
          href=""
        >
          Detaylı Bilgi Al <FaArrowAltCircleRight />
        </a>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-xl px-8 py-5 flex flex-row items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold">
              +
            </div>
            <div>
              <h5 className="text-xl font-bold text-gray-900">600.000+</h5>
              <p className="text-sm text-gray-600">Operasyon Sayısı</p>
            </div>
          </div>
          <div className="h-10 w-px bg-gray-300"></div>
          <div>
            <h5 className="text-xl font-bold text-gray-900">4</h5>
            <p className="text-sm text-gray-600">Şubede Hizmet</p>
          </div>
          <div className="h-10 w-px bg-gray-300"></div>
          <div>
            <h5 className="text-xl font-bold text-gray-900">1998</h5>
            <p className="text-sm text-gray-600">'den beri Hizmet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
