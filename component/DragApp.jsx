import React, { useContext } from "react";
import { DragContext } from "../contexts/DragContext";
import { useHandleDrag } from "../hooks/useHandleDrag";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableComp from "./DroppableComp";
import DraggableComp from "./DraggableComp";

export default function DragApp() {
  const { columns } = useContext(DragContext);
  const { onDragStart, onDragUpdate, onDragEnd, onClickForMultiDrag } = useHandleDrag();

  return (
    <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {Object.entries(columns).map(([key, value]) => (
          <DroppableComp key={key} droppableId={key}>
            {value.map((item, index) => (
              <DraggableComp key={index} item={item} index={index} onClick={onClickForMultiDrag(item.id)} />
            ))}
          </DroppableComp>
        ))}
      </div>
    </DragDropContext>
  );
}
