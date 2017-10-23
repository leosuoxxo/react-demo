import React from 'react';
import ReactDom from 'react-dom';
import {
  AppContainer
} from 'react-hot-loader';
import Router from 'router/router';


renderWithHotReload(Router());

if (module.hot) {
  module.hot.accept('router/router', () => {
    const getRouter = require('router/router').default;
    renderWithHotReload(Router());
  });

}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
            {RootElement}
        </AppContainer>,
    document.getElementById('app')
  )
}


ReactDom.render(
  <Router></Router>, document.getElementById('app'))
