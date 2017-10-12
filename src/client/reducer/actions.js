export const addItem = (data) => ({
  type: 'ADD_ITEM',
  data
});

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  id
})
