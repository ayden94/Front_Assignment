export const isInvalid = ({ source, destination, columns }) => {
  // droppable하지 않을 경우에 대한 예외 처리
  if (!destination) return true;

  //  같은 자리로 이동할 경우에 대한 예외 처리
  if (isSamePosition({ source, destination })) return false;

  // 요구사항 1. 첫 번째 칼럼에서 세 번째 칼럼으로 이동하는 것을 막는다.
  if (isMoveFirstToThird({ source, destination })) return true;

  // 짝수가 아닌 경우 얼리 리턴
  if (!isEvenItem({ source, columns })) return false;

  // 요구사항 2. 짝수 아이템은 다른 짝수 아이템 앞으로 이동할 수 없다.
  if (isMoveEvenItemForward({ source, destination, columns })) return true;

  return false;
};

function isSamePosition({ source, destination }) {
  return source.index === destination.index && source.droppableId === destination.droppableId;
}

function isMoveFirstToThird({ source, destination }) {
  return source.droppableId === "column1" && destination.droppableId === "column3";
}

function isEvenItem({ source, columns }) {
  return columns[source.droppableId][source.index]?.isEven;
}

function isMoveEvenItemForward({ source, destination, columns }) {
  const sourceColumn = columns[source.droppableId];
  const destinationColumn = columns[destination.droppableId];
  let destinationIndex = destination.index;

  if (source.droppableId === destination.droppableId && source.index < destination.index) destinationIndex += 1;

  if (sourceColumn[source.index].isEven && destinationColumn[destinationIndex]?.isEven) return true;
  else return false;
}
