import {createStore,combineReducers,applyMiddleware} from 'redux'
import data from './reducer'
import thunk from 'redux-thunk'
export default createStore(combineReducers(data),applyMiddleware(thunk))