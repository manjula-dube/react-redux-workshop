
#### Configure store 

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

#### Configure middlerware that intercepts actions dispatched and tracks the actions

#### Create root reducer

#### Then page wise keep adding reducer

#### Make sure we have extension installed
