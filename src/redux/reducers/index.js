/**
 * Created by brendaortega on 14/01/18.
 */
import {combineReducers} from 'redux';
import userReducer from './userReducer';
import bootcampReducer from '../ducks/bootcamps'

export default combineReducers({
    user:userReducer,
    bootcamps: bootcampReducer
});