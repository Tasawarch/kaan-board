import { IoMdArrowDropdown } from "react-icons/io";

function SidebarItem({ icon, label, hasDropdown = false }) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-[#82254E] rounded cursor-pointer">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      {hasDropdown && <IoMdArrowDropdown />}
    </div>
  );
}

export default SidebarItem;
