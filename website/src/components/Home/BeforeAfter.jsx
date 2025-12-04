import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import Before1 from "../../assets/before-after-1.jpg";
import Before2 from "../../assets/before-after-2.jpg";
import Before3 from "../../assets/before-after-3.jpg";
import Before4 from "../../assets/before-after-4.jpg";
import Before5 from "../../assets/before-after-5.jpg";
import Before6 from "../../assets/before-after-6.jpg";

const images = [
  { src: Before1, alt: "Tedavi öncesi ve sonrası değişim 1" },
  { src: Before2, alt: "Tedavi öncesi ve sonrası değişim 2" },
  { src: Before3, alt: "Tedavi öncesi ve sonrası değişim 3" },
  { src: Before4, alt: "Tedavi öncesi ve sonrası değişim 4" },
  { src: Before5, alt: "Tedavi öncesi ve sonrası değişim 5" },
  { src: Before6, alt: "Tedavi öncesi ve sonrası değişim 6" },
];

const BeforeAfter = () => {
  return (
    <section
      className="w-full flex flex-col bg-gray-50 p-10"
      aria-labelledby="before-after-title"
    >
      <h2 id="before-after-title" className="text-xl text-gray-800 font-bold">
        Öncesi ve Sonrası – Başarılı Tedavi Sonuçlarımız
      </h2>

      <div className="mt-6">
        <Splide
          aria-label="Öncesi ve sonrası tedavi görüntüleri"
          options={{
            type: "loop",
            perPage: 4,
            autoplay: true,
            gap: "1rem",
            pagination: true,
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
        >
          {images.map((img, index) => (
            <SplideSlide key={index}>
              <img
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-md"
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default BeforeAfter;
