// src/pages/Donation.jsx
import React, { useState } from "react";

export default function Donation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    purpose: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") value = value.replace(/\D/g, "");
    if (name !== "message") value = value.trimStart();
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://ganeshpuja-backend.onrender.com/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Donation submitted successfully!");
        setFormData({ name: "", phone: "", purpose: "", message: "" });
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (error) {
      setStatus(`❌ Server connection failed`);
    }

    setLoading(false);
  };

  const isFormValid =
    formData.name.trim() && formData.phone.trim().length === 10 && formData.purpose.trim();

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg text-center mb-4">
          🙏 Support Ganesh Puja 2025
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Your kind donation helps us organize cultural events, decorate the pandal, arrange prasad distribution,
          and keep our traditions alive. Every contribution counts!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Donation Form */}
          <div className="bg-gray-900 border border-yellow-400/60 rounded-2xl p-8 shadow-xl hover:shadow-yellow-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6">💌 Donation Form</h3>

            {status && (
              <div
                className={`mb-4 p-3 rounded-lg text-center ${
                  status.includes("✅") ? "bg-green-700 text-green-100" : "bg-red-700 text-red-100"
                }`}
              >
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit Contact Number"
                required
                maxLength="10"
                className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              >
                <option value="">Purpose of Donation</option>
                <option value="Cultural Events">Cultural Events</option>
                <option value="Prasad Distribution">Prasad Distribution</option>
                <option value="Decoration & Lighting">Decoration & Lighting</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Wishes / Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              ></textarea>
              <button
                type="submit"
                disabled={loading || !isFormValid}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Donation Details"}
              </button>
            </form>
          </div>

          {/* Payment Info */}
          <div className="space-y-8">
            {/* QR Code */}
            <div className="bg-gray-900 border border-green-400/60 rounded-2xl p-8 shadow-xl hover:shadow-green-500/20 transition-all duration-300 text-center">
              <h3 className="text-xl font-bold text-green-300 mb-4">📲 UPI / QR Code</h3>
              <a href="/images/upi-qr.png" download>
                <img
                  src="/images/Scanner.jpg"
                  alt="Scan QR to Donate"
                  className="w-52 h-52 object-contain mx-auto border border-gray-300 rounded-lg bg-white p-2"
                />
              </a>
              <p className="text-gray-300 mt-3 text-sm">
                Scan using any UPI app & donate instantly
              </p>
            </div>

            {/* Bank Details */}
            <div className="bg-gray-900 border border-green-400/60 rounded-2xl p-8 shadow-xl hover:shadow-green-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-green-300 mb-4">🏦 Bank Transfer</h3>
              <div className="bg-black/50 border border-gray-700 rounded-lg p-4 text-sm space-y-1">
                <p><strong>Bank:</strong> State Bank of India</p>
                <p><strong>Account Name:</strong> Ganesh Puja Committee</p>
                <p><strong>Account No:</strong> 1234567890</p>
                <p><strong>IFSC:</strong> SBIN0000123</p>
                <p><strong>Branch:</strong> Adaspur</p>
              </div>
              <p className="text-gray-300 text-xs mt-3">
                Please send transaction details to{" "}
                <span className="text-green-300 font-semibold">ganeshpuja@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
