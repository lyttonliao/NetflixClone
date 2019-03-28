import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionsReducer from './sessions_reducer';
import entitiesReducer from './entities/entities_reducer';

const rootReducer = combineReducers ({
    entities: entitiesReducer,
    session: sessionsReducer,
    errors: errorsReducer
})

export default rootReducer;