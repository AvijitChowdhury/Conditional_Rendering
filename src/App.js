import { useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [familier , setFamilier] = useState(false);
  return (
    <div className="App">
       <h2>Current Value :{familier.toString()}</h2>
            <button onClick={()=>setFamilier(!familier)}>Toggle Friend</button>
            <User familier={familier}></User>
            
    </div>
  );
}

export default App;
