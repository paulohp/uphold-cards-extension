import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';

export default function configStore (initalState) {
  return createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )

  );
}