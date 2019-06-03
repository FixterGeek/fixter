/**
 * Created by brendaortega on 14/01/18.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers(
        applyMiddleware(thunk)
        )
    );
};

export default configureStore;
