// src/pages/Team.jsx
import React from 'react';

const teamHead = {
  name: 'Bishal Parida',
  role: 'Team Head & Chief Coordinator',
  image: '/images/team/bishal.jpg',
  bio: `With over a decade of experience in organizing large-scale cultural and devotional events, 
        Bishal Parida leads the Ganesh Puja celebrations with vision and dedication. 
        His leadership ensures every detail—from stage setup to visarjan—is executed with perfection.`,
};

const coreTeam = [
  { name: 'Roshan swain', role: 'Organizer', image: '/images/team/roshan.jpg' },
  { name: 'Akash mohanty', role: 'Cultural Coordinator', image: '/images/team/akash.jpg' },
  { name: 'pravat sir ', role: 'Decoration Head', image: '/images/team/pravat.jpg' },
  { name: 'Ayush das', role: 'Treasurer', image: '/images/team/ayush.jpg' },
];

const groupPhotos = [
  { title: "Decoration & Stage Setup Team", image: "/images/team/group1.jpg" },
  { title: "Cultural & Events Team", image: "/images/team/group2.jpg" },
  { title: "Volunteer & Support Team", image: "/images/team/group3.jpg" },
];

function Team() {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-yellow-300 drop-shadow-lg mb-8">
        🙌 Meet Our Team
      </h2>

      {/* Team Head Section */}
      <section className="mb-12 bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 border border-yellow-400">
        <img
          src={teamHead.image}
          alt={teamHead.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-md"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-yellow-300">{teamHead.name}</h3>
          <p className="text-yellow-200 font-medium">{teamHead.role}</p>
          <p className="text-gray-300 mt-3 leading-relaxed">{teamHead.bio}</p>
        </div>
      </section>

      {/* Core Team Members */}
      <h3 className="text-2xl font-semibold text-center text-yellow-300 mb-6">
        Core Committee
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {coreTeam.map((member, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-md p-4 text-center border border-yellow-400 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-yellow-400"
            />
            <h3 className="mt-4 text-xl font-semibold text-yellow-300">
              {member.name}
            </h3>
            <p className="text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Group Photos Section */}
      <h3 className="text-2xl font-semibold text-center text-yellow-300 mb-6">
        Group Members
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {groupPhotos.map((group, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-yellow-400 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={group.image}
              alt={group.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-yellow-300">{group.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
