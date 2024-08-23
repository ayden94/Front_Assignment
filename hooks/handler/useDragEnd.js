import { useCallback } from "react";
import { columnReorder } from "../../util/columnReorder";
import { isInvalid } from "../../business/isInvalid";
import { useColumns } from "../globalState/useColumns";
import { useIsDragging } from "../globalState/useIsDragging";

export const useDragEnd = () => {
  const [columns, setColumns] = useColumns();
  const [_, setIsDragging] = useIsDragging();

  const onDragEnd = useCallback((result) => {
    setIsDragging(false);

    if (isInvalid({ ...result, columns })) return;

    const newColumns = columnReorder({ ...result, columns });

    setColumns(newColumns);
  });

  return { onDragEnd };
};
