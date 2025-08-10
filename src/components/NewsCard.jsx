// src/components/NewsCard.jsx
function NewsCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-emerald hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-night mb-1">{title}</h3>
      <p className="text-sm text-gold mb-2">{date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default NewsCard;
