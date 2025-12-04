import React from "react";
import HeroBg from "../../assets/smiling-female-doctor.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="w-full flex flex-row justify-between items-center h-screen bg-black bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroBg})` }}
      aria-label="XYZ Hospital Estetik ve Sağlık Hizmetleri"
    >
      <div className="text-start flex flex-col justify-center items-start p-10 gap-5 bg-black/50 max-w-xl">
        <h1 className="text-4xl font-bold text-white leading-tight">
          XYZ Hospital ile Estetik ve <br /> Sağlık Bir Arada
        </h1>

        <div className="flex flex-col gap-2">
          <strong className="text-white text-2xl">
            YENİ YIL, YENİ SEN!
          </strong>
          <p className="text-white text-md leading-relaxed">
            Tüm işlemlerde <strong>%25’e varan indirim</strong> fırsatlarını kaçırmayın! 
            Profesyonel estetik ve sağlık çözümlerimizle kendinizi yeniden keşfedin.
          </p>
        </div>

        <a
          className="bg-gray-700 text-white p-3 text-sm rounded-md flex flex-row items-center gap-2 hover:bg-gray-800 transition"
          href="#contact"
          aria-label="Detaylı bilgi almak için tıklayın"
        >
          Detaylı Bilgi Al <FaArrowAltCircleRight />
        </a>
      </div>

      {/* İstatistik Kartı */}
      <div className="absolute bottom-10 right-10">
        <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-xl px-8 py-5 flex flex-row items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center text-lg font-bold">
              +
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">600.000+</h3>
              <p className="text-sm text-gray-600">Operasyon Sayısı</p>
            </div>
          </div>
          <div className="h-10 w-px bg-gray-300"></div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">4</h3>
            <p className="text-sm text-gray-600">Şubede Hizmet</p>
          </div>
          <div className="h-10 w-px bg-gray-300"></div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">1998</h3>
            <p className="text-sm text-gray-600">’den beri Hizmet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
