import { Droppable } from "react-beautiful-dnd";
import React from "react";

export default function DroppableComp({ droppableId, children }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div className="bg-gray-400 rounded-md p-4 min-h-80" {...provided.droppableProps} ref={provided.innerRef}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
