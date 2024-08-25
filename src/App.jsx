import React from "react";
import DragApp from "../component/DragApp";
import { DragContext } from "../contexts/DragContext";
import { useDragValue } from "../hooks/useDragValue";

export default function App() {
  const dragValue1 = useDragValue();
  const dragValue2 = useDragValue();

  // 만약 필요하다면 isInvalid까지 외부에서 주입하여 서로 다른 invalid 로직을 처리하도록 할 수 있다.
  return (
    <div className="flex flex-col gap-20">
      <DragContext.Provider value={{ ...dragValue1 }}>
        <DragApp />
      </DragContext.Provider>

      <DragContext.Provider value={{ ...dragValue2 }}>
        <DragApp />
      </DragContext.Provider>
    </div>
  );
}
