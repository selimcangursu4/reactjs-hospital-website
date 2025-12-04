import React from "react";

const MainSection = () => {
  return (
    <section className="w-full flex flex-row justify-center items-start py-16 px-6 md:px-12 lg:px-20 gap-16">
      <nav className="w-64 flex-shrink-0 sticky top-28">
        <ul className="space-y-1 text-lg font-medium">
          {[
            { id: "promotion", label: "Tanıtım" },
            { id: "history", label: "Tarihçe" },
            { id: "mission", label: "Misyon Vizyon Değer" },
            { id: "board", label: "Yönetim Kurulu" },
            { id: "identity", label: "Kurumsal Kimlik" },
            { id: "group", label: "Grup İştirakleri" },
            { id: "quality", label: "Kalite Politikası" },
            { id: "visit", label: "Ziyaret ve Refakat Politikası" },
            { id: "environment", label: "Çevre Politikası" },
            { id: "social", label: "Toplumsal Sorumluluk" },
            { id: "info", label: "Bilgi Toplum Hizmetleri" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block p-2 rounded-md hover:bg-gray-100 hover:text-gray-700 transition text-sm text-gray-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="max-w-3xl space-y-24 overflow-y-auto pr-4 custom-scrollbar"
        style={{ height: "75vh" }}
      >
        <div id="promotion">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Tanıtım</h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea
            ducimus delectus quo quas quia odio numquam minus temporibus dolores
            earum doloribus ab tempore possimus maxime consequuntur tempora!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            error quas dicta in ex numquam temporibus repellat maiores dolor
            officiis!
          </p>
        </div>
        <div id="history">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Tarihçe</h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea
            ducimus delectus quo quas quia odio numquam minus temporibus.
          </p>
        </div>
        <div id="mission">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Misyon, Vizyon ve Değerler
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            blanditiis beatae autem tempora voluptatibus minima debitis ratione
            voluptas deleniti molestiae.
          </p>
        </div>
        <div id="board">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Yönetim Kurulu
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            minus incidunt molestias eaque cumque dolorem.
          </p>
        </div>
        <div id="identity">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Kurumsal Kimlik
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit
            fugit illum voluptates necessitatibus tempora possimus.
          </p>
        </div>
        <div id="group">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Grup İştirakleri
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laudantium eum nobis quisquam.
          </p>
        </div>
        <div id="quality">
          <h3 className="text-lg font-semibold  text-gray-700 mb-1">
            Kalite Politikası
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            culpa aliquam minus rem.
          </p>
        </div>
        <div id="visit">
          <h3 className="text-lg font-semibold  text-gray-700 mb-1">
            Ziyaret ve Refakat Politikası
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            ducimus officia quam consequuntur repellat.
          </p>
        </div>
        <div id="environment">
          <h3 className="text-lg font-semibold  text-gray-700 mb-1">
            Çevre Politikası
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            modi ex commodi assumenda.
          </p>
        </div>
        <div id="social">
          <h3 className="text-lg font-semibold  text-gray-700 mb-1">
            Toplumsal Sorumluluk
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nulla! Voluptatum maiores earum.
          </p>
        </div>
        <div id="info">
          <h3 className="text-lg font-semibold  text-gray-700 mb-1">
            Bilgi Toplum Hizmetleri
          </h3>
          <p className="text-gray-700 leading-relaxed text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            unde vero magni vel mollitia dolore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
