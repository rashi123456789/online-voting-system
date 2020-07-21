
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer.js';
import citizenReducer from '../reducers/citizenReducer.js';
const configureStore=()=>{
    const store=createStore(combineReducers(
        {
            user:userReducer,
            citizen:citizenReducer
        }
    ),applyMiddleware(thunk))
    return store
}

export default configureStore