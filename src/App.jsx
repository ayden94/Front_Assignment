import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useColumns } from "../hooks/globalState/useColumns";
import { useDragEnd } from "../hooks/handler/useDragEnd";
import { useDragUpdate } from "../hooks/handler/useDragUpdate";
import DraggableComp from "../component/DraggableComp";
import DroppableComp from "../component/DroppableComp";
import { useDragStart } from "../hooks/handler/useDragStart";
import { useDraggableClick } from "../hooks/handler/useDraggableClick";

export default function App() {
  const [columns] = useColumns();
  const { onDragStart } = useDragStart();
  const { onDragEnd } = useDragEnd();
  const { onDragUpdate } = useDragUpdate();
  const { onDraggableClick } = useDraggableClick();

  return (
    <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {Object.entries(columns).map(([key, value]) => (
          <DroppableComp key={key} droppableId={key}>
            {value.map((item, index) => (
              <DraggableComp key={index} item={item} index={index} onClick={onDraggableClick(item.id)} />
            ))}
          </DroppableComp>
        ))}
      </div>
    </DragDropContext>
  );
}
