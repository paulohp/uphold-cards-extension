import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configStore from './store/configStore';

import App from './components/app/App';
import {loadCards} from './actions/cardActions';

const store = configStore();


store.dispatch(loadCards());

render(
    <Provider store={store}><App /></Provider>
  , document.getElementById('app'));