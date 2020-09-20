import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // Storeを作成するための関数をインポート
import { Provider } from 'react-redux'; // 作成したStoreを全コンポーネントに渡すための機能を持つProviderという特殊なコンポーネントをインポート
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import * as serviceWorker from './serviceWorker';

//App内の全てのStateを集約する
const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  // storeがアプリケーション内のどのコンポーネントからも参照できるようにする記述
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exacr path="/events/new" component={EventsNew} />
      <Route exacr path="/" component={EventsIndex} />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
