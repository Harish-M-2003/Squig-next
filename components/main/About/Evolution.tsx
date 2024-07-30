import React, { useState } from "react";

const EvolutionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const cards = [
    {
      title: "Facing Challenges",
      content: "Starting from scratch, Squig encountered numerous challenges, prompting multiple rebuilds.",
    },
    {
      title: "Continuous Improvement",
      content: "Each iteration brought refinements, improvements, and new features, narrowing the gap with established languages.",
    },
    {
      title: "Future Focus",
      content: "Squig remains committed to addressing its limitations and expanding its capabilities, driven by innovation.",
    },
  ];

  return (
    <section id="evolution" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Evolution of Squig
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Over three years, Squig has evolved significantly, facing challenges and embracing innovation.
          </p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-500 transform hover:shadow-lg`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
              style={{
                opacity: hoveredIndex === index ? 1 : 0.9,
                transform: `translateY(${hoveredIndex === index ? "0" : "8"}px)`,
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;
