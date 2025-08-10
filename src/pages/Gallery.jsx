// src/pages/Gallery.jsx
import React, { useRef } from "react";

const videos = [
  { src: "/videos/dance1.mp4", title: "Previous year Night Visarjan - Part 1" },
  { src: "/videos/dance2.mp4", title: "Previous year Night Visarjan - Part 2" },
  { src: "/videos/dance3.mp4", title: "Previous year Night Visarjan - Part 3" },
];

const images = [
  "/images/gallery1.jpeg",
  "/images/gallery2.jpeg",
  "/images/gallery3.jpeg",
  "/images/gallery4.jpeg",
  "/images/gallery5.jpeg",
  "/images/gallery6.jpeg",
];

function Gallery() {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, idx) => {
      if (idx !== index && video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Previous Year Videos */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-lg text-center mb-8">
          🎥 Previous year Night Visarjan Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-yellow-400"
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={video.src}
                controls
                className="w-full h-64 object-cover"
                onPlay={() => handlePlay(idx)}
              />
              <div className="p-3 text-center">
                <h3 className="text-lg font-semibold text-yellow-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* This Year - Demo Coming Soon */}
     <section className="py-10 px-4 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-green-400 drop-shadow-lg text-center mb-8">
    📅 This Year – 2nd September Visarjan
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {/* First Video */}
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-green-400 w-full sm:w-96">
      <video
        src="/videos/Thisyear.mp4"
        controls
        poster="/images/demo-placeholder.jpg"
        className="w-full h-64 object-cover bg-black"
      />
      <div className="p-3 text-center">
        <h3 className="text-lg font-semibold text-green-300">
          🎬 Coming Soon
        </h3>
      </div>
    </div>

    {/* Second Video */}
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-green-400 w-full sm:w-96">
      <video
        src="/videos/Thisyear2.mp4"
        controls
        poster="/images/demo-placeholder.jpg"
        className="w-full h-64 object-cover bg-black"
      />
      <div className="p-3 text-center">
        <h3 className="text-lg font-semibold text-green-300">
          🎬 Coming Soon – Part 2
        </h3>
      </div>
    </div>
  </div>
</section>




      {/* Photo Gallery */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-lg text-center mb-8">
          📸 Ganesh Puja Photo Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg border border-yellow-400 hover:scale-105 transform transition duration-300"
            >
              <img
                src={img}
                alt={`Ganesh Puja ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
