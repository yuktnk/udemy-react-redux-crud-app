import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input 
//         type="text" 
//         onChange={() => {console.log("I am clicked");}}
//         />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}


export default App;