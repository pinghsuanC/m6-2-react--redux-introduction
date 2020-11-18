export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});
export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});
export const updateQuantity = (item, quantity) => ({
  type: "UPDATE_QUANTITY",
  item: item,
  quantity: quantity,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const updateTax = () => {};
