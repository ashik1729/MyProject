import { combineReducers } from 'redux';
import postsReducer from '../reducers/postsReducers'; // Correct import statement

const rootReducer = combineReducers({
  posts: postsReducer,
  // Add other reducers here if you have them
});

export default rootReducer;