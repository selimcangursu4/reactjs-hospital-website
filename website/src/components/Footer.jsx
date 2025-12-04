import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 pt-14 pb-6 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">XYZ Estetik</h2>
          <p className="text-sm leading-relaxed">
            27 yılı aşkın süredir estetik, plastik cerrahi, saç ekimi ve medikal estetik alanlarında
            dünya standartlarında hizmet sunuyoruz.
          </p>
          <div className="flex flex-row gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Hızlı Menü</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Ana Sayfa</a></li>
            <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-white">Hizmetler</a></li>
            <li><a href="#" className="hover:text-white">Öncesi & Sonrası</a></li>
            <li><a href="#" className="hover:text-white">İletişim</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Hizmetler</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Saç Ekimi</a></li>
            <li><a href="#" className="hover:text-white">Plastik Cerrahi</a></li>
            <li><a href="#" className="hover:text-white">Diş Estetiği</a></li>
            <li><a href="#" className="hover:text-white">Medikal Estetik</a></li>
            <li><a href="#" className="hover:text-white">Lazer Epilasyon</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">İletişim</h3>
          <ul className="text-sm space-y-2">
            <li>📍 İstanbul, Türkiye</li>
            <li>📞 +90 555 555 55 55</li>
            <li>📧 info@xyzestetik.com</li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} XYZ Estetik — Tüm Hakları Saklıdır.
      </div>

    </footer>
  );
}

export default Footer;
