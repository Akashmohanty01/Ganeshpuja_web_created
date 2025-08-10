// src/components/VideoSection.jsx
import React from "react";

function VideoSection() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald mb-6">Watch Our Puja Highlights</h2>
        <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID" // Replace with actual video ID
            title="Ganesh Puja 2025 Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
