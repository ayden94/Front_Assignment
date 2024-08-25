import React from "react";
import { useState } from "react";
import { getColumns } from "../util/getColumns";
import { DragContext } from "../contexts/DragContext";
import DragApp from "../component/DragApp";

export default function App() {
  const [columns, setColumns] = useState(getColumns(20));
  const [isDragging, setIsDragging] = useState(false);
  const [invalidId, setInvalidId] = useState("");
  const [selectedList, setSelectedList] = useState([]);

  return (
    <DragContext.Provider
      value={{ columns, setColumns, isDragging, setIsDragging, invalidId, setInvalidId, selectedList, setSelectedList }}
    >
      <DragApp />
    </DragContext.Provider>
  );
}
