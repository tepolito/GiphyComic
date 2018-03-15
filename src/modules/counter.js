var giphy = require('giphy-api')('rNq8FtmogPXR2ZuiSwncKoSAcTbDVQii');

const initialState = {
  giphs: [],
  giph: '',
  editing: true,
  text: 'enter text for giph',
  width: 120,
  cards: [],
  id: 0
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
        giph: action.payload,
        id: action.id
      };

    case 'SAVE':
    console.log(action.id)
    let newCards = state.cards;

    if(newCards[action.id])
    {
      newCards[action.id] = {giph:state.giph, id:state.id, text:state.text}
    }
    else
    {
      newCards.push({giph:state.giph, id:state.id, text:state.text})
    }
        return {
          ...state,
          editing: false,
          cards: newCards
          // cards: [...state.cards, {giph:state.giph, id:state.id, text:state.text}]
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
    giphy.search({q: entry, limit: 3}).then(function(res) {
      // Res contains gif data!
  //    console.log(res);
      dispatch({ type: 'GIPH', payload: res.data });
    });
  };
};

export const selectGiph = (giph, i) =>
{
  return dispatch =>
  {
    console.log(giph, i);
    dispatch({type: "SELECT", payload: giph.embed_url, id: i});
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

export const save = (id) =>
{
  console.log(id)
  return dispatch =>
  {
    console.log('saving');
    dispatch({type:'SAVE', id: id})
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
