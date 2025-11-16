import { useState } from "react";
import { FaTrello } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import Dropdown from "../components/DropDown";
import Button from "../components/Button";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-[#6E1D40] text-white px-4 py-2 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-4">
      <FaTrello className="text-4xl text-white" />
        <span className="text-lg font-semibold">Trello</span>

        {/* Dropdowns using the Dropdown Component */}
        <Dropdown label="Workspaces" options={["My Workspace", "Team Workspace"]} isOpen={openDropdown === "Workspaces"} setOpenDropdown={setOpenDropdown} />
        <Dropdown label="Recent" options={["Board 1", "Board 2"]} isOpen={openDropdown === "Recent"} setOpenDropdown={setOpenDropdown} />
        <Dropdown label="Starred" options={["Important Board", "Pinned Board"]} isOpen={openDropdown === "Starred"} setOpenDropdown={setOpenDropdown} />
        <Dropdown label="Templates" options={["Project Template", "Kanban Template"]} isOpen={openDropdown === "Templates"} setOpenDropdown={setOpenDropdown} />

        <Button text="Create" onClick={() => console.log("btn")} variant={true} />
      </div> 

      {/* Right Side */}
      <div className="flex items-center gap-4">
    
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#4E1E3A] text-white px-3 py-1 rounded pl-8 cursor-pointer"
          />
          <FiSearch className="absolute left-2 top-2 text-gray-300 cursor-pointer" />
        </div>
        <MdNotifications className="text-2xl cursor-pointer" />
        <div className="w-8 h-8 bg-gray-400 rounded-full cursor-pointer"></div>
      </div>
    </nav>
  );
}

export default Navbar;
