import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { useInvalid } from "../hooks/globalState/useInvalid";
import { useSelectedList } from "../hooks/globalState/useSelectedList";
import { useIsDragging } from "../hooks/globalState/useIsDragging";
import { isMultiDrag } from "../util/isMultiDrag";

export default function DraggableComp({ item, index, onClick }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          onClick={onClick}
          ref={provided.innerRef}
          className={`${getBackgroundColor(snapshot, item.id)} p-2 rounded-md`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
}

const getBackgroundColor = (snapshot, itemId) => {
  const [invalid] = useInvalid();
  const [selectedList] = useSelectedList();
  const [isDragging] = useIsDragging();

  if (!isMultiDrag(selectedList) && snapshot.isDragging) {
    if (invalid === itemId) return "bg-red-500";
    else return "bg-green-400";
  }

  if (selectedList.includes(itemId)) {
    if (isDragging) return "bg-blue-200";
    else return "bg-blue-400";
  }

  return "hover:bg-gray-300";
};
