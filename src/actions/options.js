const addOption = optionName => {
  return {
    type: 'ADD_OPTION',
    name: optionName
  };
};

const removeOption = (optionName) => {
  return {
    type: 'REMOVE_OPTION',
    name: optionName
  }
}

const removeAllOptions = () => {
  return {
    type: 'REMOVE_ALL_OPTIONS'
  }
}

export { addOption, removeOption, removeAllOptions };