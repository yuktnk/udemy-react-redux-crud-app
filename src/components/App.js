import React, { Component }from 'react';
// connect関数のimport
// 今まで作成したStateやActionと、コンポーネントとの関連付けを行って、
// ViewのEventで状態を遷移させて、遷移後の状態を画面に再描画する。
import { connect } from 'react-redux';

// ActionCreatorをimportする
import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props  // 状態やActionを渡すため変数に入れる？
    return(
      <React.Fragment>
        {/* reducer内のcountのvalueの値 ↓ */}
        <div>value: { props.value }</div>
        {/* ActionCreatorからimportした関数 ↓ */}
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// src/reducers/index.jsのexport default combineReducers({ count })で指定している。
const mapStateToProps = state => ({ value: state.count.value })

// const mapDispatchToProps = dispatch => ({  ・・・③
//   increment: () => dispatch(increment()),  ・・・①
//   decrement: () => dispatch(decrement()),  ・・・②
// })
// ①incrementをキーに、increment()関数を引数にもつdispatch関数を値に  
// ②decrementをキーに、decrement()関数を引数にもつdispatch関数を値に  
// ③定義したmapDispatchToPropを定義している。
// リファクタリングした結果 ↓
const mapDispatchToProps = ({ increment, decrement })

// ★ StateとActionをコンポーネントに関連付けるための重要な記述 ★
export default connect(mapStateToProps, mapDispatchToProps)(App);


