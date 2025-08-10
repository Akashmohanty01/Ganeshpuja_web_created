import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-orange-700 mb-6 border-b-4 border-orange-400 inline-block">
          About Ganesh Puja
        </h2>
        <p className="text-lg text-gray-800 mt-6 leading-relaxed">
          Ganesh Puja is one of the most celebrated and beloved festivals in our village.
          It brings together family, friends, and neighbors to honor Lord Ganesha, the
          remover of obstacles and the god of wisdom and prosperity.
        </p>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          This year, we are proud to organize a grand celebration with cultural programs,
          devotional rituals, and community meals. Your participation and support make
          this event more joyful and spiritually enriching for everyone.
        </p>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          Let's unite and celebrate with devotion, music, lights, and blessings of Lord Ganesha.
        </p>
      </div>
    </section>
  );
};

export default About;
