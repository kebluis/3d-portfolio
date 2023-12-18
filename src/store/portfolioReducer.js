const portfolioReducer = (state, action) => {
  switch (action.type) {
    case "record_scroll_y":
      return {
        ...state,
        scrollY: action.payload,
      };

    case "change_is_submitted":
      return {
        ...state,
        isSubmitted: action.payload,
      };

    case "change_is_sent":
      return {
        ...state,
        isSent: action.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
