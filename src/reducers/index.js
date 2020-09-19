// このindex.jsはアプリケーション内のReducerを総括する
// 全てのReducerをひとつのReducerに結合

import { combineReducers } from 'redux'; // Reducerを結合する
import count from './count';

export default combineReducers({ count })
// export default combineReducers({ hoge, fuga, bar, baz })