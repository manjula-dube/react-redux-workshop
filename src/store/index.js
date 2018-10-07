/**
 * Node module imports
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

/**
 * File imports
 */
import combinedReducer from './combinedReducer'

/**
 * This function creates a redux store
 *
 * @param  {object} history Browser history object
 * @param  {object} state   Redux state
 * @return {Store}         Returns a redux store
 */
export default function(state = {}){

    let composeStore

    // state is empty here, in case of SSR, state will be available in `window` object
    // Each reducer will have data, which will be mapped against reducer key name
    const store = createStore(
        combinedReducer,
        state, // JSON data of the store which can be mapped to each reducer key name
        applyMiddleware(thunk)
    )

    // Store basically is object consisting various functionality like, getState(), replaceReducer() ... etc
    return store
}