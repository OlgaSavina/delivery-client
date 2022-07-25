



const initState = {
  items: [],
};

const shop = (state = initState, action) => {
  
    if (action.type === 'SET_SHOP') {
      return {
        ...state,
        items: action.payload,
      };
    }
    return state;
  };
  
  export default shop;