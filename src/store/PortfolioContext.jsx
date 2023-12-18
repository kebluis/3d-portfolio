import { createContext, useCallback, useReducer } from "react";
import portfolioReducer from "./portfolioReducer";

export const PortfolioContext = createContext();

export const PortfolioState = ({ children }) => {
  const initialState = {
    scrollY: 0,
    isSubmitted: false,
    isSent: false,
  };

  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  const recordScrollY = useCallback((data) => {
    dispatch({
      type: "record_scroll_y",
      payload: data,
    });
  }, []);

  const changeIsSubmitted = useCallback((data) => {
    dispatch({
      type: "change_is_submitted",
      payload: data,
    });
  }, []);

  const changeIsSent = useCallback((data) => {
    dispatch({
      type: "change_is_sent",
      payload: data,
    });
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        scrollY: state.scrollY,
        isSubmitted: state.isSubmitted,
        isSent: state.isSent,
        recordScrollY,
        changeIsSubmitted,
        changeIsSent,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
