import { Link } from 'react-router-dom';
import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-emerald-900 text-yellow-100 py-12 px-4 mt-16 border-t border-emerald-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1 - Branding */}
        <div>
          <h3 className="text-3xl font-extrabold mb-4 text-yellow-300 tracking-wide">
            🐘 Ganesh Puja 2025
          </h3>
          <p className="text-sm leading-relaxed">
            Celebrating unity, culture, and devotion.  
            Join us in this divine journey filled with joy and blessings.
          </p>
        </div>

        {/* Column 2 - Navigation Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-yellow-300 underline underline-offset-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-200 transition duration-200">🏠 Home</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-200 transition duration-200">🖼️ Gallery</Link>
            </li>
            <li>
              <Link to="/donation" className="hover:text-yellow-200 transition duration-200">💰 Donation</Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-yellow-200 transition duration-200">👥 Team</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-200 transition duration-200">📞 Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-yellow-300 underline underline-offset-4">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold text-yellow-200">📍 Village:</span> Badapatasundarpur, Odapadasahi
            </li>
            <li>
              <span className="font-semibold text-yellow-200">📧 Email:</span>{' '}
              <a href="mailto:akashmohanty429" className="hover:text-yellow-300">
                akashmohanty429@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-yellow-200">📞 Phone:</span> +91 8144148140
            </li>
            <li>
              <span className="font-semibold text-yellow-200">📱 WhatsApp:</span> +91 8144148140
            </li>
            <li>
              <span className="font-semibold text-yellow-200">🌐 Website:</span> www.ganeshpuja2025.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-12 text-sm text-yellow-400 border-t border-yellow-600 pt-6">
        &copy; {new Date().getFullYear()} Kadamba Chhak Puja Committee. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
