export const addItem = (data) => ({
  type: 'ADD_ITEM',
  data
});

export const deleteItem = (uid) => ({
  type: 'DELETE_ITEM',
  uid
})
