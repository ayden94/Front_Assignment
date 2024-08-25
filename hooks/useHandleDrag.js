import { useCallback } from "react";
import { isMultiDrag } from "../util/isMultiDrag";
import { columnReorder } from "../util/columnReorder";
import { isInvalid } from "../business/isInvalid";
import { useContext } from "react";
import { DragContext } from "../contexts/DragContext";

export const useHandleDrag = () => {
  const { columns, setColumns, selectedList, setSelectedList, setIsDragging, setInvalidId } = useContext(DragContext);

  const onDragStart = useCallback((start) => {
    const id = start.draggableId;

    if (!selectedList.includes(id)) {
      setSelectedList([id]);
    }

    setIsDragging(true);
  });

  const onDragUpdate = useCallback((update) => {
    if (!isMultiDrag(selectedList) && isInvalid({ ...update, columns })) setInvalidId(update.draggableId);
    else setInvalidId("");
  });

  const onDragEnd = useCallback((result) => {
    setIsDragging(false);
    const { destination } = result;

    if (!isMultiDrag(selectedList) && isInvalid({ ...result, columns })) return setSelectedList([]);

    const newColumns = columnReorder({ columns, selectedList, destination });

    setColumns(newColumns);
    setInvalidId("");
    setSelectedList([]);
  });

  const onClickForMultiDrag = useCallback((id) => (event) => {
    event.preventDefault();

    if (event.ctrlKey || event.metaKey) {
      setSelectedList((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    } else {
      setSelectedList([id]);
    }
  });

  return { onDragStart, onDragUpdate, onDragEnd, onClickForMultiDrag };
};
