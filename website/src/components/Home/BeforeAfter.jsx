import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Before1 from "../../assets/before-after-1.jpg";
import Before2 from "../../assets/before-after-2.jpg";
import Before3 from "../../assets/before-after-3.jpg";
import Before4 from "../../assets/before-after-4.jpg";
import Before5 from "../../assets/before-after-5.jpg";
import Before6 from "../../assets/before-after-6.jpg";

const BeforeAfter = () => {
  return (
    <section className='w-full flex flex-col bg-gray-50 p-10'>
      <h3 className='text-2xl text-gray-700 font-semibold'>Öncesi ve Sonrası</h3>
      <div className='mt-3'>
        <Splide
          options={{
            type: "loop",       // loop, fade, slide vs.
            perPage: 4,         // sayfa başına gösterilecek slide
            autoplay: true,     // otomatik kaydırma
            gap: "1rem",        // slide arası boşluk
            breakpoints: {      // responsive ayarlar
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
        >
          {[Before1, Before2, Before3, Before4, Before5, Before6].map((img, index) => (
            <SplideSlide key={index}>
              <img
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-md"
                src={img}
                alt={`Slide ${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default BeforeAfter;
