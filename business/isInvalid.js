export const isInvalid = ({ source, destination, columns }) => {
  // droppable하지 않을 경우에 대한 예외 처리
  if (!destination) return true;

  const sourceId = source.droppableId;
  const destinationId = destination.droppableId;
  const sourceColumn = columns[sourceId];
  const destinationColumn = columns[destinationId];

  //  같은 자리로 이동할 경우에 대한 예외 처리
  if (source.index === destination.index && sourceId === destinationId) return false;

  // 첫 번째 칼럼에서 세 번째 칼럼으로 이동하는 것을 막는다.
  if (sourceId === "column1" && destinationId === "column3") return true;

  // 같은 컬럼일 때를 확인하여 로직을 다르게 가져가도록 한다
  // 젠장 같은 컬럼일 때도 로직이 다르다니
  if (sourceId === destinationId) {
    if (sourceColumn[source.index].isEven && !destinationColumn[destination.index]?.isEven) return true;
  } else {
    if (sourceColumn[source.index].isEven && destinationColumn[destination.index]?.isEven) return true;
  }

  return false;
};
