
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer.js';
import citizenReducer from '../reducers/citizenReducer.js';
import partyReducer from '../reducers/partyReducer.js';
import candidateReducer from '../reducers/candidateReducer.js';
import castvoteReducer from '../reducers/castvoteReducer.js';
const configureStore=()=>{
    const store=createStore(combineReducers(
        {
            user:userReducer,
            citizen:citizenReducer,
            party:partyReducer,
            candidate:candidateReducer,
            castvote:castvoteReducer
        }
    ),applyMiddleware(thunk))
    return store
}

export default configureStore