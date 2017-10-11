const items = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          ...action.data
        }
      ]
    case 'DELETE_ITEM':
      return state.filter(item => item.uid != action.uid)
    default:
      return state
  }
}

export default items;
