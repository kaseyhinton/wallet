import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './app.global.css';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();
const initialState = {
  counter: 0,
  router: null,
  accounts: [
    { name: 'First Bank', type: 'Checking', balance: 3500},
    { name: 'First Bank', type: 'Savings', balance: 5250},
    { name: 'Official Retirement', type: 'Retirement', balance: 135000}
    ]
}
const store = configureStore(initialState);

render(
  <Fabric>
  <link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/9.3.0/css/fabric.min.css" />
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>
  </Fabric>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
