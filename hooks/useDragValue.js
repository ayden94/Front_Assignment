import { useState } from "react";
import { getColumns } from "../util/getColumns";

export const useDragValue = () => {
  const [columns, setColumns] = useState(getColumns(20));
  const [isDragging, setIsDragging] = useState(false);
  const [invalidId, setInvalidId] = useState("");
  const [selectedList, setSelectedList] = useState([]);

  return {
    columns,
    setColumns,
    isDragging,
    setIsDragging,
    invalidId,
    setInvalidId,
    selectedList,
    setSelectedList,
  };
};
