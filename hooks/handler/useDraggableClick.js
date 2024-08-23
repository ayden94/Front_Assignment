import { useSelectedList } from "../globalState/useSelectedList";

export const useDraggableClick = () => {
  const [_, setSelectedList] = useSelectedList();

  const onDraggableClick = (id) => (event) => {
    event.preventDefault();

    if (event.ctrlKey || event.metaKey) {
      setSelectedList((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    } else {
      setSelectedList([id]);
    }
  };

  return { onDraggableClick };
};
