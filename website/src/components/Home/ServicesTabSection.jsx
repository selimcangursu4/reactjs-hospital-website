import React, { useState } from "react";
import SacEkimi from "../../assets/sac-ekimi.png";
import SacTedavisi from "../../assets/sac-tedavisi.jpg";
import BurunEstetigi from "../../assets/burun-logosu-vektoru_535345-2468.avif";
import BoobsAsthetic from "../../assets/meme-estetigi.jpg";
import PlasticSurgery from "../../assets/plastic-surgery-icon-beauty-procedure-260nw-2583158219.webp";
import DentalAsthetic from "../../assets/dis-estetigi.png";
import { services } from "../../home-contact";

const ServicesTabSection = () => {
const [mainContent, setMainContent] = useState();

  const handleHairTransplant = () => {
    setMainContent(services[0].description);
  };

  const handleHairTreatments = () => {
    setMainContent(services[1].description);
  };

  const handleRhinoplasty = () => {
    setMainContent(services[2].description);
  };

  const handleBreastAesthetics = () => {
    setMainContent(services[3].description);
  };

  const handlePlasticSurgery = () => {
    setMainContent(services[4].description);
  };

  const handleDentalAesthetics = () => {
    setMainContent(services[5].description);
  };
  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-start py-20 bg-gray-50">
      <div className="w-full md:w-[70%] px-10 mb-10 md:mb-0">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 bg-gray-800 p-6 rounded-2xl">
          <button
            onClick={handleHairTransplant}
            className="flex flex-col items-center cursor-pointer bg-gray-700 hover:bg-gray-600 transition-all rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={SacEkimi}
              alt="sac-ekimi"
              className="w-16 h-16 object-cover rounded-md mb-2"
            />
            <p className="text-white font-medium text-center text-sm">
              Saç Ekimi
            </p>
          </button>
          <button
            onClick={handleHairTreatments}
            className="flex flex-col items-center bg-gray-700 cursor-pointer hover:bg-gray-600 transition-all rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={SacTedavisi}
              alt="sac-tedavisi"
              className="w-16 h-16 object-cover rounded-md mb-2"
            />
            <p className="text-white font-medium text-center text-sm">
              Saç Tedavileri
            </p>
          </button>
          <button
            onClick={handleRhinoplasty}
            className="flex flex-col items-center bg-gray-700 cursor-pointer hover:bg-gray-600 transition-all rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={BurunEstetigi}
              alt="burun-estetigi"
              className="w-16 h-16 object-cover rounded-md mb-2"
            />
            <p className="text-white font-medium text-center text-sm">
              Burun Estetiği
            </p>
          </button>
          <button
            onClick={handleBreastAesthetics}
            className="flex flex-col items-center bg-gray-700 cursor-pointer hover:bg-gray-600 transition-all rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={BoobsAsthetic}
              alt="meme-estetigi"
              className="w-16 h-16 object-cover rounded-md mb-2"
            />
            <p className="text-white font-medium text-center text-sm">
              Meme Estetiği
            </p>
          </button>
          <button
            onClick={handlePlasticSurgery}
            className="flex flex-col items-center bg-gray-700 cursor-pointer hover:bg-gray-600 transition-all rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={PlasticSurgery}
              alt="plastik-cerrahi"
              className="w-16 h-16 object-cover rounded-md mb-2"
            />
            <p className="text-white font-medium text-center text-sm">
              Plastik Cerrahi
            </p>
          </button>
          <button
            onClick={handleDentalAesthetics}
            className="flex flex-col items-center bg-gray-700 cursor-pointer hover:bg-gray-600 transition-all rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <img
              src={DentalAsthetic}
              alt="dis-estetigi"
              className="w-16 h-16 object-cover rounded-md mb-2"
            />
            <p className="text-white font-medium text-center text-sm">
              Diş Estetiği
            </p>
          </button>
        </div>
        <div className="mt-5">{mainContent}</div>
      </div>
      <div className="w-full md:w-[30%] flex justify-center px-10">
        <div className="bg-white/50 backdrop-blur-xl shadow-sm border border-gray-600 rounded-2xl p-8 w-full max-w-md">
          <h3 className="text-2xl text-black mb-6 text-start">
            Ücretsiz Uzman Analizi
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-900/40 outline-none"
            />

            <input
              type="email"
              placeholder="E-Posta Adresi"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-900/40 outline-none"
            />

            <input
              type="tel"
              placeholder="Telefon Numarası"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-900/40 outline-none"
            />

            <select className="p-3 rounded-md border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-900/40 outline-none">
              <option value="">İlgilendiğiniz Tedavi</option>
              <option value="burun">Burun Estetiği</option>
              <option value="meme">Meme Estetiği</option>
              <option value="yuz">Yüz Estetiği</option>
              <option value="sac">Saç Ekimi</option>
              <option value="diger">Diğer</option>
            </select>

            <button className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-md text-sm font-medium shadow-md transition-all">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabSection;
