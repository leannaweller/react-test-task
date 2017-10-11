import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import reducer from './reducer';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
  combineReducers({
    items:reducer
  })
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
