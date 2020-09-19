import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; // Storeを作成するための関数をインポート
import { Provider } from 'react-redux'; // 作成したStoreを全コンポーネントに渡すための機能を持つProviderという特殊なコンポーネントをインポート
import './index.css';
import reducer from './reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//App内の全てのStateを集約する
const store = createStore(reducer)


ReactDOM.render(
  // storeがアプリケーション内のどのコンポーネントからも参照できるようにする記述
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
