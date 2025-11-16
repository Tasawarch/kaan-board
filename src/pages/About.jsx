import React, { useState } from "react";
import Home from "./Home";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Open First Page (Modal)
      </button>

      {isModalOpen && <Home closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default About;
