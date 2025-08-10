// src/pages/News.jsx
import React from 'react';
import NewsCard from '../components/NewsCard';

const dummyNews = [
  {
    title: 'Ganesh Puja 2025 Date Announced!',
    description:
      'This year our village will celebrate Ganesh Puja on 6th September 2025 with grandeur and devotion.',
    date: '2025-08-01',
    image: '/images/news/puja-date.jpg',
  },
  {
    title: 'Cultural Night Event Schedule',
    description:
      'Enjoy an evening of classical dance, music, and drama performed by our local youth teams.',
    date: '2025-08-03',
    image: '/images/news/cultural-night.jpg',
  },
  {
    title: 'Donation Drive Launched',
    description:
      'We’ve started collecting donations to support arrangements. Your contribution matters!',
    date: '2025-08-05',
    image: '/images/news/donation-drive.jpg',
  },
];

function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-emerald-700 text-center mb-10">📰 Latest News</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
}

export default News;
