import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, CHECKED_POST } from '../actions'

const INITIAL_STATE = { all: [], post: null, selected: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data }
    case FETCH_POST:
      return { ...state, post: action.payload.data }

    case CHECKED_POST:
      const { postId } = action.payload
      if (!_.includes(state.selected, postId)) {
        return { ...state, selected: [...state.selected, postId] }
      } else {
        const _selected = [...state.selected]
        const _removed = _selected.splice(_selected.indexOf(postId), 1)

        return {
          ...state,
          selected: _selected
        }
      }
  }
  return state
}
