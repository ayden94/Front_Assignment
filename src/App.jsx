import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getItemStyle } from "../styles/getItemStyle";
import { getListStyle } from "../styles/getListStyle";
import { useItems } from "../hooks/useItems";
import { useDragEnd } from "../hooks/useDragEnd";

export default function App() {
  const [items, setItems] = useItems();
  const { onDragEnd } = useDragEnd({ items, setItems });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
