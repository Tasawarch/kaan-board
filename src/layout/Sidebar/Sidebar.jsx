import { useState } from "react";
// 
import WorkspaceSection from "./WorkspaceSection";
import SidebarItem from "./SidebarItem";
import BoardList from "./BoardList";
import Dropdown from "../../components/DropDown";
import { FaTable, FaCalendarAlt, FaUsers, FaFolder, FaCog } from "react-icons/fa";

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null); // ✅ Manage open dropdown state

  return (
    <aside className="w-64 bg-[#6E1D40] text-white h-screen p-4 justify-between border border-gray-300">
      {/* Workspace Header */}
      <WorkspaceSection />

      {/* Sidebar Menu Items */}
      <SidebarItem icon={<FaFolder />} label="Boards" />
      
      
      <Dropdown
        label="Members"
        options={["Invite Members", "Manage Roles"]}
        isOpen={openDropdown === "Members"}
        setOpenDropdown={setOpenDropdown}
      />

      <Dropdown
        label="Workspace Settings"
        options={["General", "Security", "Billing"]}
        isOpen={openDropdown === "Workspace Settings"}
        setOpenDropdown={setOpenDropdown}
      />

      {/* Workspace Views */}
      <div className="mt-4">
        <span className="text-sm font-semibold text-gray-300">PREMIUM</span>
        <SidebarItem icon={<FaTable />} label="Table" />
        <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
      </div>

      {/* User Boards */}
      <BoardList />
    </aside>
  );
}

export default Sidebar;
