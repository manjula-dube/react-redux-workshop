import { combineReducers } from 'redux'

// App consists many pages and hence have multiple reducers/data-stores
// All they need to be combined in single reducer/data-store
import home from './home'
// Add here it is needed

const initialReducer = {
    home
}

// Combine all reducers using redux API
export default combineReducers(initialReducer)