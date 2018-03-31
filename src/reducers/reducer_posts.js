import _ from 'lodash'
import { FETCH_POSTS, FETCH_POST, CHECKED_POST } from '../actions'

const INITIAL_STATE = { all: {}, post: null, selectedPostIds: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: _.mapKeys(action.payload.data, 'id') }
    case FETCH_POST:
      return { ...state, post: action.payload.data }

    case CHECKED_POST:
      const { postId } = action.payload
      if (!state.selectedPostIds.includes(postId)) {
        return { ...state, selectedPostIds: [...state.selectedPostIds, postId] }
      } else {
        const _selected = [...state.selectedPostIds]
        const _removed = _selected.splice(_selected.indexOf(postId), 1)

        return {
          ...state,
          selectedPostIds: _selected
        }
      }
  }
  return state
}
