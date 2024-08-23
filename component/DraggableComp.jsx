import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { useInvalid } from "../hooks/globalState/useInvalid";

export default function DraggableComp({ item, index }) {
  const [invalid] = useInvalid();

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={`${
            snapshot.isDragging ? (invalid === item.id ? "bg-red-500" : "bg-green-400") : "hover:bg-gray-300"
          } p-2 rounded-md`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
}
