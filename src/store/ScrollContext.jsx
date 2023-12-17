import { createContext, useCallback, useReducer } from "react";
import scrollReducer from "./scrollReducer";

export const ScrollContext = createContext();

export const ScrollState = ({ children }) => {
  const initialState = {
    scrollY: 0,
  };

  const [state, dispatch] = useReducer(scrollReducer, initialState);

  const recordScrollY = useCallback((data) => {
    dispatch({
      type: "record_scroll_y",
      payload: data,
    });
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        scrollY: state.scrollY,
        recordScrollY,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
