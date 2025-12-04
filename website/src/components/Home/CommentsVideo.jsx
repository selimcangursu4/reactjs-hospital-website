import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const CommentsVideo = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/#",
      title: "XYZ Estetik müşteri deneyimi - Video 1"
    },
    {
      url: "https://www.youtube.com/embed/#",
      title: "XYZ Estetik müşteri deneyimi - Video 2"
    },
    {
      url: "https://www.youtube.com/embed/#",
      title: "XYZ Estetik müşteri deneyimi - Video 3"
    },
    {
      url: "https://www.youtube.com/embed/#",
      title: "XYZ Estetik müşteri deneyimi - Video 4"
    },
  ];

  return (
    <section 
      className="w-full flex flex-col bg-gray-50 p-10"
      aria-labelledby="comments-video-title"
    >
      <h2
        id="comments-video-title"
        className="text-xl text-gray-800 font-bold"
      >
        XYZ Estetik Müşteri Deneyimleri
      </h2>
      <div className="mt-6">
        <Splide
          aria-label="Müşteri yorumları video galerisi"
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
              <div className="w-full relative pb-[56.25%] rounded-md overflow-hidden shadow-md">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  loading="lazy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default CommentsVideo;
