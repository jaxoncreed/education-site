import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import assignmentList from './assignmentList';
import currentAssignment from './currentAssignment';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  assignmentList,
  currentAssignment
});
