import yelp from '../api/yelp';

export const changeText = text => {
  return {
    type: 'INPUT_CHANGE',
    payload: text,
  };
};

export const submitText = text => {
  return async dispatch => {
    const response = await yelp.get('/search', {
      params: {
        term: text,
        limit: 50,
        location: 'san jose',
      },
    });
    dispatch({
      type: 'INPUT_SUBMIT',
      payload: response.data.businesses,
    });
  };
};
