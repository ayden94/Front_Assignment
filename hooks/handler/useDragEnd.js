import { useCallback } from "react";
import { columnReorder } from "../../util/columnReorder";
import { isInvalid } from "../../business/isInvalid";
import { useColumns } from "../globalState/useColumns";
import { useIsDragging } from "../globalState/useIsDragging";
import { useSelectedList } from "../globalState/useSelectedList";
import { isMultiDrag } from "../../util/isMultiDrag";

export const useDragEnd = () => {
  const [columns, setColumns] = useColumns();
  const [_, setIsDragging] = useIsDragging();
  const [selectedList, setSelectedList] = useSelectedList();

  const onDragEnd = useCallback((result) => {
    setIsDragging(false);

    if (isMultiDrag(selectedList) && isInvalid({ ...result, columns })) return;

    const newColumns = columnReorder({ ...result, columns });

    setColumns(newColumns);
    setSelectedList([]);
  });

  return { onDragEnd };
};
