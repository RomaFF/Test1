import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import defaultData from '../reducers/defaultData'
import filteredData from '../reducers/filteredData'

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = createStore(
    combineReducers({defaultData, filteredData}),
    compose(applyMiddleware(ReduxThunk))
)

export default store;

