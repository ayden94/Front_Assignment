export const getColumns = (value) => {
  const initialItems = Array.from({ length: value }, (v, k) => ({
    id: `item-${k}`,
    content: `item-${k}`,
    isEven: k % 2 === 0,
  }));

  const initialColumns = {
    column1: initialItems.slice(0, 5) ?? [],
    column2: initialItems.slice(5, 10) ?? [],
    column3: initialItems.slice(10, 15) ?? [],
    column4: initialItems.slice(15, 20) ?? [],
  };

  return initialColumns;
};
