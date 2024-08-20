import { useCallback } from "react";
import { isInvalid } from "../business/isInvalid";

export const useDragUpdate = ({ columns, setInvalid }) => {
  const onDragUpdate = useCallback((update) => {
    if (isInvalid({ ...update, columns })) setInvalid(true);
    else setInvalid(false);
  });

  return { onDragUpdate };
};
