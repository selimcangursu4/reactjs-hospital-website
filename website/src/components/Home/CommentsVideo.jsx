import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const CommentsVideo = () => {
  const videos = [
    "https://www.youtube.com/embed/#",
    "https://www.youtube.com/embed/#",
    "https://www.youtube.com/embed/#",
    "https://www.youtube.com/embed/#",
  ];

  return (
    <section className='w-full flex flex-col bg-gray-50 p-10'>
      <h3 className='text-2xl text-gray-700 font-semibold'>XYZ Estetik Müşteri Deneyimleri</h3>
      <div className='mt-3'>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            autoplay: true,
            gap: "1rem",
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
          }}
        >
          {videos.map((video, index) => (
            <SplideSlide key={index}>
              <div className="w-full relative pb-[56.25%]"> 
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default CommentsVideo;
