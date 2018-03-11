/*export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT'; */

var giphy = require('giphy-api')('rNq8FtmogPXR2ZuiSwncKoSAcTbDVQii');

const initialState = {
/*  count: 0,
  isIncrementing: false,
  isDecrementing: false, */
  giphs: [],
  giph: '',
  editing: true,
  text: 'enter text for giph',
  width: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
  /*  case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };*/

    case 'GIPH':
      return {
        ...state,
        giphs: action.payload
      };

    case 'SELECT':
      return {
        ...state,
        giph: action.payload
      };

    case 'SAVE':
        return {
          ...state,
          editing: false
        };

    case 'EDIT':
        return {
          ...state,
          editing: true
        };

    default:
      return state;
  }
};

export const searchGiphs = entry => {
  return dispatch => {
    console.log(entry);
    giphy.search(entry).then(function(res) {
      // Res contains gif data!
      console.log(res);
      dispatch({ type: 'GIPH', payload: res.data });
    });
  };
};

export const selectGiph = giph =>
{
  return dispatch =>
  {
    console.log(giph);
    dispatch({type: "SELECT", payload: giph});
  }
}

export const setWidth = width =>
{
  return dispatch =>
  {
    console.log(width);
  //  dispatch({type: "SELECT", payload: giph});
  }
}

export const save = () =>
{
  return dispatch =>
  {
    console.log('saving');
    dispatch({type:'SAVE'})
  }
}

export const edit = () =>
{
  return dispatch =>
  {
    console.log('editing');
    dispatch({type:'EDIT'})
  }
}


/*
export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
}; */
