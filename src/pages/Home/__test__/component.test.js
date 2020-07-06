import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../index';
import { INITIAL_STATE } from '../../../state/redux/reducer';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('Home Page should renders with a fake store', async () => {
  const div = document.createElement('div');

  const store = mockStore(INITIAL_STATE);

  await act(async () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
      div,
    );
  });

  ReactDOM.unmountComponentAtNode(div);
});
