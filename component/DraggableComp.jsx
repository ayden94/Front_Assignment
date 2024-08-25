import { Draggable } from "react-beautiful-dnd";
import React, { useContext } from "react";
import { isMultiDrag } from "../util/isMultiDrag";
import { DragContext } from "../contexts/DragContext";

export default function DraggableComp({ item, index, onClick }) {
  const { invalidId, selectedList, isDragging } = useContext(DragContext);

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          onClick={onClick}
          ref={provided.innerRef}
          className={`${getBackgroundColor({
            snapshot,
            itemId: item.id,
            invalidId,
            selectedList,
            isDragging,
          })} p-2 rounded-md relative`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
          {isMultiDrag(selectedList) && snapshot.isDragging ? (
            <div className="absolute rounded-full text-gray-900 bg-green-400 text-xs -top-2 -right-2 w-6 h-6 flex items-center justify-center">
              {selectedList.length}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </Draggable>
  );
}

const getBackgroundColor = ({ snapshot, itemId, invalidId, selectedList, isDragging }) => {
  if (!isMultiDrag(selectedList) && snapshot.isDragging) {
    if (invalidId === itemId) return "bg-red-500";
    else return "bg-green-400";
  }

  if (selectedList.includes(itemId)) {
    if (isDragging) return "bg-blue-200";
    else return "bg-blue-400";
  }

  return "hover:bg-gray-300";
};
