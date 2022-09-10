const initState = {
  item: {},
};

const shop = (state = initState, action) => {
  if (action.type === "SET_SHOP") {
    return {
      ...state,
      item: action.payload,
    };
  }
  return state;
};

export default shop;
