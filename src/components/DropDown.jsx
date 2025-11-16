import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ label, options, isOpen, setOpenDropdown }) => {
  const dropdownRef = useRef(null); // Reference for dropdown

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : label);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 hover:bg-[#82254E] px-3 py-1 rounded cursor-pointer"
        onClick={toggleDropdown}
      >
        {label} <IoMdArrowDropdown />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 bg-white text-black shadow-md rounded w-40">
          <ul className="p-2">
            {options.map((option, index) => (
              <li key={index} className="px-3 py-1 hover:bg-gray-200 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
