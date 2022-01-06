import { combineReducers } from 'redux'

import navigation from './navigation'
import risk from './risk'
import route from './route'

export default combineReducers({
  navigation,
  risk,
  route,
})
