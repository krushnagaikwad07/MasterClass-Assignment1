import { useState } from 'react';
import './App.css';

function App() {
  
  const [random, setRandom]= useState([])

  const generate = () => {
setRandom([...random, Math.round(Math.random()*100) +1]);

  }
  return (
  <div>
    <button onClick={generate}>Generate Number</button>
    {random.map((el)=>(
      <div>{el}</div>
    ))}


  </div>
  );
}

export default App;
