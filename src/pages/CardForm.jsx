import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../context/BoardContext";
import Button from "../components/Button";
import InputField from "../components/InputField";

function CardForm() {
  const [cardName, setCardName] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const { addCard, columns } = useContext(BoardContext);
  const navigate = useNavigate(); // Initialize navigate

  // ✅ Card Add Function
  const handleAddCard = (e) => {
    e.preventDefault();
    if (!cardName.trim() || !selectedColumn) return;

    addCard(selectedColumn, cardName);
    setCardName("");
    setSelectedColumn("");
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#A02D5D] p-6">
        <div className="w-full max-w-md space-y-6">
  
      {/* ✅ Card Add Form */}
      <form onSubmit={handleAddCard} className="bg-white p-6 shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Card to Column</h2>

        {/* ✅ Column Selection Dropdown */}
        <div className="relative">
          <select
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
            className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700"
          >
            <option value="" disabled>Select a Column</option>
            {columns.map((col, index) => (
              <option key={index} value={col.name}>{col.name}</option>
            ))}
          </select>
        </div>

        <InputField
          className="mt-2"
          placeholder="Enter card name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Button type="submit" disabled={!cardName.trim() || !selectedColumn} text="Add Card" />
      </form>

      {/* ✅ Next Button - Visible & Centered */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={() => navigate("/board")}
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

export default CardForm;
