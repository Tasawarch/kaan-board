import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout"
import Board from "./Board";
import Home from "./Home";
import About from "./About";
import { BoardProvider } from "../context/BoardContext";
import NotFound from "./NotFound";
import ColumnForm from "./ColumnForm";
import CardForm from "./CardForm";

function AppRoutes() {
  return (
    <BrowserRouter>
      <BoardProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<ColumnForm />} />  
            <Route path="cardform" element={<CardForm />} />
            <Route path="board" element={<Board />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
         
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BoardProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;