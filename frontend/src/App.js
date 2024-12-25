import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState} from 'react'



function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function getText(){
    axios.get('http://localhost:5000/', {crossdomain: true})
    .then(response =>{
      setName(response.data.name)
      setText(response.data.text)
    })
  }

  return (
    <div className="App">
        <button onClick={getText}>
          ลองกดดู
        </button>
        <h1>{name}</h1>
        <h1>{text}</h1>
    </div>
  );
}

export default App;
