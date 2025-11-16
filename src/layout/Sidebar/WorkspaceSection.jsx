function WorkspaceSection() {
    return (
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full">
            T
          </div>
          <div>
            <p className="text-sm font-semibold">Trello Workspace</p>
            <span className="text-xs text-gray-300">Premium</span>
          </div>
        </div>
        <button className="text-gray-300 text-sm">←</button>
      </div>
    );
  }
  
  export default WorkspaceSection;
  