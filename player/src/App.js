import React, { useState, createContext, useContext } from 'react';
import './App.css';

// STEP 1: create a context object
const NameContext = createContext()
console.log(NameContext.Provider)


function App() {
  const [name, setName] = useState('Harry Potter')
  return (
    // STEP 2: wrap component tree inside Provider component
    // STEP 3: pass state data to the 'value' prop of the Provider and remove passing of prop directly to the child
  <NameContext.Provider value={name}>
    <div className="App">
      {/* <Child name={name}/> */}
      <Child />
    </div>
  </NameContext.Provider>
  );
}

export default App;

// STEP 4: consume the data in some child component
const Child = props => {
  return (
    <GrandChild />
  )
}

const GrandChild = () => {
    const name = useContext(NameContext)
    return <h2>{name}</h2>
}