import React, { useState } from "react";
import { services } from "../../home-contact";
import Prize1 from "../../assets/odul1.jpg";
import Prize2 from "../../assets/odul2.jpg";
import Prize3 from "../../assets/odul3.jpg";
import Prize4 from "../../assets/odul4.jpg";
import Prize5 from "../../assets/odul5.jpg";
import Prize6 from "../../assets/odul6.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { motion } from "framer-motion";

const ServicesTabSection = () => {
  const [mainContent, setMainContent] = useState(services[0].description);

  const handleServiceClick = (index) => {
    setMainContent(services[index].description);
  };

  return (
    <section
      className="w-full flex flex-col md:flex-row justify-between items-start py-20 bg-gray-50"
      aria-label="Hizmetlerimiz"
    >
      <div className="w-full md:w-[70%] px-10 mb-10 md:mb-0">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 bg-gray-800 p-6 rounded-2xl">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(index)}
              className="flex flex-col items-center cursor-pointer bg-gray-700 hover:bg-gray-600 transition-all rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1"
              aria-label={service.name}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-16 h-16 object-cover rounded-md mb-2"
              />
              <p className="text-white font-medium text-center text-sm">
                {service.name}
              </p>
            </button>
          ))}
        </div>

        <article className="mt-5 text-gray-700" aria-live="polite">
          {mainContent}
        </article>

        <div className="mt-10" aria-label="Ödüllerimiz">
          <Splide
            options={{
              type: "loop",
              perPage: 5,
              autoplay: true,
              gap: "1rem",
            }}
          >
            {[Prize1, Prize2, Prize3, Prize4, Prize5, Prize6].map(
              (prize, idx) => (
                <SplideSlide key={idx}>
                  <img className="w-20" src={prize} alt={`Ödül ${idx + 1}`} />
                </SplideSlide>
              )
            )}
          </Splide>
        </div>
      </div>

      <aside className="w-full md:w-[30%] flex justify-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/70 backdrop-blur-xl shadow-lg border border-gray-300 rounded-3xl p-8 w-full max-w-md hover:shadow-2xl transition-shadow duration-500"
        >
          <h2 className="text-xl text-gray-700 mb-6 text-start animate-pulse">
            Ücretsiz Uzman Analizi
          </h2>

          <form className="flex flex-col gap-5" aria-label="Uzman Analiz Formu">
            <motion.label whileFocus={{ scale: 1.02 }} className="relative">
              <span className="sr-only">Adınız Soyadınız</span>
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none shadow-sm transition-all duration-300"
                required
              />
            </motion.label>

            <motion.label whileFocus={{ scale: 1.02 }} className="relative">
              <span className="sr-only">E-Posta Adresi</span>
              <input
                type="email"
                placeholder="E-Posta Adresi"
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none shadow-sm transition-all duration-300"
                required
              />
            </motion.label>

            <motion.label whileFocus={{ scale: 1.02 }} className="relative">
              <span className="sr-only">Telefon Numarası</span>
              <input
                type="tel"
                placeholder="Telefon Numarası"
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none shadow-sm transition-all duration-300"
                required
              />
            </motion.label>

            <motion.label whileFocus={{ scale: 1.02 }} className="relative">
              <span className="sr-only">İlgilendiğiniz Tedavi</span>
              <select
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none shadow-sm transition-all duration-300"
                required
              >
                <option value="">İlgilendiğiniz Tedavi</option>
                <option value="burun">Burun Estetiği</option>
                <option value="meme">Meme Estetiği</option>
                <option value="yuz">Yüz Estetiği</option>
                <option value="sac">Saç Ekimi</option>
                <option value="diger">Diğer</option>
              </select>
            </motion.label>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gray-700 hover:bg-graysc-800 text-white p-2 rounded-md text-md shadow-md transition-all duration-300"
            >
              Gönder
            </motion.button>
          </form>
        </motion.div>
      </aside>
    </section>
  );
};

export default ServicesTabSection;
