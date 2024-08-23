import { useCallback } from "react";
import { useIsDragging } from "../globalState/useIsDragging";
import { useSelectedList } from "../globalState/useSelectedList";

export const useDragStart = () => {
  const [_, setIsDragging] = useIsDragging();
  const [selectedList, setSelectedList] = useSelectedList();

  const onDragStart = useCallback((start) => {
    const id = start.draggableId;

    if (!selectedList.includes(id)) {
      setSelectedList([id]);
    }

    setIsDragging(true);
  });

  return { onDragStart };
};
