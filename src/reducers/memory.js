import { APP_STARTED } from '../actions'

const INIT_STATE = { app_started: false }

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case APP_STARTED:
      return { ...state, app_started: true }

    default:
      return state
  }
}
