export const changeText = text => {
  return {
    type: 'INPUT_CHANGE',
    payload: text,
  };
};

export const submitText = text => {
  return {
    type: 'INPUT_SUBMIT',
    payload: text,
  };
};
