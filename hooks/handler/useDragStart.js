import { useCallback } from "react";
import { useIsDragging } from "../globalState/useIsDragging";

export const useDragStart = () => {
  const [_, setIsDragging] = useIsDragging();

  const onDragStart = useCallback((start) => {
    setIsDragging(true);
  });

  return { onDragStart };
};
