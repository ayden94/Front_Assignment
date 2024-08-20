export const getMovedItem = (source, columns) => {
  const sourceColumn = columns[source.droppableId];

  const [movedItem] = sourceColumn.splice(source.index, 1);

  return movedItem;
};
