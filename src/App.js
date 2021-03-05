import React from 'react'
import './App.scss';
import { Provider } from 'react-redux'
import store from './store/store'
import { RouterApp } from './Router/router';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterApp />
      </Provider>
    )
  }
}


export default App;
