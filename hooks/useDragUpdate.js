import { useCallback } from "react";
import { isInvalid } from "../business/isInvalid";
import { useInvalid } from "./useInvalid";
import { useColumns } from "./useColumns";

export const useDragUpdate = () => {
  const [columns] = useColumns();
  const [_, setInvalid] = useInvalid();

  const onDragUpdate = useCallback((update) => {
    if (isInvalid({ ...update, columns })) setInvalid(update.source.index);
    else setInvalid(null);
  });

  return { onDragUpdate };
};
