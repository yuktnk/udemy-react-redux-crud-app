import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5},
    { age: 434}
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age}years old! </div>
}

User.defaultProps = {
  name: "NoName",
  age: "NoAge"
}

export default App;