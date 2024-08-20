import { getMovedItem } from "./getMovedItem";

export const columnReorder = ({ columns, source, destination }) => {
  const newColumns = { ...columns };

  // newColumns 메모리 주소에 대한 splice가 진행된다.
  const movedItem = getMovedItem(source, newColumns);
  newColumns[destination.droppableId].splice(destination.index, 0, movedItem);

  return newColumns;
};
