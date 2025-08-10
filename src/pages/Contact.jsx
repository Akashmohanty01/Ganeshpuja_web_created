import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ganeshpuja-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.status === "success") {
        alert("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg text-center mb-4">
          📬 Get in Touch
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Have questions, suggestions, or want to connect with the Ganesh Puja Committee?
          Fill out the form below and we’ll respond as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-yellow-400/60 rounded-2xl p-8 shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition duration-300 transform hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
