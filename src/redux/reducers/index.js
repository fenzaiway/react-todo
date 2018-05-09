import {combineReducers} from 'redux'

import todos from './todo'
import bmob from './bmob'

export default combineReducers({
    todos,
    bmob
})