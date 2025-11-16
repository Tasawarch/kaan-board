import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import Button from "../components/Button";
import InputField from "../components/InputField";
// import Navbar from "../layout/Navbar";

function ColumnForm() {
  const [columnName, setColumnName] = useState("");
  const { addColumn, addCard, columns } = useContext(BoardContext);
  const navigate = useNavigate();

  // ✅ Column Add Karne Ka Function
  const handleAddColumn = (e) => {
    e.preventDefault();
    if (!columnName.trim()) return;

    addColumn(columnName);
    setColumnName("");
  };

  
  return (
    <>
      {/* <Navbar/> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#A02D5D] p-6">
        <div className="w-full max-w-md space-y-6">
          {/* ✅ Column Add Form */}
          <form
            onSubmit={handleAddColumn}
            className="bg-white p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Create Column
            </h2>
            <InputField
              placeholder="Enter column name"
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
            />
            <Button
              type="submit"
              disabled={!columnName.trim()}
              text="Add Column"
            />
          </form>
          {/* ✅ Next Button - Visible & Centered */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => navigate("/CardForm")}
              text="Next"
              variant={true}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ColumnForm;
