const optionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [...state, action.name];
    case 'REMOVE_OPTION':
      return state.filter(option => option !== action.name);
    case 'REMOVE_ALL_OPTIONS':
      return [];
    default:
      return state;
  }
};

export default optionsReducer;
