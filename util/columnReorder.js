export const columnReorder = ({ columns, selectedList, destination }) => {
  const newColumns = { ...columns };

  const movedList = [];

  // TODO: electedLists에 들어간 순서대로 아이템을 제거할 것인지 아니면 columns의 순서대로 제거할 것인지 논의 필요
  // 일단은 columns의 순서대로 제거하도록 구현
  Object.values(newColumns).forEach((column) => {
    // splice의 인덱스 당겨짐 문제를 해결하기 위해
    // 인덱스의 역순으로 순회하며 아이템 제거
    for (let i = column.length - 1; i >= 0; i--) {
      const item = column[i];

      if (selectedList.includes(item.id)) {
        movedList.push(item);
        column.splice(i, 1);
      }
    }
  });

  // 드래그한 아이템을 목적지에 삽입
  // 역순으로 제거된 아이템을 reverse를 사용해 원래 순서를 유지
  newColumns[destination.droppableId].splice(destination.index, 0, ...movedList.reverse());

  return newColumns;
};
