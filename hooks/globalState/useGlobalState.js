import { createContext, useContext, useSyncExternalStore } from "react";

export const useGlobalState = (initValue) => {
  const createBoard = (initState) => {
    let store = initState;
    const callbacks = new Set();
    const getStore = () => store;
    const setStore = (nextState) => {
      store = typeof nextState === "function" ? nextState(store) : nextState;
      callbacks.forEach((callback) => callback());
    };

    const subscribe = (callback) => {
      callbacks.add(callback);

      return () => {
        callbacks.delete(callback);
      };
    };

    return { getStore, setStore, subscribe };
  };

  const contextedState = createContext(createBoard(initValue));

  function useStore() {
    const { getStore, setStore, subscribe } = useContext(contextedState);

    const store = useSyncExternalStore(subscribe, () => getStore());

    return [store, setStore];
  }

  return useStore;
};
