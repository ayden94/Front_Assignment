import { useCallback } from "react";
import { columnReorder } from "../util/columnReorder";
import { isInvalid } from "../business/isInvalid";

export const useDragEnd = ({ columns, setColumns }) => {
  const onDragEnd = useCallback((result) => {
    if (isInvalid({ ...result, columns })) return;

    const newColumns = columnReorder({ ...result, columns });

    setColumns(newColumns);
  });

  return { onDragEnd };
};
