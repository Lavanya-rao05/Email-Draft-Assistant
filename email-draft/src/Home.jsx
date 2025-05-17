import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
          Email Draft Assistant
        </h1>
        <p className="text-gray-600 mb-6">
          Generate polished, professional emails in seconds. Just prompt and go!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            to="/generate"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-200"
          >
            Generate Email
          </Link>
          <Link
            to="/history"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all duration-200"
          >
            View History
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
