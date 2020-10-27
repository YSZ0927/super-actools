import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import store from './store'
import BasicRouter from './routes'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={createBrowserHistory()}>
        <BasicRouter/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
