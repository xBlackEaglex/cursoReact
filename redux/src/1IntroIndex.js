import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createStore } from 'redux'
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore((state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
      case 'incrementar': {
        return state + 1
      }

      case 'decrementar': {
        return state - 1
      }

      case 'set': {
        return action.payload
      }

      default: {
        return state
      }
  }
})

console.log(store.getState());
store.dispatch({ type: 'lala'})
console.log(store.getState());
store.dispatch({ type: 'incrementar'})
console.log(store.getState());
store.dispatch({ type: 'decrementar'})
console.log(store.getState());
store.dispatch({ type: 'set', payload: 15})
console.log(store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
