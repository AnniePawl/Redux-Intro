import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import Counter from './Counter'
const store = createStore(reducers)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Counter />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
