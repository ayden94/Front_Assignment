import { useCallback } from "react";
import { columnReorder } from "../util/columnReorder";
import { isInvalid } from "../business/isInvalid";
import { useColumns } from "./globalState/useColumns";

export const useDragEnd = () => {
  const [columns, setColumns] = useColumns();

  const onDragEnd = useCallback((result) => {
    if (isInvalid({ ...result, columns })) return;

    const newColumns = columnReorder({ ...result, columns });

    setColumns(newColumns);
  });

  return { onDragEnd };
};
