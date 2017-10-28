import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from 'router/router';


function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
    document.getElementById('app')
  );
}

renderWithHotReload(Router());

if (module.hot) {
  module.hot.accept('router/router', () => {
    const getRouter = require('router/router').default;
    renderWithHotReload(getRouter());
  });
}


ReactDom.render(<Router />, document.getElementById('app'));
