import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './app.global.css';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();
const store = configureStore();

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
