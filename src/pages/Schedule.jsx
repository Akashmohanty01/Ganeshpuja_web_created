import React from "react";

const Schedule = () => {
  const events = [
    {
      time: "08:00 AM",
      title: "Ganesh Sthapana",
      description: "Installation of Lord Ganesha idol with Vedic rituals.",
    },
    {
      time: "10:00 AM",
      title: "Puja & Aarti",
      description: "Morning aarti with devotional chants and offerings.",
    },
    {
      time: "01:00 PM",
      title: "Community Prasad Distribution",
      description: "Delicious prasad served to all devotees and visitors.",
    },
    {
      time: "04:00 PM",
      title: "Cultural Programs",
      description: "Music, dance & drama performances by village youth.",
    },
    {
      time: "07:00 PM",
      title: "Evening Aarti",
      description: "Aarti with diya lighting and bhajans.",
    },
    {
      time: "09:00 PM",
      title: "Light Show & DJ Night",
      description: "Colorful lights and music celebration to end the day.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-10 border-b-4 border-orange-400 inline-block">
          Puja Schedule
        </h2>

        <div className="mt-10 space-y-8 text-left">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-orange-800">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.time}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
