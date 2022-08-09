import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session'

//this is creating the state
export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
});
