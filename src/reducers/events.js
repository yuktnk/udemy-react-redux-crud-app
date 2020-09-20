import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}





// import { INCREMENT, DECREMENT } from '../actions';

// // steteの初期値を定義する。
// const initialState = {
//   value: 0
// }
// // これが本体。関数として定義する。引数は2つ（state, action）
// // reducers/index.jsに渡すためにexportする。
// export default (state = initialState, action) => {
//   switch(action.type) {
//     case INCREMENT: // ①
//       return { value: state.value + 1 }
//     case DECREMENT: // ②
//       return { value: state.value - 1 }
//     default:        // ③
//       return state
//   }
// }