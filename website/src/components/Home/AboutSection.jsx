import React from "react";
import AboutImage from "../../assets/about-hospital.jpg"; 

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-2 md:px-10">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={AboutImage}
            alt="Hakkımızda"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            XYZ Estetik ile Estetik ve Sağlık Bir Arada!
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            XYZ Estetik Plastik Cerrahi Sağlık Grubu, Türkiye’nin ilk ve tek
            plastik ve estetik cerrahi hizmet sağlayıcısıdır. “Sağlıklı Güzellik!” 
            sloganıyla 27 yılı aşkın süredir yüksek tıbbi standartlarda estetik hizmetler sunmaktadır. 
            Tam zamanlı uzmanlarımız plastik cerrahi, saç ekimi, diş tedavileri ve medikal estetik konularında 
            global kalite standartlarını karşılayan hizmetler sunmaktadır.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            1998’den Beri Sizinleyiz!
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            1998′ten bu yana İstanbul’da 3 farklı lokasyonda 30.000 metrekare kapalı alanda yüksek teknoloji cihazlarla donatılmış ünitelerimizde 
            ayda yaklaşık 1.500, yılda 20.000 ve toplamda 500.000’den fazla operasyon gerçekleştiriyoruz. 
            Estetik ve plastik cerrahi işlemleri ile pek çok misafirimizi hayal ettiği görünüme kavuşturuyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
