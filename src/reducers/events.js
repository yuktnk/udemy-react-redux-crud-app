import _ from 'lodash';
import {
  CREATE_EVENT,
  READ_EVENTS, 
  READ_EVENT, 
  UPDATE_EVENT, 
  DELETE_EVENT, 
} from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
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