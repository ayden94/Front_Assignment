export const getColumns = (value) => {
  const initialItems = Array.from({ length: value }, (v, k) => ({
    id: `item-${k}`,
    content: `item-${k}`,
    isEven: k % 2 === 0,
  }));

  const initialColumns = {
    column1: initialItems,
    column2: [],
    column3: [],
    column4: [],
  };

  return initialColumns;
};
