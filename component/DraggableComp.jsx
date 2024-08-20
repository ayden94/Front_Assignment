import { Draggable } from "react-beautiful-dnd";
import React from "react";

export default function DraggableComp({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {item.content}
        </div>
      )}
    </Draggable>
  );
}
