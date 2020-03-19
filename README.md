# Redux example setup (using hooks)
## Documentation
**Redux:**  
https://redux.js.org/  
**React-Redux:**  
https://react-redux.js.org/  
https://github.com/reduxjs/react-redux

## Folder structure
* src/
  * actions/
    * index.js
  * reducers/
    * counter.js
    * index.js
    * isLogged.js  
  * App.js
  * index.js


## Terminology
**Store** - Holds the global state  
``` javascript
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers"; // see: reducers
import { Provider } from "react-redux"; // see: provider

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

**Actions** - Object with type of action and optional payload. Describes an *intention* to mutate the state.
``` javascript
// src/actions/index.js
export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}
```

**Reducers** - '*A function that accepts an accumulation and a value and returns a new accumulation*'. Note: do not put API calls into reducers.

``` javascript
// src/reducers/counter.js
const initialState = 0;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'INCREMENT':
            return state + payload
        case 'DECREMENT':
            return state - payload
        default:
            return state
    }
}
```

``` javascript
// src/reducers/index.js

// import all reducers here to be combined
import counter from './counter';
import isLogged from './isLogged';
import {combineReducers} from 'redux';

// these will become the names of each state item
const allReducers = combineReducers({
    counter,
    isUserLoggedIn: isLogged    //alternative way to rename state item if necessary
})

export default allReducers;
```

Note that the '*isLogged*' reducer is not shown for simplicity. Know however that the default state for this reducer is '*false*' in this example.

**Provider** -  Part of 'react-redux' used to wrap the necessary components. See 'store' example for usage.

**Selector** - *"Allows you to extract data from the Redux store state, using a selector function."*  

**Dispatch** - *"This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed."*

``` javascript
import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const incAmount = 5;

  return (
    <div className="App">
      Hello
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(incAmount))}>+</button>
      <button onClick={() => dispatch(decrement(incAmount))}>-</button>
      {isLogged && <h3>Valuable info for secret eyes</h3>}
    </div>
  );
}

export default App;

```