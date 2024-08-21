import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useColumns } from "../hooks/useColumns";
import { useDragEnd } from "../hooks/useDragEnd";
import { useDragUpdate } from "../hooks/useDragUpdate";
import DraggableComp from "../component/DraggableComp";
import DroppableComp from "../component/DroppableComp";

export default function App() {
  const [columns] = useColumns();
  const { onDragEnd } = useDragEnd();
  const { onDragUpdate } = useDragUpdate();

  return (
    <DragDropContext onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {Object.entries(columns).map(([key, value]) => (
          <DroppableComp key={key} droppableId={key}>
            {value.map((item, index) => (
              <DraggableComp key={index} item={item} index={index} />
            ))}
          </DroppableComp>
        ))}
      </div>
    </DragDropContext>
  );
}
