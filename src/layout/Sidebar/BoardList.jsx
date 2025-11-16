import SidebarItem from "./SidebarItem";

function BoardList() {
    return (
      <div className="mt-4">
        <span className="text-sm font-semibold text-gray-300">Your Boards</span>
        <SidebarItem icon={<div className="w-3 h-3 bg-pink-400 rounded-sm"></div>} label="My Trello board" />
      </div>
    );
  }
  
  export default BoardList;
  