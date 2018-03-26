var giphy = require('giphy-api')('rNq8FtmogPXR2ZuiSwncKoSAcTbDVQii');

const initialState = {
  giphs: [],
  giph: '',
  editing: true,
  text: 'enter text for giph',
  cards: [],
  id: 0,
  editingCard: null
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
    console.log(action, state)
    let newCards = state.cards;

    if(newCards[action.id])
    {
      newCards[action.id] = {giph:state.giph, id:state.id, text:action.text}
    }
    else
    {
      newCards.push({giph:state.giph, id:state.id, text:action.text})
    }
        return {
          ...state,
          editing:false,
          cards: newCards
          // cards: [...state.cards, {giph:state.giph, id:state.id, text:state.text}]
        };

    case 'EDIT':

        return {
          ...state,
          editing: true
        };

    case 'SELECT_CARD':
    console.log(action, state, this);
        return{
          ...state,
          editingCard: action.id === state.editingCard ? null : action.id
        };

    case 'HANDLE_CHANGE':
        return{
          ...state,
          editingText: action.value
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

export const save = (id, text) =>
{
  console.log("saving id " + id)
  return dispatch =>
  {
    console.log('saving');
    dispatch({type:'SAVE', id: id, text: text})
  }
}

export const edit = (id) =>
{
  console.log('edit id' + id)
  return dispatch =>
  {
    console.log('editing id' + id);
    dispatch({type:'EDIT', id: id})
  }
}

export const selectCard = (id) =>
{
  console.log('selectCard id ' + id);
  return dispatch =>
  {
    dispatch({type: 'SELECT_CARD', id: id});
  }
}

export const handleChange = (event) =>
{
    return dispatch =>
    {
      dispatch({type: "HANDLE_CHANGE", value: event.target.value});
  }
}
