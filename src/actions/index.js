import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}



// // Reducerでも使うため、exportしておく
// // 複数の場所で活用されるデータについては、一箇所で定義しておく
// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'


// // ActionCreatorの定義。Actionを返す。
// // Viewを担当するコンポーネントで利用するためexportする
// export const increment = () => {
//   return {
//     type: INCREMENT
//   }
// }
// export const decrement = () => {
//   return {
//     type: DECREMENT
//   }
// }
// // これらは、リファクタリングできる
// // export const increment = () => ({
// //   type: 'INCREMENT'
// // })
