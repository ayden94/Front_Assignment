import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useColumns } from "../hooks/useColumns";
import { useDragEnd } from "../hooks/useDragEnd";
import { useDragUpdate } from "../hooks/useDragUpdate";
import DraggableComp from "../component/DraggableComp";
import { useInvalid } from "../hooks/useInvalid";

export default function App() {
  const [columns, setColumns] = useColumns();
  const [invalid, setInvalid] = useInvalid();
  const { onDragEnd } = useDragEnd({ columns, setColumns });
  const { onDragUpdate } = useDragUpdate({ columns, setInvalid });

  return (
    <div style={{ display: "flex", gap: "4rem" }}>
      <DragDropContext onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([key, value]) => {
          return (
            <Droppable key={key} droppableId={key}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {value.map((item, index) => (
                    <DraggableComp key={index} item={item} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}
