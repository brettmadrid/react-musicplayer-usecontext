import React, { useState, createContext } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Harry Potter')
  return (
    <div className="App">
      <Child name={name}/>
    </div>
  );
}

export default App;

const Child = (props) => {
  return (
    <GrandChild name={props.name} />
  )
}

const GrandChild = props => {
  return (
    <h2>{props.name}</h2>
  )
}