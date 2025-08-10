import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black text-white">
      {/* Top Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-gray-900 to-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg">
          ଜନ ଜାଗୃତି ଯୁବ ପରିଷଦ ପୂଜା କମିଟି
        </h1>
        <p className="mt-4 text-lg md:text-xl text-yellow-100">
          Celebrating <span className="text-yellow-400 font-bold">32 Glorious Years</span>  
          of Devotion, Unity & Culture
        </p>
        <div className="mt-6">
          <Link
            to="/gallery"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            🎉 Explore Events
          </Link>
        </div>
      </section>

      {/* Image Section (instead of video) */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/main.jpg"
          alt="Ganesh Puja Main"
          className="w-full h-[60vh] object-cover"
        />
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          About Our Celebration
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Our Ganesh Puja celebration has been a proud tradition for over three decades,  
          bringing together families, friends, and devotees from near and far.  
          With stunning decorations, devotional music, and community unity,  
          we aim to create an atmosphere of joy, faith, and togetherness.  
          Come, be a part of this divine journey.
        </p>
      </section>

      {/* Rituals Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">
          ✨ Major Rituals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "🪔", title: "Pratham Pooja", desc: "The first offering to Lord Ganesha marking the beginning of celebrations." },
            { icon: "🎶", title: "Bhajan Sandhya", desc: "Devotional evening filled with music and bhajans by talented singers." },
            { icon: "💥", title: "Visarjan", desc: "A grand farewell procession with dance, music, and fireworks." },
          ].map((ritual, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-yellow-400 hover:scale-105 transform transition duration-300"
            >
              <div className="text-5xl mb-4">{ritual.icon}</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                {ritual.title}
              </h3>
              <p className="text-gray-300">{ritual.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Celebrations Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">
          📸 Previous 3 Years Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { year: "2024", img: "/images/puja2024.jpg" },
            { year: "2023", img: "/images/puja2023.jpg" },
            { year: "2022", img: "/images/puja2022.jpg" },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={event.img}
                alt={`Ganesh Puja ${event.year}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-yellow-300">
                  Ganesh Puja {event.year}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
