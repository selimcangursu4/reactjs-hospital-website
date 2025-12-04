import React from "react";
import AboutImage from "../../assets/about-hospital.jpg";

const AboutSection = () => {
  return (
    <section 
      className="w-full bg-gray-50 p-10"
      aria-labelledby="about-title"
    >
      <div className="mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={AboutImage}
            alt="Modern ve tam donanımlı hastanemizin iç görünümü"
            className="rounded-xl shadow-lg object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <article className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 
            id="about-title"
            className="text-2xl md:text-2xl font-bold text-gray-700"
          >
            Sağlık Hizmetlerinde Güven, Kalite ve Tecrübe
          </h2>

          <p className="text-gray-700 text-md leading-relaxed">
            Hastanemiz, modern teknolojiyle donatılmış altyapısı ve uzman
            sağlık kadrosu ile hastalarımıza güvenilir, kaliteli ve hızlı
            sağlık hizmetleri sunmayı amaçlamaktadır. Hasta memnuniyetini
            merkeze alan hizmet anlayışımız ile teşhis ve tedavi süreçlerini
            en verimli hale getiriyoruz.
          </p>

          <h3 className="text-xl md:text-xl font-semibold text-gray-700">
            Uzman Doktor Kadrosu ve Çok Yönlü Bölümler
          </h3>

          <p className="text-gray-700 text-md leading-relaxed">
            Alanında uzman hekimlerimiz, güncel tıbbi yöntemlerle teşhis ve
            tedavi süreçlerini yürütmektedir. Dahiliye, çocuk sağlığı,
            ortopedi, kadın doğum, kardiyoloji ve daha birçok bölümde
            uluslararası standartlarda hizmet veriyoruz.
          </p>

          <h3 className="text-xl md:text-xl font-semibold text-gray-700">
            Hasta Odaklı Hizmet Yaklaşımı
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            Hastalarımızın konforu için özenle tasarlanmış odalar, ileri
            teknoloji cihazlar ve profesyonel destek ekiplerimizle
            sağlık yolculuğunuzu kolaylaştırıyoruz. Güvenli, hızlı ve etkili
            bir tedavi deneyimi sunmak için sürekli gelişim anlayışıyla
            çalışıyoruz.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
