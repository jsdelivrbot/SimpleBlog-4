import { combineReducers } from 'redux'
import PostsReducer from './reducer_posts'
import MemoryReducer from './memory'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  memory: MemoryReducer
})

export default rootReducer
