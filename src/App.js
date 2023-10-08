import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './Header';

function App() {

const [person, setPerson] = useState([])

const persons = ()=>{
  fetch("https://randomuser.me/api/")
  .then((e)=>e.json())
  // .then((e)=>console.log(e.results))
  .then((person)=>setPerson(person.results))
}
useEffect(() => persons(), []);
  return (
    <div className="App">
      {
        person.map((m)=>(
          <Header person={m}/>
        ))
      }
    

    </div>
   
  );
}


export default App;
