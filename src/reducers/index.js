const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      if (state[action.item.id]) {
        return {
          ...state,
          [action.item.id]: {
            ...state[action.item.id],
            quantity: state[action.item.id].quantity + 1,
          },
        };
      } else {
        return {
          ...state,
          [action.item.id]: {
            ...action.item,
            quantity: 1,
          },
        };
      }
    }
    case "REMOVE_ITEM": {
      const copy = createCopy(state);
      delete copy[action.item.id];
      return { ...copy };
    }
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...state[action.item.id],
          quantity: action.quantity,
        },
      };
    }
    case "CLEAR_CART": {
      const copy = createCopy();
      let k;
      for (k in Object.keys(copy)) {
        delete copy[k];
      }
      return { ...copy };
    }
    default:
      return state;
  }
}
const createCopy = (state) => {
  return { ...state };
};

export const getStoreItemArray = (state) => Object.values(state);
