const scrollReducer = (state, action) => {
  switch (action.type) {
    case "record_scroll_y":
      return {
        ...state,
        scrollY: action.payload,
      };
    default:
      return state;
  }
};

export default scrollReducer;
