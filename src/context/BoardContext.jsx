import { createContext, useState, useEffect } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  // ✅ Pehle Local Storage se data lo
  const getStoredColumns = () => {
    const storedColumns = localStorage.getItem("columns");
    return storedColumns ? JSON.parse(storedColumns) : [];
  };

  const [columns, setColumns] = useState(getStoredColumns);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  const addColumn = (columnName) => {
    const newColumns = [...columns, { name: columnName, cards: [] }];
    setColumns(newColumns);
  };

  const addCard = (columnName, cardName) => {
    const updatedColumns = columns.map((col) =>
      col.name === columnName ? { ...col, cards: [...col.cards, cardName] } : col
    );
    setColumns(updatedColumns);
  };

  return (
    <BoardContext.Provider value={{ columns, addColumn, addCard }}>
      {children}
    </BoardContext.Provider>
  );
};
