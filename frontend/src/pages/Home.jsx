import React from "react";
import animeImage from "../assets/gojo.webp"; // pastikan file ini ada di folder 'src/assets'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white p-10 rounded-xl shadow-lg">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Hello Bang!</h1>
          <p className="text-gray-600 text-lg">Ayo Mengkodong Bang Wkwkwkw</p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={animeImage}
            alt="Anime Illustration"
            className="w-64 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
