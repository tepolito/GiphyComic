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
  width: 120,
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {

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
    console.log(state,action)
        return {
          ...state,
          editing: false,
          cards: [...state.cards, {giph:state.giph, text:state.text}]
        };

    case 'EDIT':
        return {
          ...state,
          editing: true
        };

    case 'WIDTH':
    console.log(action);
        return{
          ...state,
          width: action.payload
        }

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
    console.log("the width is" + width);
    dispatch({type: "WIDTH", payload: width});
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
