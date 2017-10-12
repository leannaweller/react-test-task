const items = (state = (JSON.parse(localStorage.getItem('data')) || []), action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ITEM':{
      const newState  = [
        ...state,
        {
          ...action.data
        }
      ];
      localStorage.setItem('data',JSON.stringify(newState));
      return newState;
    }

    case 'DELETE_ITEM':{
      const newState =  state.filter(item => item.id != action.id);
      localStorage.setItem('data',JSON.stringify(newState));
      return newState;
    }

    default:
      return state
  }
}

export default items;
