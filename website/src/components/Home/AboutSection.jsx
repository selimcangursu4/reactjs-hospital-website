import React from "react";
import AboutImage from "../../assets/about-hospital.jpg";

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-2 md:px-10">
      <div className="mx-auto flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <img
            src={AboutImage}
            alt="Hakkımızda"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            exercitationem, nisi numquam, voluptates odit inventore nihil
            voluptatem perspiciatis molestias debitis obcaecati voluptas
            temporibus quam quis incidunt in maxime labore dolorum. Amet modi
            voluptatibus maiores ipsa iste pariatur optio molestias voluptatum,
            ratione voluptas? Molestias obcaecati est magni temporibus dolore!
            Quia, esse?
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            nam, quidem quisquam aperiam est architecto omnis cumque neque
            dolores expedita perferendis, optio recusandae esse? Praesentium,
            similique corporis obcaecati iste accusantium ad eaque vel modi
            facilis eveniet aliquam fuga cumque quia.
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Lorem ipsum dolor sit. Lorem, ipsum.
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis
            soluta dignissimos, sint necessitatibus enim provident impedit non
            doloremque, vero fuga harum? Laudantium ipsum aliquam possimus qui
            neque consectetur, deleniti numquam asperiores fugiat labore, ab
            quasi. Facilis nesciunt est deserunt!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
