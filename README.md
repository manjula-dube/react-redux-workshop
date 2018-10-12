
## Configure store 

```
// lib imports
import { Provider } from 'react-redux'

// Code imports
import App from './App'
import configureStore from './store'

// configureStore , which encapsulates all reducers
const store = configureStore({})

// Wrap <Main /> Component inside the <Provider/>  to avail store to all child Components
ReactDOM.render( 
          <Provider store={store}>
                <App />
            </Provider>, 
    document.getElementById('root'))    
    
```  

In store/index.js create a store that will be used by the component

```
/**
 * Node module imports
 */
import { createStore } from 'redux'


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
        state // JSON data of the store which can be mapped to each reducer key name
    )

    // Store basically is object consisting various functionality like, getState(), replaceReducer() ... etc
    return store
}

```

#### Configure middlerware that intercepts actions dispatched and tracks the actions: (This is needed incase of thunk or sagas)

#### Create root reducer

```

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

```

Create actions 

```

export function setBusy(busy) {
  return {
    type : 'SET_BUSY',
    data : { 
      busy
    }
  }
}

export function storeResult(result) {
  return {
    type : 'STORE_RESULT',
    data : result
  }
}

```

#### Then page wise keep adding reducer

```
// Reducer for main page

export default function(state = {
  busy: false,
  repoDetails: null,
  history: []
}, action) {
    switch(action.type) {
        case 'SET_BUSY': 

            return {
              ...state,
              busy : action.data.busy
            }

        case 'STORE_RESULT': 

            return {
              ...state,
              repoDetails : action.data,
              history: [...state.history, action.data.userInfo]
            }
        
        default: 
            return state
    }
}

```

#### Make sure we have extension installed
