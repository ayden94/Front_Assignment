import { Draggable } from "react-beautiful-dnd";
import React from "react";
import { useInvalid } from "../hooks/useInvalid";

export default function DraggableComp({ item, index }) {
  const [invalid] = useInvalid();

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? (invalid === index ? "bg-red-500" : "bg-green-400") : "hover:bg-gray-300"
          } p-2 rounded-md`}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
}
