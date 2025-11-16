import { useContext, useState } from "react";
import Sidebar from "../layout/Sidebar/Sidebar";
import { BoardContext } from "../context/BoardContext";
import "../App.css";
import Button from "../components/Button";
import Modal from "../components/Modal"; 
import ColumnForm from "./ColumnForm";
import CardForm from "./CardForm";

function Board() {
  const { columns, addColumn, addCard } = useContext(BoardContext);
  const [newColumnName, setNewColumnName] = useState("");
  const [cardInputs, setCardInputs] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'card' or 'column'

  const handleAddCard = (index, colName) => {
    if (cardInputs[index]?.trim()) {
      addCard(colName, cardInputs[index]);
      setCardInputs({ ...cardInputs, [index]: "" });
    }
  };

  const handleAddColumn = () => {
    if (newColumnName.trim()) {
      addColumn(newColumnName);
      setNewColumnName("");
    }
  };

  return (
    <div className="h-screen flex flex-col transition-all duration-300">
      <div className={`bg-[#A02D5D] flex h-full ${isModalOpen ? "blur-md" : ""}`}>
        <Sidebar />
        <div className="flex-1 p-6 overflow-hidden">
          <h2 className="text-xl font-bold text-white mb-4">Board</h2>

          <div className="flex overflow-x-auto h-[82%] w-[95%] gap-6 p-4 bg-gray-200 rounded-lg">
            {columns.map((col, index) => (
              <div
                key={index}
                className="w-72 min-w-[280px] max-h-full p-6 border rounded-lg bg-white shadow-lg flex flex-col relative overflow-hidden"
              >
                <h4 className="font-bold text-lg text-center bg-[#A02D5D] text-white p-2 rounded-md sticky top-0">
                  {col.name}
                </h4>
                {col.cards.length > 0 ? (
                  <ul className="mt-4 space-y-2 overflow-y-auto max-h-[400px] scrollbar-hide">
                    {col.cards.map((card, i) => (
                      <li key={i} className="p-3 bg-gray-100 rounded-md shadow-sm text-center">
                        {card}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 mt-4 text-center">No cards yet</p>
                )}

                <div className="mt-4 flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Enter card name"
                    value={cardInputs[index] || ""}
                    onChange={(e) =>
                      setCardInputs({ ...cardInputs, [index]: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                  />
                  <Button onClick={() => handleAddCard(index, col.name)} text="Add Card" />
                  <Button onClick={() => { setIsModalOpen(true); setModalType("card"); }} text="Add Card Modal" />
                </div>
              </div>
            ))}

            <div className="w-72 min-w-[280px] max-h-full p-6 border rounded-lg bg-white shadow-lg flex flex-col relative overflow-hidden">
              <input
                type="text"
                placeholder="Enter column name"
                value={newColumnName}
                onChange={(e) => setNewColumnName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
              <Button onClick={handleAddColumn} text="Add Column" />
              <Button onClick={() => { setIsModalOpen(true); setModalType("column"); }} text="Add Column Modal" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal Component */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {modalType === "card" ? <CardForm /> : <ColumnForm />}
        </Modal>
      )}
    </div>
  );
}

export default Board;
