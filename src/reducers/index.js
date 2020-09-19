// このindex.jsはアプリケーション内のReducerを総括する
// 全てのReducerをひとつのReducerに結合

import { combineReducers } from 'redux'; // Reducerを結合する
import count from './count';

export default combineReducers({ count }) // storeを作成する際に使用するので、exportする
// 複数のreducerを使う記述の例
// export default combineReducers({ hoge, fuga, bar, baz })