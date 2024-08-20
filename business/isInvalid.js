export const isInvalid = ({ source, destination, columns }) => {
  // droppable하지 않을 경우에 대한 예외 처리
  if (!destination) return true;

  const sourceColumn = columns[source.droppableId];
  const destinationColumn = columns[destination.droppableId];

  // 첫 번째 칼럼에서 세 번째 칼럼으로 이동하는 것을 막는다.
  if (source.droppableId === "column1" && destination.droppableId === "column3") return true;

  // 짝수 아이템의 이동을 제한한다.
  if (sourceColumn[source.index].isEven && destinationColumn[destination.index]?.isEven) return true;

  return false;
};
