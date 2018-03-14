import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';

export default combineReducers({
  router: routerReducer,
  counter
});

//gets rid of content editable error
console.error = (function() {
  var error = console.error

  return function(exception) {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
      error.apply(console, arguments)
    }
  }
})()
