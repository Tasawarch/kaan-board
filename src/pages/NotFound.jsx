import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#A02D5D] text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-white mt-2">Page Not Found</h2>
      <p className="text-white mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
       create column
      </Link>
    </div>
  );
}

export default NotFound;