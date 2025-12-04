import React, { useState } from "react";
import { faqSection } from "../../home-contact";

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState(faqSection[0].category);
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleToggle = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const activeCategory = faqSection.find((item) => item.category === activeTab);

  return (
    <section
      className="w-full flex flex-col bg-gray-50 p-10 gap-6"
      aria-labelledby="faq-title"
    >
      <h2 id="faq-title" className="text-xl text-gray-800 font-bold">
        Sıkça Sorulan Sorular (XYZ Estetik)
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {faqSection.map((item) => (
          <button
            key={item.category}
            onClick={() => {
              setActiveTab(item.category);
              setOpenQuestion(null);
            }}
            className={`p-2 rounded transition cursor-pointer text-white
              ${
                activeTab === item.category
                  ? "bg-gray-900"
                  : "bg-gray-700 hover:bg-gray-800"
              }
            `}
            aria-pressed={activeTab === item.category}
          >
            {item.category}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {activeCategory.questions.map((q, index) => (
          <div key={index} className="bg-white shadow rounded">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left p-4 text-gray-700 flex justify-between items-center"
              aria-expanded={openQuestion === index}
              aria-controls={`faq-answer-${index}`}
            >
              {q.question}
              <span className="text-gray-500">
                {openQuestion === index ? "−" : "+"}
              </span>
            </button>

            {openQuestion === index && (
              <div
                id={`faq-answer-${index}`}
                className="p-4 pt-0 text-gray-600 animate-fade"
              >
                {q.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
