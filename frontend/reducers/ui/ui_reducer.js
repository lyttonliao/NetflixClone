import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import currentSearchReducer from './current_search_reducer'

const uiReducer = combineReducers({
    search: searchReducer,
    current_search: currentSearchReducer
})

export default uiReducer;